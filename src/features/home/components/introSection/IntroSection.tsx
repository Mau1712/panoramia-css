import { useTranslation } from "react-i18next";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import {
  IntroSectionElement,
  IntroSectionSheenElement,
  IntroSectionTextElement,
  IntroSectionWatermarkElement,
} from "./IntroSection.elements";

export const IntroSection = () => {
  const { t } = useTranslation();

  return (
    <IntroSectionElement>
      <IntroSectionWatermarkElement aria-hidden />
      <IntroSectionSheenElement aria-hidden />
      <SectionContainer>
        <IntroSectionTextElement>
          {t("pages.home.intro.text")}
        </IntroSectionTextElement>
      </SectionContainer>
    </IntroSectionElement>
  );
};
