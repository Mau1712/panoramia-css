import { useTranslation } from "react-i18next";
import bannerImage from "@assets/trackRecord/lastMile/Land-Development-to-Last-Mile-Logistics.png";
import { logisticsTrackBannerCycleSteps } from "@features/trackRecord/data";
import * as S from "./LogisticsTrackBanner.elements";

export const LogisticsTrackBanner = () => {
  const { t } = useTranslation("common");

  return (
    <S.LogisticsTrackBannerElement
      aria-label={t("pages.trackRecord.projects.logistics.banner.title")}
    >
      <S.LogisticsTrackBannerMediaElement
        src={bannerImage}
        alt={t("pages.trackRecord.projects.logistics.banner.imageAlt")}
      />
      <S.LogisticsTrackBannerOverlayElement aria-hidden />
      <S.LogisticsTrackBannerInnerElement>
        <S.LogisticsTrackBannerContentElement>
          <S.LogisticsTrackBannerTitleElement>
            {t("pages.trackRecord.projects.logistics.banner.title")}
          </S.LogisticsTrackBannerTitleElement>

          <S.LogisticsTrackBannerMetaElement>
            {t("pages.trackRecord.projects.logistics.banner.meta")}
          </S.LogisticsTrackBannerMetaElement>

          <S.LogisticsTrackBannerCycleElement>
            <S.LogisticsTrackBannerCycleLabelElement>
              {t("pages.trackRecord.projects.logistics.banner.cycleLabel")}
            </S.LogisticsTrackBannerCycleLabelElement>
            <S.LogisticsTrackBannerCycleStepsElement>
              {logisticsTrackBannerCycleSteps.map((stepKey) => (
                <S.LogisticsTrackBannerCycleStepElement key={stepKey}>
                  {t(stepKey)}
                </S.LogisticsTrackBannerCycleStepElement>
              ))}
            </S.LogisticsTrackBannerCycleStepsElement>
          </S.LogisticsTrackBannerCycleElement>
        </S.LogisticsTrackBannerContentElement>
      </S.LogisticsTrackBannerInnerElement>
    </S.LogisticsTrackBannerElement>
  );
};
