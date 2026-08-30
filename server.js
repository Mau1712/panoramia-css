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

app.use(express.static(distPath, { index: false, redirect: false }));

/** Legacy URLs → canonical destinations (HTTP 301, not client-side Navigate). */
const permanentRedirects = new Map([
  ["/platform", "/"],
  ["/en/platform", "/en"],
  ["/current-projects/urban-logistics", "/current-projects"],
  ["/en/current-projects/urban-logistics", "/en/current-projects"],
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

const resolveNotFoundHtml = (requestPath) => {
  const normalized = normalizeRequestPath(requestPath);
  const isEnglish =
    normalized === "/en" || normalized.startsWith("/en/");

  const localized = path.join(
    distPath,
    isEnglish ? "en" : "",
    "404.html",
  );

  if (fs.existsSync(localized)) {
    return localized;
  }

  return path.join(distPath, "404.html");
};

const sendNotFound = (req, res, next) => {
  const notFoundPage = resolveNotFoundHtml(req.path);

  if (!fs.existsSync(notFoundPage)) {
    return res.status(404).type("text").send("Not Found");
  }

  return res.status(404).sendFile(notFoundPage, (error) => {
    if (error) next(error);
  });
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

  return sendNotFound(req, res, next);
});

app.use(contactPayloadErrorHandler);

app.listen(port, "0.0.0.0", () => {
  logSmtpBootstrap();
  console.log(`Production server listening on port ${port}`);
});
