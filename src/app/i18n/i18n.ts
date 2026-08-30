import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enCommon from "./locales/en/common.json";
import esCommon from "./locales/es/common.json";
import { getLocaleFromPathname } from "./localePath";

export const defaultNS = "common";
export const supportedLanguages = ["en", "es"] as const;

export type AppLanguage = (typeof supportedLanguages)[number];

const initialLng =
  typeof window !== "undefined"
    ? getLocaleFromPathname(window.location.pathname)
    : "es";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: initialLng,
    resources: {
      en: { common: enCommon },
      es: { common: esCommon },
    },
    defaultNS,
    fallbackLng: "en",
    supportedLngs: [...supportedLanguages],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["path", "localStorage", "navigator"],
      caches: ["localStorage"],
      lookupFromPathIndex: 0,
    },
  });

export { i18n };
