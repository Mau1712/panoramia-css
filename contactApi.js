import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import { probeGodaddyEmailGateway, sendEmail } from "./godaddyEmail.js";

const trimEnv = (value) => (typeof value === "string" ? value.trim() : "");

const CONTACT_EMAIL =
  trimEnv(process.env.CONTACT_EMAIL) ||
  trimEnv(process.env.CONTACT_FORM_RECIPIENT_EMAIL) ||
  "contact@panoramiaccs.com";

const SMTP_HOST = trimEnv(process.env.SMTP_HOST);
const SMTP_PORT = Number(trimEnv(process.env.SMTP_PORT)) || 465;
const SMTP_SECURE = String(process.env.SMTP_SECURE ?? "true").trim() !== "false";
const SMTP_USER = trimEnv(process.env.SMTP_USER);
const SMTP_PASSWORD = process.env.SMTP_PASSWORD ?? "";
const SMTP_FROM = trimEnv(process.env.SMTP_FROM) || SMTP_USER || CONTACT_EMAIL;
const CONTACT_DEBUG = String(process.env.CONTACT_DEBUG ?? "").trim() === "true";

/**
 * auto     — prefer GoDaddy gateway when available, else SMTP (local/dev)
 * godaddy  — only GoDaddy Node.js Hosting loopback gateway
 * smtp     — only Nodemailer SMTP
 */
const EMAIL_DRIVER = (trimEnv(process.env.EMAIL_DRIVER) || "auto").toLowerCase();

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

/** @type {Map<string, number[]>} */
const rateLimitHits = new Map();

const isLocalRelayHost = (host) =>
  host === "localhost" ||
  host === "127.0.0.1" ||
  host === "relay-hosting.secureserver.net";

const isValidEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= MAX_EMAIL_LENGTH;

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0]?.trim() || req.ip || "unknown";
  }
  return req.ip || "unknown";
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const recent = (rateLimitHits.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitHits.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitHits.set(ip, recent);
  return false;
};

const createTransporter = () => {
  if (!SMTP_HOST) {
    return null;
  }

  const needsAuth = Boolean(SMTP_USER && SMTP_PASSWORD);
  if (!needsAuth && !isLocalRelayHost(SMTP_HOST)) {
    return null;
  }

  /** @type {import("nodemailer").TransportOptions} */
  const options = {
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
    family: 4,
    tls: {
      minVersion: "TLSv1.2",
      rejectUnauthorized:
        String(process.env.SMTP_TLS_REJECT_UNAUTHORIZED ?? "true").trim() !==
        "false",
    },
  };

  if (needsAuth) {
    options.auth = {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    };
  }

  if (!SMTP_SECURE && SMTP_PORT === 587) {
    options.requireTLS = true;
  }

  return nodemailer.createTransport(options);
};

const classifyMailError = (error) => {
  const message = typeof error?.message === "string" ? error.message : "";
  const code = typeof error?.code === "string" ? error.code : "";
  const responseCode =
    typeof error?.responseCode === "number" ? error.responseCode : null;

  if (message.includes("email gateway unreachable")) {
    return "godaddy_gateway_unreachable";
  }
  if (message.includes("email send failed")) {
    return "godaddy_gateway_rejected";
  }
  if (code === "EAUTH" || responseCode === 535) {
    return "smtp_auth_failed";
  }
  if (
    code === "ESOCKET" ||
    code === "ECONNECTION" ||
    code === "ETIMEDOUT" ||
    code === "ECONNREFUSED" ||
    code === "ENOTFOUND"
  ) {
    return "smtp_connection_failed";
  }
  return "mail_send_failed";
};

