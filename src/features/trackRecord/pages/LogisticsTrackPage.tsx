import { useTranslation } from "react-i18next";
import {
  TrackRecordDetailPageElement,
  TrackRecordDetailPlaceholderElement,
  TrackRecordDetailTextElement,
  TrackRecordDetailTitleElement,
} from "./TrackRecordDetailPage.elements";

export const LogisticsTrackPage = () => {
  const { t } = useTranslation("common");

  return (
    <TrackRecordDetailPageElement>
      <TrackRecordDetailPlaceholderElement>
        <TrackRecordDetailTitleElement>
          {t("pages.trackRecord.projects.logistics.title")}
        </TrackRecordDetailTitleElement>
        <TrackRecordDetailTextElement>
          {t("pages.trackRecord.projects.logistics.description")}
        </TrackRecordDetailTextElement>
      </TrackRecordDetailPlaceholderElement>
    </TrackRecordDetailPageElement>
  );
};
