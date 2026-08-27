import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";

const trimEnv = (value) => (typeof value === "string" ? value.trim() : "");

const CONTACT_EMAIL =
  trimEnv(process.env.CONTACT_EMAIL) || "contact@panoramiaccs.com";
const SMTP_HOST = trimEnv(process.env.SMTP_HOST);
const SMTP_PORT = Number(trimEnv(process.env.SMTP_PORT)) || 465;
const SMTP_SECURE = String(process.env.SMTP_SECURE ?? "true").trim() !== "false";
const SMTP_USER = trimEnv(process.env.SMTP_USER);
const SMTP_PASSWORD = process.env.SMTP_PASSWORD ?? "";
const SMTP_FROM = trimEnv(process.env.SMTP_FROM) || SMTP_USER || CONTACT_EMAIL;
const CONTACT_DEBUG = String(process.env.CONTACT_DEBUG ?? "").trim() === "true";

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
    tls: {
      minVersion: "TLSv1.2",
      // Some GoDaddy cPanel hosts present certs that fail strict validation
      // from managed Node runtimes; keep overridable via env.
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

const classifySmtpError = (error) => {
  const code = typeof error?.code === "string" ? error.code : "";
  const responseCode =
    typeof error?.responseCode === "number" ? error.responseCode : null;

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
  return "smtp_send_failed";
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

    // Silent success for bots that fill the honeypot.
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

    if (errors.length > 0) {
      return res.status(400).json({
        ok: false,
        error: "validation_error",
        fields: errors,
        message: "Invalid contact form payload.",
      });
    }

    const transporter = createTransporter();

    if (!transporter) {
      console.error(
        "[contact] SMTP is not configured. Set SMTP_HOST and either auth credentials or a local relay host.",
      );
      return res.status(503).json({
        ok: false,
        error: "mail_not_configured",
        message: "Email service is temporarily unavailable.",
      });
    }

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

    await transporter.sendMail({
      from: `"Panoramia Capital" <${SMTP_FROM}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    const smtpError = classifySmtpError(error);
    console.error("[contact] Failed to send email:", {
      error: smtpError,
      code: error?.code,
      command: error?.command,
      responseCode: error?.responseCode,
      response: error?.response,
      message: error?.message,
      smtpHost: SMTP_HOST,
      smtpPort: SMTP_PORT,
      smtpSecure: SMTP_SECURE,
      smtpUserSet: Boolean(SMTP_USER),
    });

    return res.status(500).json({
      ok: false,
      error: smtpError,
      message: "Unable to send message. Please try again later.",
    });
  }
};

export const handleContactHealthGet = async (_req, res) => {
  if (!CONTACT_DEBUG) {
    return res.status(404).json({ ok: false, error: "not_found" });
  }

  const transporter = createTransporter();
  const config = {
    host: SMTP_HOST || null,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    user: SMTP_USER || null,
    from: SMTP_FROM,
    to: CONTACT_EMAIL,
    authConfigured: Boolean(SMTP_USER && SMTP_PASSWORD),
  };

  if (!transporter) {
    return res.status(503).json({
      ok: false,
      error: "mail_not_configured",
      config,
    });
  }

  try {
    await transporter.verify();
    return res.status(200).json({ ok: true, verify: "ok", config });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      verify: "fail",
      error: classifySmtpError(error),
      code: error?.code || null,
      responseCode: error?.responseCode || null,
      message: error?.message || null,
      config,
    });
  }
};

/** Shared contact API router mounted at `/api`. */
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
  console.log("[contact] SMTP bootstrap", {
    host: SMTP_HOST || null,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    user: SMTP_USER || null,
    from: SMTP_FROM,
    to: CONTACT_EMAIL,
    authConfigured: Boolean(SMTP_USER && SMTP_PASSWORD),
    debug: CONTACT_DEBUG,
  });
};