const buildMessageBodies = ({ name, email, message }) => {
  const subject = `Contacto web — ${name}`;
  const text = [
    "Nueva consulta desde panoramiaccs.com",
    "",
    `Nombre / Empresa: ${name}`,
    `Email: ${email}`,
    "",
    "Mensaje:",
    message,
  ].join("\n");

  const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #111; line-height: 1.5;">
        <h2 style="margin: 0 0 16px; font-size: 18px;">Nueva consulta desde panoramiaccs.com</h2>
        <p style="margin: 0 0 8px;"><strong>Nombre / Empresa:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 16px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin: 0 0 8px;"><strong>Mensaje:</strong></p>
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `.trim();

  return { subject, text, html };
};

const sendViaGodaddyGateway = async ({ name, email, message }) => {
  const { subject, text, html } = buildMessageBodies({ name, email, message });

  // Omit `from` — GoDaddy gateway picks the verified canonical sender.
  return sendEmail({
    to: CONTACT_EMAIL,
    replyTo: email,
    subject,
    text,
    html,
  });
};

const sendViaSmtp = async ({ name, email, message }) => {
  const transporter = createTransporter();

  if (!transporter) {
    const error = new Error("SMTP is not configured");
    error.code = "MAIL_NOT_CONFIGURED";
    throw error;
  }

  const { subject, text, html } = buildMessageBodies({ name, email, message });

  return transporter.sendMail({
    from: `"Panoramia Capital" <${SMTP_FROM}>`,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject,
    text,
    html,
  });
};

const sendContactMail = async (payload) => {
  if (EMAIL_DRIVER === "godaddy") {
    return sendViaGodaddyGateway(payload);
  }

  if (EMAIL_DRIVER === "smtp") {
    return sendViaSmtp(payload);
  }

  // auto: prefer GoDaddy gateway in hosting; fall back to SMTP for local/dev.
  try {
    return await sendViaGodaddyGateway(payload);
  } catch (gatewayError) {
    const gatewayCode = classifyMailError(gatewayError);
    if (gatewayCode !== "godaddy_gateway_unreachable") {
      throw gatewayError;
    }

    console.warn(
      "[contact] GoDaddy email gateway unreachable; falling back to SMTP.",
      gatewayError?.message,
    );
    return sendViaSmtp(payload);
  }
};

export const handleContactPost = async (req, res) => {
  try {
    const ip = getClientIp(req);

    if (isRateLimited(ip)) {
      return res.status(429).json({
        ok: false,
        error: "rate_limited",
        message: "Too many requests. Please try again later.",
      });
    }

    const body = req.body && typeof req.body === "object" ? req.body : {};
    const honeypot =
      typeof body.website === "string" ? body.website.trim() : "";

    if (honeypot) {
      return res.status(200).json({ ok: true });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    /** @type {string[]} */
    const errors = [];

    if (!name) errors.push("name");
    else if (name.length > MAX_NAME_LENGTH) errors.push("name_too_long");

    if (!email) errors.push("email");
    else if (!isValidEmail(email)) errors.push("email_invalid");

    if (!message) errors.push("message");
    else if (message.length > MAX_MESSAGE_LENGTH) errors.push("message_too_long");

    if (body.privacyAccepted !== true) {
      errors.push("privacy_required");
    }

    if (errors.length > 0) {
      return res.status(400).json({
        ok: false,
        error: "validation_error",
        fields: errors,
        message: "Invalid contact form payload.",
      });
    }

    if (!CONTACT_EMAIL) {
      console.error("[contact] CONTACT_EMAIL is not configured");
      return res.status(503).json({
        ok: false,
        error: "mail_not_configured",
        message: "Email service is temporarily unavailable.",
      });
    }

    await sendContactMail({ name, email, message });
    return res.status(200).json({ ok: true });
  } catch (error) {
    if (error?.code === "MAIL_NOT_CONFIGURED") {
      console.error(
        "[contact] No mail transport available. On GoDaddy Node use the platform gateway; locally set SMTP_*.",
      );
      return res.status(503).json({
        ok: false,
        error: "mail_not_configured",
        message: "Email service is temporarily unavailable.",
      });
    }

    const mailError = classifyMailError(error);
    console.error("[contact] Failed to send email:", {
      error: mailError,
      code: error?.code,
      command: error?.command,
      responseCode: error?.responseCode,
      response: error?.response,
      message: error?.message,
      emailDriver: EMAIL_DRIVER,
      smtpHost: SMTP_HOST,
      smtpPort: SMTP_PORT,
    });

    return res.status(500).json({
      ok: false,
      error: mailError,
      message: "Unable to send message. Please try again later.",
    });
  }
};

export const handleContactHealthGet = async (_req, res) => {
  if (!CONTACT_DEBUG) {
    return res.status(404).json({ ok: false, error: "not_found" });
  }

  const gateway = await probeGodaddyEmailGateway();
  const smtpConfigured = Boolean(createTransporter());

  return res.status(200).json({
    ok: true,
    emailDriver: EMAIL_DRIVER,
    contactEmail: CONTACT_EMAIL,
    godaddyGateway: gateway,
    smtp: {
      configured: smtpConfigured,
      host: SMTP_HOST || null,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      authConfigured: Boolean(SMTP_USER && SMTP_PASSWORD),
    },
  });
};

export const createContactRouter = () => {
  const router = express.Router();
  router.post("/contact", handleContactPost);
  router.get("/contact/health", handleContactHealthGet);
  return router;
};

export const contactJsonParser = express.json({ limit: "32kb" });

export const contactPayloadErrorHandler = (err, _req, res, next) => {
  if (err?.type === "entity.too.large") {
    return res.status(413).json({
      ok: false,
      error: "payload_too_large",
      message: "Request payload is too large.",
    });
  }

  if (err instanceof SyntaxError && "body" in err) {
    return res.status(400).json({
      ok: false,
      error: "invalid_json",
      message: "Invalid JSON payload.",
    });
  }

  return next(err);
};

export const logSmtpBootstrap = () => {
  console.log("[contact] mail bootstrap", {
    emailDriver: EMAIL_DRIVER,
    contactEmail: CONTACT_EMAIL,
    smtpHost: SMTP_HOST || null,
    smtpPort: SMTP_PORT,
    smtpSecure: SMTP_SECURE,
    smtpAuthConfigured: Boolean(SMTP_USER && SMTP_PASSWORD),
    debug: CONTACT_DEBUG,
  });
};
