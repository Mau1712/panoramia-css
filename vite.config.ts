import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { fileURLToPath, URL } from "node:url";

const resolveSrc = (segment = "") =>
  fileURLToPath(new URL(`./src${segment}`, import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
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
