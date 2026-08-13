import { useTranslation } from "react-i18next";
import {
  TrackRecordDetailPageElement,
  TrackRecordDetailPlaceholderElement,
  TrackRecordDetailTextElement,
  TrackRecordDetailTitleElement,
} from "./TrackRecordDetailPage.elements";

export const ResidentialTrackPage = () => {
  const { t } = useTranslation("common");

  return (
    <TrackRecordDetailPageElement>
      <TrackRecordDetailPlaceholderElement>
        <TrackRecordDetailTitleElement>
          {t("pages.trackRecord.projects.residential.title")}
        </TrackRecordDetailTitleElement>
        <TrackRecordDetailTextElement>
          {t("pages.trackRecord.projects.residential.description")}
        </TrackRecordDetailTextElement>
      </TrackRecordDetailPlaceholderElement>
    </TrackRecordDetailPageElement>
  );
};
