import { HeroBanner } from "../components/heroBanner/HeroBanner";
import { IntroSection } from "../components/introSection/IntroSection";
import { MeetOurTeamSection } from "../components/meetOurTeamSection/MeetOurTeamSection";
import { PipelineSection } from "../components/pipelineSection/PipelineSection";
import { PlatformSection } from "../components/platformSection/PlatformSection";
import { SelectedTrackSection } from "../components/selectedTrackSection/SelectedTrackSection";
import { SkillsSection } from "../components/skillsSection/SkillsSection";
import { HomePageElement } from "./HomePage.elements";

export const HomePage = () => {
  return (
    <HomePageElement>
      <HeroBanner />
      <IntroSection />
      <SkillsSection />
      <PlatformSection />
      <PipelineSection />
      <SelectedTrackSection />
      <MeetOurTeamSection />
    </HomePageElement>
  );
};
