/**
 * GoDaddy Node.js Hosting email gateway helper.
 * @see https://github.com/godaddy/nodejs-hosting-agent-skill (email.md)
 *
 * Posts JSON to the loopback gateway. Outbound SMTP is not routable from
 * the Node.js Hosting container — do not use nodemailer there.
 */

const EMAIL_GATEWAY_URL = "http://127.0.0.1:2525/api/email/send";
const REQUEST_TIMEOUT_MS = 30_000;

const toArray = (value) => {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
};

const isAbortLike = (err) =>
  err instanceof Error &&
  (err.name === "AbortError" || err.name === "TimeoutError");

const describeError = (err) => {
  if (err instanceof Error) {
    if (isAbortLike(err)) return `timed out after ${REQUEST_TIMEOUT_MS}ms`;
    return err.message;
  }
  return String(err);
};

const parseBody = async (response) => {
  try {
    return await response.json();
  } catch (err) {
    if (isAbortLike(err)) throw err;
    return {
      success: false,
      error: `non-JSON response (HTTP ${response.status})`,
    };
  }
};

const buildPayload = (input) => {
  const payload = {
    to: toArray(input.to),
    subject: input.subject,
  };

  const cc = toArray(input.cc);
  if (cc.length > 0) payload.cc = cc;

  const bcc = toArray(input.bcc);
  if (bcc.length > 0) payload.bcc = bcc;

  if (input.text) payload.text = input.text;
  if (input.html) payload.html = input.html;
  if (input.replyTo) payload.replyTo = input.replyTo;
  // Only set from when explicitly provided (must be a verified domain sender).
  if (input.from) payload.from = input.from;

  return payload;
};

/**
 * @param {{
 *   to: string | string[];
 *   cc?: string | string[];
 *   bcc?: string | string[];
 *   subject: string;
 *   text?: string;
 *   html?: string;
 *   replyTo?: string;
 *   from?: string;
 * }} input
 */
export const sendEmail = async (input) => {
  const payload = buildPayload(input);

  let response;
  let body;

  try {
    response = await fetch(EMAIL_GATEWAY_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
    body = await parseBody(response);
  } catch (err) {
    throw new Error(`email gateway unreachable: ${describeError(err)}`);
  }

  if (!response.ok || !body.success) {
    const detail = body.error ?? `HTTP ${response.status}`;
    const idSuffix = body.messageId ? ` (messageId=${body.messageId})` : "";
    throw new Error(`email send failed: ${detail}${idSuffix}`);
  }

  if (!body.messageId) {
    throw new Error("email send succeeded but gateway returned no messageId");
  }

  return { messageId: body.messageId };
};

/** Probe whether the GoDaddy loopback email gateway is reachable. */
export const probeGodaddyEmailGateway = async () => {
  try {
    const response = await fetch(EMAIL_GATEWAY_URL, {
      method: "OPTIONS",
      signal: AbortSignal.timeout(3_000),
    });
    return { reachable: true, status: response.status };
  } catch (err) {
    // OPTIONS may not be supported; a connection refusal/timeout means absent.
    try {
      const response = await fetch(EMAIL_GATEWAY_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ to: [], subject: "probe" }),
        signal: AbortSignal.timeout(3_000),
      });
      return { reachable: true, status: response.status };
    } catch (innerErr) {
      return {
        reachable: false,
        message: describeError(innerErr ?? err),
      };
    }
  }
};
