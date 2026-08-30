export { i18n, defaultNS, supportedLanguages } from "./i18n";
export type { AppLanguage } from "./i18n";
export {
  EN_LOCALE_PREFIX,
  getLocaleFromPathname,
  localizePath,
  stripLocalePrefix,
  switchLocalePath,
} from "./localePath";
export { LocaleSync } from "./LocaleSync";
export {
  useContentPathname,
  useLocale,
  useLocalizedPath,
} from "./useLocalizedPath";
