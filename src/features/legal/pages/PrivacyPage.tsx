import { useTranslation } from "react-i18next";
import { localizePath, useLocale } from "@app/i18n";
import { footerEmail } from "@features/shell/data";
import {
  PrivacyBackLinkElement,
  PrivacyHeaderElement,
  PrivacyInnerElement,
  PrivacyIntroElement,
  PrivacyListElement,
  PrivacyMailLinkElement,
  PrivacyPageElement,
  PrivacySectionElement,
  PrivacySectionTitleElement,
  PrivacyTextElement,
  PrivacyTitleElement,
  PrivacyUpdatedElement,
} from "./PrivacyPage.elements";

const SECTION_KEYS = [
  "controller",
  "dataCollected",
  "purposes",
  "legalBasis",
  "retention",
  "recipients",
  "cookies",
  "rights",
  "contact",
  "updates",
] as const;

type PrivacySectionKey = (typeof SECTION_KEYS)[number];

const getSectionItems = (
  t: ReturnType<typeof useTranslation>["t"],
  key: PrivacySectionKey,
): string[] => {
  const value = t(`pages.privacy.sections.${key}.items`, {
    returnObjects: true,
    defaultValue: [],
  });

  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
};

export const PrivacyPage = () => {
  const { t } = useTranslation("common");
  const locale = useLocale();

  return (
    <PrivacyPageElement aria-label={t("pages.privacy.title")}>
      <PrivacyInnerElement>
        <PrivacyHeaderElement>
          <PrivacyTitleElement>{t("pages.privacy.title")}</PrivacyTitleElement>
          <PrivacyUpdatedElement>
            {t("pages.privacy.updated")}
          </PrivacyUpdatedElement>
        </PrivacyHeaderElement>

        <PrivacyIntroElement>{t("pages.privacy.intro")}</PrivacyIntroElement>

        {SECTION_KEYS.map((key) => {
          const items = getSectionItems(t, key);

          return (
            <PrivacySectionElement key={key}>
              <PrivacySectionTitleElement>
                {t(`pages.privacy.sections.${key}.title`)}
              </PrivacySectionTitleElement>
              <PrivacyTextElement>
                {t(`pages.privacy.sections.${key}.text`)}
              </PrivacyTextElement>
              {items.length > 0 ? (
                <PrivacyListElement>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </PrivacyListElement>
              ) : null}
              {key === "contact" ? (
                <PrivacyTextElement>
                  <PrivacyMailLinkElement href={`mailto:${footerEmail}`}>
                    {footerEmail}
                  </PrivacyMailLinkElement>
                </PrivacyTextElement>
              ) : null}
            </PrivacySectionElement>
          );
        })}

        <PrivacyBackLinkElement to={localizePath("/contact", locale)}>
          {t("pages.privacy.backToContact")}
        </PrivacyBackLinkElement>
      </PrivacyInnerElement>
    </PrivacyPageElement>
  );
};
