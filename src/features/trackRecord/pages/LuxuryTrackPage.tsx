import { useTranslation } from "react-i18next";
import {
  TrackRecordDetailPageElement,
  TrackRecordDetailPlaceholderElement,
  TrackRecordDetailTextElement,
  TrackRecordDetailTitleElement,
} from "./TrackRecordDetailPage.elements";

export const LuxuryTrackPage = () => {
  const { t } = useTranslation("common");

  return (
    <TrackRecordDetailPageElement>
      <TrackRecordDetailPlaceholderElement>
        <TrackRecordDetailTitleElement>
          {t("pages.trackRecord.projects.luxury.title")}
        </TrackRecordDetailTitleElement>
        <TrackRecordDetailTextElement>
          {t("pages.trackRecord.projects.luxury.description")}
        </TrackRecordDetailTextElement>
      </TrackRecordDetailPlaceholderElement>
    </TrackRecordDetailPageElement>
  );
};
