import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { getLocaleFromPathname } from "./localePath";

/** Keep i18n language aligned with `/en` URL prefix (source of truth for SEO). */
export const LocaleSync = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const locale = getLocaleFromPathname(pathname);

  useEffect(() => {
    const current = (i18n.resolvedLanguage ?? i18n.language).slice(0, 2);
    if (current !== locale) {
      void i18n.changeLanguage(locale);
    }
  }, [i18n, locale, pathname]);

  return null;
};
