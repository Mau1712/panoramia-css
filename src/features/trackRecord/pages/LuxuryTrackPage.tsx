import { LuxuryComplexSection } from "../components/luxuryComplexSection/LuxuryComplexSection";
import { LuxuryDevelopmentSection } from "../components/luxuryDevelopmentSection/LuxuryDevelopmentSection";
import { LuxuryJourneySection } from "../components/luxuryJourneySection/LuxuryJourneySection";
import { LuxuryTrackBanner } from "../components/luxuryTrackBanner/LuxuryTrackBanner";
import { luxuryJourneyLateSteps } from "../data";
import { TrackRecordDetailPageElement } from "./TrackRecordDetailPage.elements";

export const LuxuryTrackPage = () => {
  return (
    <TrackRecordDetailPageElement>
      <LuxuryTrackBanner />
      <LuxuryJourneySection />
      <LuxuryComplexSection />
      <LuxuryJourneySection steps={luxuryJourneyLateSteps} toneOffset={6} />
      <LuxuryDevelopmentSection />
    </TrackRecordDetailPageElement>
  );
};
