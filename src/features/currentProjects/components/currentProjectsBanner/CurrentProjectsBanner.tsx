import { useTranslation } from "react-i18next";
import bannerImage from "@assets/currentProjects/LastmileMicroulfillmentCentersMain.png";
import {
  CurrentProjectsBannerContentElement,
  CurrentProjectsBannerElement,
  CurrentProjectsBannerInnerElement,
  CurrentProjectsBannerMediaElement,
  CurrentProjectsBannerOverlayElement,
  CurrentProjectsBannerTextElement,
  CurrentProjectsBannerTitleElement,
} from "./CurrentProjectsBanner.elements";

export const CurrentProjectsBanner = () => {
  const { t } = useTranslation("common");

  return (
    <CurrentProjectsBannerElement
      aria-label={t("pages.currentProjects.banner.title")}
    >
      <CurrentProjectsBannerMediaElement
        src={bannerImage}
        alt={t("pages.currentProjects.banner.imageAlt")}
      />
      <CurrentProjectsBannerOverlayElement aria-hidden />
      <CurrentProjectsBannerInnerElement>
        <CurrentProjectsBannerContentElement>
          <CurrentProjectsBannerTitleElement>
            {t("pages.currentProjects.banner.title")}
          </CurrentProjectsBannerTitleElement>
          <CurrentProjectsBannerTextElement>
            {t("pages.currentProjects.banner.text")}
          </CurrentProjectsBannerTextElement>
        </CurrentProjectsBannerContentElement>
      </CurrentProjectsBannerInnerElement>
    </CurrentProjectsBannerElement>
  );
};
