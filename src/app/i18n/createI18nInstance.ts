import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "./locales/en/common.json";
import esCommon from "./locales/es/common.json";
import type { AppLanguage } from "./i18n";

export const createI18nInstance = async (lng: AppLanguage) => {
  const instance = i18n.createInstance();
  instance.use(initReactI18next);

  await instance.init({
    lng,
    resources: {
      en: { common: enCommon },
      es: { common: esCommon },
    },
    defaultNS: "common",
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    interpolation: {
      escapeValue: false,
    },
  });

  return instance;
};
