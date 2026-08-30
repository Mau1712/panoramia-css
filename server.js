import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  contactJsonParser,
  contactPayloadErrorHandler,
  createContactRouter,
  logSmtpBootstrap,
} from "./contactApi.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "dist");
const port = Number(process.env.PORT) || 3000;

const app = express();

app.disable("x-powered-by");
app.use(contactJsonParser);
app.use("/api", createContactRouter());

app.use(express.static(distPath, { index: false }));

/** Legacy URLs → canonical destinations (HTTP 301, not client-side Navigate). */
const permanentRedirects = new Map([
  ["/platform", "/"],
  ["/en/platform", "/en"],
]);

const normalizeRequestPath = (requestPath) =>
  requestPath.length > 1 && requestPath.endsWith("/")
    ? requestPath.slice(0, -1)
    : requestPath;

const resolvePrerenderedHtml = (requestPath) => {
  const normalized = normalizeRequestPath(requestPath);

  if (normalized === "/" || normalized === "") {
    return path.join(distPath, "index.html");
  }

  const safeRelative = normalized.replace(/^\/+/, "").replace(/\.\./g, "");
  return path.join(distPath, safeRelative, "index.html");
};

app.get("/{*path}", (req, res, next) => {
  const normalized = normalizeRequestPath(req.path);
  const redirectTo = permanentRedirects.get(normalized);

  if (redirectTo) {
    return res.redirect(301, redirectTo);
  }

  const prerendered = resolvePrerenderedHtml(normalized);

  if (fs.existsSync(prerendered)) {
    return res.sendFile(prerendered);
  }

  return res.sendFile(path.join(distPath, "index.html"), (error) => {
    if (error) next(error);
  });
});

app.use(contactPayloadErrorHandler);

app.listen(port, "0.0.0.0", () => {
  logSmtpBootstrap();
  console.log(`Production server listening on port ${port}`);
});
