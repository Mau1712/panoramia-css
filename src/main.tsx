import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@app/i18n";
import App from "./App.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element "#root" was not found');
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

const hasPrerenderedMarkup = rootElement.hasChildNodes();

if (hasPrerenderedMarkup) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
