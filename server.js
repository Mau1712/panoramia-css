import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  contactJsonParser,
  contactPayloadErrorHandler,
  createContactRouter,
} from "./contactApi.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "dist");
const port = Number(process.env.PORT) || 3000;

const app = express();

app.disable("x-powered-by");
app.use(contactJsonParser);
app.use("/api", createContactRouter());

app.use(express.static(distPath, { index: false }));

// Express 5 SPA fallback: serve index.html for client-side routes.
app.get("/{*path}", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.use(contactPayloadErrorHandler);

app.listen(port, "0.0.0.0", () => {
  console.log(`Production server listening on port ${port}`);
});
