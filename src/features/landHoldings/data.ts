import type { IconType } from "react-icons";
import {
  BriefcaseOutlineIcon,
  BusinessOutlineIcon,
  HomeOutlineIcon,
} from "@assets/icons";

export interface CompetitiveAdvantageCard {
  id: string;
  titleKey:
    | "pages.landHoldings.competitiveAdvantage.cards.location.title"
    | "pages.landHoldings.competitiveAdvantage.cards.uses.title";
  labelKey:
    | "pages.landHoldings.competitiveAdvantage.cards.location.label"
    | "pages.landHoldings.competitiveAdvantage.cards.uses.label";
}

export const competitiveAdvantageCards: CompetitiveAdvantageCard[] = [
  {
    id: "location",
    titleKey: "pages.landHoldings.competitiveAdvantage.cards.location.title",
    labelKey: "pages.landHoldings.competitiveAdvantage.cards.location.label",
  },
  {
    id: "uses",
    titleKey: "pages.landHoldings.competitiveAdvantage.cards.uses.title",
    labelKey: "pages.landHoldings.competitiveAdvantage.cards.uses.label",
  },
];

export interface UseCategoryItem {
  id: string;
  icon: IconType;
  labelKey:
    | "pages.landHoldings.useCategories.residential"
    | "pages.landHoldings.useCategories.commercial"
    | "pages.landHoldings.useCategories.mixedUse";
}

export const useCategoryItems: UseCategoryItem[] = [
  {
    id: "residential",
    icon: HomeOutlineIcon,
    labelKey: "pages.landHoldings.useCategories.residential",
  },
  {
    id: "commercial",
    icon: BriefcaseOutlineIcon,
    labelKey: "pages.landHoldings.useCategories.commercial",
  },
  {
    id: "mixedUse",
    icon: BusinessOutlineIcon,
    labelKey: "pages.landHoldings.useCategories.mixedUse",
  },
];

export interface StrategicPositioningCard {
  id: string;
  titleKey:
    | "pages.landHoldings.strategicPositioning.cards.radius5.title"
    | "pages.landHoldings.strategicPositioning.cards.radius10.title"
    | "pages.landHoldings.strategicPositioning.cards.ownedLand.title";
  textKey:
    | "pages.landHoldings.strategicPositioning.cards.radius5.text"
    | "pages.landHoldings.strategicPositioning.cards.radius10.text"
    | "pages.landHoldings.strategicPositioning.cards.ownedLand.text";
}

export const strategicPositioningCards: StrategicPositioningCard[] = [
  {
    id: "radius5",
    titleKey: "pages.landHoldings.strategicPositioning.cards.radius5.title",
    textKey: "pages.landHoldings.strategicPositioning.cards.radius5.text",
  },
  {
    id: "radius10",
    titleKey: "pages.landHoldings.strategicPositioning.cards.radius10.title",
    textKey: "pages.landHoldings.strategicPositioning.cards.radius10.text",
  },
  {
    id: "ownedLand",
    titleKey: "pages.landHoldings.strategicPositioning.cards.ownedLand.title",
    textKey: "pages.landHoldings.strategicPositioning.cards.ownedLand.text",
  },
];
