import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  resolveRouteSeo,
  type SeoLocale,
} from "./siteMeta";

const upsertMetaByName = (name: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[name="${name}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`,
  );

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const toSeoLocale = (language: string): SeoLocale =>
  language.startsWith("es") ? "es" : "en";

/**
 * Keeps document title/description/canonical in sync with the active route
 * and language. Social crawlers that do not execute JS still rely on index.html.
 */
export const DocumentMeta = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const locale = toSeoLocale(i18n.resolvedLanguage ?? i18n.language);
  const seo = resolveRouteSeo(pathname, locale);
  const canonical = absoluteUrl(pathname);

  useEffect(() => {
    document.title = seo.title;
    document.documentElement.lang = locale;

    upsertMetaByName("description", seo.description);
    upsertMetaByProperty("og:title", seo.title);
    upsertMetaByProperty("og:description", seo.description);
    upsertMetaByProperty("og:url", canonical);
    upsertMetaByProperty("og:locale", locale === "es" ? "es_VE" : "en_US");
    upsertMetaByName("twitter:title", seo.title);
    upsertMetaByName("twitter:description", seo.description);
    upsertMetaByName("twitter:image", DEFAULT_OG_IMAGE);
    upsertMetaByProperty("og:image", DEFAULT_OG_IMAGE);
    upsertMetaByProperty("og:site_name", SITE_NAME);
    upsertLink("canonical", canonical);
  }, [canonical, locale, seo.description, seo.title]);

  return null;
};
