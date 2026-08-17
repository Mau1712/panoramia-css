import { useTranslation } from "react-i18next";
import bannerImage from "@assets/trackRecord/luxuryResidential/land-development-to-luxury-residential-01.webp";
import * as S from "./LuxuryTrackBanner.elements";

export const LuxuryTrackBanner = () => {
  const { t } = useTranslation("common");

  return (
    <S.LuxuryTrackBannerElement
      aria-label={t("pages.trackRecord.projects.luxury.banner.title")}
    >
      <S.LuxuryTrackBannerMediaElement
        src={bannerImage}
        alt={t("pages.trackRecord.projects.luxury.banner.imageAlt")}
      />
      <S.LuxuryTrackBannerOverlayElement aria-hidden />
      <S.LuxuryTrackBannerInnerElement>
        <S.LuxuryTrackBannerContentElement>
          <S.LuxuryTrackBannerTitleElement>
            {t("pages.trackRecord.projects.luxury.banner.title")}
          </S.LuxuryTrackBannerTitleElement>
        </S.LuxuryTrackBannerContentElement>
      </S.LuxuryTrackBannerInnerElement>
    </S.LuxuryTrackBannerElement>
  );
};
