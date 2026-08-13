import { ResidentialFinalResultSection } from "../components/residentialFinalResultSection/ResidentialFinalResultSection";
import { ResidentialPartnershipsSection } from "../components/residentialPartnershipsSection/ResidentialPartnershipsSection";
import { ResidentialPhaseFourSection } from "../components/residentialPhaseFourSection/ResidentialPhaseFourSection";
import { ResidentialPhaseOneSection } from "../components/residentialPhaseOneSection/ResidentialPhaseOneSection";
import { ResidentialPhaseThreeSection } from "../components/residentialPhaseThreeSection/ResidentialPhaseThreeSection";
import { ResidentialPhaseTwoSection } from "../components/residentialPhaseTwoSection/ResidentialPhaseTwoSection";
import { ResidentialTrackBanner } from "../components/residentialTrackBanner/ResidentialTrackBanner";
import { TrackRecordDetailPageElement } from "./TrackRecordDetailPage.elements";

export const ResidentialTrackPage = () => {
  return (
    <TrackRecordDetailPageElement>
      <ResidentialTrackBanner />
      <ResidentialPhaseOneSection />
      <ResidentialPhaseTwoSection />
      <ResidentialPhaseThreeSection />
      <ResidentialPhaseFourSection />
      <ResidentialPartnershipsSection />
      <ResidentialFinalResultSection />
    </TrackRecordDetailPageElement>
  );
};
