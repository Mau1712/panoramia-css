import { useTranslation } from "react-i18next";
import bannerImage from "@assets/currentProjects/land_holdings_hero1.webp";
import {
  LandHoldingsBannerContentElement,
  LandHoldingsBannerElement,
  LandHoldingsBannerInnerElement,
  LandHoldingsBannerMediaElement,
  LandHoldingsBannerOverlayElement,
  LandHoldingsBannerTextElement,
  LandHoldingsBannerTitleElement,
} from "./LandHoldingsBanner.elements";

export const LandHoldingsBanner = () => {
  const { t } = useTranslation("common");

  return (
    <LandHoldingsBannerElement
      aria-label={t("pages.landHoldings.banner.title")}
    >
      <LandHoldingsBannerMediaElement
        src={bannerImage}
        alt={t("pages.landHoldings.banner.imageAlt")}
      />
      <LandHoldingsBannerOverlayElement aria-hidden />
      <LandHoldingsBannerInnerElement>
        <LandHoldingsBannerContentElement>
          <LandHoldingsBannerTitleElement>
            {t("pages.landHoldings.banner.title")}
          </LandHoldingsBannerTitleElement>
          <LandHoldingsBannerTextElement>
            {t("pages.landHoldings.banner.text")}
          </LandHoldingsBannerTextElement>
        </LandHoldingsBannerContentElement>
      </LandHoldingsBannerInnerElement>
    </LandHoldingsBannerElement>
  );
};
