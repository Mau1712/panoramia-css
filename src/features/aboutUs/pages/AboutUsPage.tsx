import { AboutUsBanner } from "../components/aboutUsBanner/AboutUsBanner";
import { ApproachSection } from "../components/approachSection/ApproachSection";
import { CompetitiveAdvantageSection } from "../components/competitiveAdvantageSection/CompetitiveAdvantageSection";
import { MeetOurTeamSection } from "../components/meetOurTeamSection/MeetOurTeamSection";
import { AboutUsPageElement } from "./AboutUsPage.elements";

export const AboutUsPage = () => {
  return (
    <AboutUsPageElement>
      <AboutUsBanner />
      <ApproachSection />
      <CompetitiveAdvantageSection />
      <MeetOurTeamSection />
    </AboutUsPageElement>
  );
};
