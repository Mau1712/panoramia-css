import { useLocation } from "react-router-dom";
import type { AppLanguage } from "./i18n";
import {
  getLocaleFromPathname,
  localizePath,
  stripLocalePrefix,
} from "./localePath";

export const useLocale = (): AppLanguage => {
  const { pathname } = useLocation();
  return getLocaleFromPathname(pathname);
};

export const useContentPathname = (): string => {
  const { pathname } = useLocation();
  return stripLocalePrefix(pathname);
};

/** Localize an internal path (keeps hash) for the active URL locale. */
export const useLocalizedPath = () => {
  const locale = useLocale();
  return (path: string) => localizePath(path, locale);
};
