import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import express from "express";
import { fileURLToPath, URL } from "node:url";
import {
  contactJsonParser,
  contactPayloadErrorHandler,
  createContactRouter,
} from "./contactApi.js";

const resolveSrc = (segment = "") =>
  fileURLToPath(new URL(`./src${segment}`, import.meta.url));

const contactApiDevPlugin = (): Plugin => ({
  name: "contact-api-dev",
  configureServer(server: ViteDevServer) {
    const api = express();
    api.use(contactJsonParser);
    api.use("/api", createContactRouter());
    api.use(contactPayloadErrorHandler);
    server.middlewares.use(api);
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    contactApiDevPlugin(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "styled-components"],
    alias: {
      "@": resolveSrc(),
      "@shared": resolveSrc("/shared"),
      "@app": resolveSrc("/app"),
      "@features": resolveSrc("/features"),
      "@assets": resolveSrc("/assets"),
    },
  },
});
