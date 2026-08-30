import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { localizePath, useLocale } from "@app/i18n";
import {
  NotFoundCodeElement,
  NotFoundCtaElement,
  NotFoundInnerElement,
  NotFoundSectionElement,
  NotFoundTextElement,
  NotFoundTitleElement,
} from "./NotFoundPage.elements";

export const NotFoundPage = () => {
  const { t } = useTranslation("common");
  const locale = useLocale();

  useEffect(() => {
    document.title = t("notFound.documentTitle");
    document.documentElement.lang = locale;

    let robots = document.head.querySelector<HTMLMetaElement>(
      'meta[name="robots"]',
    );
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");
  }, [locale, t]);

  return (
    <NotFoundSectionElement aria-label={t("notFound.title")}>
      <NotFoundInnerElement>
        <NotFoundCodeElement>{t("notFound.code")}</NotFoundCodeElement>
        <NotFoundTitleElement>{t("notFound.title")}</NotFoundTitleElement>
        <NotFoundTextElement>{t("notFound.description")}</NotFoundTextElement>
        <NotFoundCtaElement to={localizePath("/", locale)}>
          {t("notFound.cta")}
        </NotFoundCtaElement>
      </NotFoundInnerElement>
    </NotFoundSectionElement>
  );
};
