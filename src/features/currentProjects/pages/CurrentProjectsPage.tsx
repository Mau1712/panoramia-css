import { CurrentProjectsBanner } from "../components/currentProjectsBanner/CurrentProjectsBanner";
import { EstanciasLosBufalosSection } from "../components/estanciasLosBufalosSection/EstanciasLosBufalosSection";
import { LuxuryHousesSection } from "../components/luxuryHousesSection/LuxuryHousesSection";
import { MicroFulfillmentSection } from "../components/microFulfillmentSection/MicroFulfillmentSection";
import { NicheResidencesSection } from "../components/nicheResidencesSection/NicheResidencesSection";
import { SecondHomeSection } from "../components/secondHomeSection/SecondHomeSection";
import { CurrentProjectsPageElement } from "./CurrentProjectsPage.elements";

export const CurrentProjectsPage = () => {
  return (
    <CurrentProjectsPageElement>
      <CurrentProjectsBanner />
      <MicroFulfillmentSection />
      <LuxuryHousesSection />
      <NicheResidencesSection />
      <SecondHomeSection />
      <EstanciasLosBufalosSection />
    </CurrentProjectsPageElement>
  );
};
