import { useTranslation } from "react-i18next";
import bannerImage from "@assets/trackRecord/residential/land_development.png";
import { residentialTrackBannerPoints } from "@features/trackRecord/data";
import {
  ResidentialTrackBannerContentElement,
  ResidentialTrackBannerElement,
  ResidentialTrackBannerInnerElement,
  ResidentialTrackBannerListElement,
  ResidentialTrackBannerListItemElement,
  ResidentialTrackBannerMediaElement,
  ResidentialTrackBannerOverlayElement,
  ResidentialTrackBannerTextElement,
  ResidentialTrackBannerTitleElement,
} from "./ResidentialTrackBanner.elements";

export const ResidentialTrackBanner = () => {
  const { t } = useTranslation("common");

  return (
    <ResidentialTrackBannerElement
      aria-label={t("pages.trackRecord.projects.residential.banner.title")}
    >
      <ResidentialTrackBannerMediaElement
        src={bannerImage}
        alt={t("pages.trackRecord.projects.residential.banner.imageAlt")}
      />
      <ResidentialTrackBannerOverlayElement aria-hidden />
      <ResidentialTrackBannerInnerElement>
        <ResidentialTrackBannerContentElement>
          <ResidentialTrackBannerTitleElement>
            {t("pages.trackRecord.projects.residential.banner.title")}
          </ResidentialTrackBannerTitleElement>

          <ResidentialTrackBannerListElement>
            {residentialTrackBannerPoints.map((pointKey) => (
              <ResidentialTrackBannerListItemElement key={pointKey}>
                {t(pointKey)}
              </ResidentialTrackBannerListItemElement>
            ))}
          </ResidentialTrackBannerListElement>

          <ResidentialTrackBannerTextElement>
            {t("pages.trackRecord.projects.residential.banner.text")}
          </ResidentialTrackBannerTextElement>
        </ResidentialTrackBannerContentElement>
      </ResidentialTrackBannerInnerElement>
    </ResidentialTrackBannerElement>
  );
};
