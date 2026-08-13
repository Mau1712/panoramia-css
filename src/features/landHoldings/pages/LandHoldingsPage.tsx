import { CompetitiveAdvantageSection } from "../components/competitiveAdvantageSection/CompetitiveAdvantageSection";
import { LandHoldingsBanner } from "../components/landHoldingsBanner/LandHoldingsBanner";
import { StrategicPositioningSection } from "../components/strategicPositioningSection/StrategicPositioningSection";
import { UseCategoriesSection } from "../components/useCategoriesSection/UseCategoriesSection";
import { LandHoldingsPageElement } from "./LandHoldingsPage.elements";

export const LandHoldingsPage = () => {
  return (
    <LandHoldingsPageElement>
      <LandHoldingsBanner />
      <CompetitiveAdvantageSection />
      <UseCategoriesSection />
      <StrategicPositioningSection />
    </LandHoldingsPageElement>
  );
};
