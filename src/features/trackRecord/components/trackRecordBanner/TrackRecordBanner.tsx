import { useTranslation } from "react-i18next";
import bannerImage from "@assets/trackRecord/track_record_hero.webp";
import {
  TrackRecordBannerContentElement,
  TrackRecordBannerElement,
  TrackRecordBannerInnerElement,
  TrackRecordBannerMediaElement,
  TrackRecordBannerOverlayElement,
  TrackRecordBannerTextElement,
  TrackRecordBannerTitleElement,
} from "./TrackRecordBanner.elements";

export const TrackRecordBanner = () => {
  const { t } = useTranslation("common");

  return (
    <TrackRecordBannerElement aria-label={t("pages.trackRecord.banner.title")}>
      <TrackRecordBannerMediaElement
        src={bannerImage}
        alt={t("pages.trackRecord.banner.imageAlt")}
      />
      <TrackRecordBannerOverlayElement aria-hidden />
      <TrackRecordBannerInnerElement>
        <TrackRecordBannerContentElement>
          <TrackRecordBannerTitleElement>
            {t("pages.trackRecord.banner.title")}
          </TrackRecordBannerTitleElement>
          <TrackRecordBannerTextElement>
            {t("pages.trackRecord.banner.text")}
          </TrackRecordBannerTextElement>
        </TrackRecordBannerContentElement>
      </TrackRecordBannerInnerElement>
    </TrackRecordBannerElement>
  );
};
