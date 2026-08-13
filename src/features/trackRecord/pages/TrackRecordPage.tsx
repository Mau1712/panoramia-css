import { SelectedTrackSection } from "@features/home/components/selectedTrackSection/SelectedTrackSection";
import { MarketOpportunitiesSection } from "../components/marketOpportunitiesSection/MarketOpportunitiesSection";
import { TrackRecordBanner } from "../components/trackRecordBanner/TrackRecordBanner";
import { TrackRecordPageElement } from "./TrackRecordPage.elements";

export const TrackRecordPage = () => {
  return (
    <TrackRecordPageElement>
      <TrackRecordBanner />
      <MarketOpportunitiesSection />
      <SelectedTrackSection showBackground={false} />
    </TrackRecordPageElement>
  );
};
