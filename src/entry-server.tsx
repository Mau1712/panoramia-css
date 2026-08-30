import { renderToString } from "react-dom/server";
import type { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { StaticRouter } from "react-router";
import { ServerStyleSheet } from "styled-components";
import App from "./App";
import type { AppLanguage } from "@app/i18n";
import { createI18nInstance } from "@app/i18n/createI18nInstance";

export type RenderResult = {
  html: string;
  css: string;
};

export const render = async (
  url: string,
  locale: AppLanguage = "es",
): Promise<RenderResult> => {
  const sheet = new ServerStyleSheet();
  const i18n = await createI18nInstance(locale);

  const StaticRouterForUrl = ({ children }: { children: ReactNode }) => (
    <StaticRouter location={url}>{children}</StaticRouter>
  );

  try {
    const html = renderToString(
      sheet.collectStyles(
        <I18nextProvider i18n={i18n}>
          <App Router={StaticRouterForUrl} />
        </I18nextProvider>,
      ),
    );

    return {
      html,
      css: sheet.getStyleTags(),
    };
  } finally {
    sheet.seal();
  }
};
