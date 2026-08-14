import { LogisticsFinishedProductSection } from "../components/logisticsFinishedProductSection/LogisticsFinishedProductSection";
import { LogisticsProjectOverviewSection } from "../components/logisticsProjectOverviewSection/LogisticsProjectOverviewSection";
import { LogisticsProvenExecutionSection } from "../components/logisticsProvenExecutionSection/LogisticsProvenExecutionSection";
import { LogisticsStrategicLocationSection } from "../components/logisticsStrategicLocationSection/LogisticsStrategicLocationSection";
import { LogisticsTrackBanner } from "../components/logisticsTrackBanner/LogisticsTrackBanner";
import { LogisticsValueProcessSection } from "../components/logisticsValueProcessSection/LogisticsValueProcessSection";
import { TrackRecordDetailPageElement } from "./TrackRecordDetailPage.elements";

export const LogisticsTrackPage = () => {
  return (
    <TrackRecordDetailPageElement>
      <LogisticsTrackBanner />
      <LogisticsProjectOverviewSection />
      <LogisticsValueProcessSection />
      <LogisticsStrategicLocationSection />
      <LogisticsFinishedProductSection />
      <LogisticsProvenExecutionSection />
    </TrackRecordDetailPageElement>
  );
};
