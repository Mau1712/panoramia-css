import { useTranslation } from "react-i18next";
import bannerImage from "@assets/caracas.webp";
import {
  AboutUsBannerContentElement,
  AboutUsBannerElement,
  AboutUsBannerInnerElement,
  AboutUsBannerMediaElement,
  AboutUsBannerOverlayElement,
  AboutUsBannerTextElement,
  AboutUsBannerTitleElement,
} from "./AboutUsBanner.elements";

export const AboutUsBanner = () => {
  const { t } = useTranslation("common");

  return (
    <AboutUsBannerElement aria-label={t("pages.aboutUs.banner.title")}>
      <AboutUsBannerMediaElement
        src={bannerImage}
        alt={t("pages.aboutUs.banner.imageAlt")}
      />
      <AboutUsBannerOverlayElement aria-hidden />
      <AboutUsBannerInnerElement>
        <AboutUsBannerContentElement>
          <AboutUsBannerTitleElement>
            {t("pages.aboutUs.banner.title")}
          </AboutUsBannerTitleElement>
          <AboutUsBannerTextElement>
            {t("pages.aboutUs.banner.text")}
          </AboutUsBannerTextElement>
        </AboutUsBannerContentElement>
      </AboutUsBannerInnerElement>
    </AboutUsBannerElement>
  );
};
