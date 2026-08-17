import luxuryStep1Image from "@assets/trackRecord/luxuryResidential/land-development-to-luxury-residential-01-1.webp";
import luxuryComplexHeroImageAsset from "@assets/trackRecord/luxuryResidential/land-development-to-luxury-residential-01 (1).webp";
import luxuryStep2Image from "@assets/trackRecord/luxuryResidential/land-development-to-luxury-residential-02.webp";
import luxuryFoundationImage from "@assets/trackRecord/luxuryResidential/land-development-to-luxury-residential-02 (1).webp";
import luxuryStep3Image from "@assets/trackRecord/luxuryResidential/land-development-to-luxury-residential-03.webp";
import luxuryStep4Image from "@assets/trackRecord/luxuryResidential/land-development-to-luxury-residential-04.webp";
import luxuryStep5Image from "@assets/trackRecord/luxuryResidential/land-development-to-luxury-residential-05.webp";
import luxuryDeliveredImage from "@assets/trackRecord/luxuryResidential/land-development-to-luxury-residential-06.webp";
import luxuryMasterPlanningImage from "@assets/trackRecord/luxuryResidential/land-development-to-luxury-residential-07.webp";
import luxuryUtilitiesImage from "@assets/trackRecord/luxuryResidential/land-development-to-luxury-residential-08.webp";
import luxuryAerialImage from "@assets/trackRecord/luxuryResidential/land-development-to-luxury-residential-09.webp";

export const residentialTrackBannerPoints = [
  "pages.trackRecord.projects.residential.banner.points.acquisition",
  "pages.trackRecord.projects.residential.banner.points.zoning",
  "pages.trackRecord.projects.residential.banner.points.services",
  "pages.trackRecord.projects.residential.banner.points.simultaneous",
  "pages.trackRecord.projects.residential.banner.points.partnership",
] as const;

export const logisticsTrackBannerCycleSteps = [
  "pages.trackRecord.projects.logistics.banner.cycleSteps.acquisition",
  "pages.trackRecord.projects.logistics.banner.cycleSteps.design",
  "pages.trackRecord.projects.logistics.banner.cycleSteps.permits",
  "pages.trackRecord.projects.logistics.banner.cycleSteps.construction",
  "pages.trackRecord.projects.logistics.banner.cycleSteps.sales",
] as const;

export interface LogisticsProjectOverviewFact {
  id: string;
  labelKey:
    | "pages.trackRecord.projects.logistics.overview.facts.year.label"
    | "pages.trackRecord.projects.logistics.overview.facts.location.label"
    | "pages.trackRecord.projects.logistics.overview.facts.type.label"
    | "pages.trackRecord.projects.logistics.overview.facts.access.label";
  valueKey:
    | "pages.trackRecord.projects.logistics.overview.facts.year.value"
    | "pages.trackRecord.projects.logistics.overview.facts.location.value"
    | "pages.trackRecord.projects.logistics.overview.facts.type.value"
    | "pages.trackRecord.projects.logistics.overview.facts.access.value";
}

export const logisticsProjectOverviewFacts: LogisticsProjectOverviewFact[] = [
  {
    id: "year",
    labelKey:
      "pages.trackRecord.projects.logistics.overview.facts.year.label",
    valueKey:
      "pages.trackRecord.projects.logistics.overview.facts.year.value",
  },
  {
    id: "location",
    labelKey:
      "pages.trackRecord.projects.logistics.overview.facts.location.label",
    valueKey:
      "pages.trackRecord.projects.logistics.overview.facts.location.value",
  },
  {
    id: "type",
    labelKey:
      "pages.trackRecord.projects.logistics.overview.facts.type.label",
    valueKey:
      "pages.trackRecord.projects.logistics.overview.facts.type.value",
  },
  {
    id: "access",
    labelKey:
      "pages.trackRecord.projects.logistics.overview.facts.access.label",
    valueKey:
      "pages.trackRecord.projects.logistics.overview.facts.access.value",
  },
];

export interface LogisticsValueProcessStep {
  id: string;
  indexKey:
    | "pages.trackRecord.projects.logistics.valueProcess.steps.acquisition.index"
    | "pages.trackRecord.projects.logistics.valueProcess.steps.use.index"
    | "pages.trackRecord.projects.logistics.valueProcess.steps.design.index"
    | "pages.trackRecord.projects.logistics.valueProcess.steps.permits.index"
    | "pages.trackRecord.projects.logistics.valueProcess.steps.construction.index"
    | "pages.trackRecord.projects.logistics.valueProcess.steps.sales.index";
  labelKey:
    | "pages.trackRecord.projects.logistics.valueProcess.steps.acquisition.label"
    | "pages.trackRecord.projects.logistics.valueProcess.steps.use.label"
    | "pages.trackRecord.projects.logistics.valueProcess.steps.design.label"
    | "pages.trackRecord.projects.logistics.valueProcess.steps.permits.label"
    | "pages.trackRecord.projects.logistics.valueProcess.steps.construction.label"
    | "pages.trackRecord.projects.logistics.valueProcess.steps.sales.label";
}

export const logisticsValueProcessSteps: LogisticsValueProcessStep[] = [
  {
    id: "acquisition",
    indexKey:
      "pages.trackRecord.projects.logistics.valueProcess.steps.acquisition.index",
    labelKey:
      "pages.trackRecord.projects.logistics.valueProcess.steps.acquisition.label",
  },
  {
    id: "use",
    indexKey:
      "pages.trackRecord.projects.logistics.valueProcess.steps.use.index",
    labelKey:
      "pages.trackRecord.projects.logistics.valueProcess.steps.use.label",
  },
  {
    id: "design",
    indexKey:
      "pages.trackRecord.projects.logistics.valueProcess.steps.design.index",
    labelKey:
      "pages.trackRecord.projects.logistics.valueProcess.steps.design.label",
  },
  {
    id: "permits",
    indexKey:
      "pages.trackRecord.projects.logistics.valueProcess.steps.permits.index",
    labelKey:
      "pages.trackRecord.projects.logistics.valueProcess.steps.permits.label",
  },
  {
    id: "construction",
    indexKey:
      "pages.trackRecord.projects.logistics.valueProcess.steps.construction.index",
    labelKey:
      "pages.trackRecord.projects.logistics.valueProcess.steps.construction.label",
  },
  {
    id: "sales",
    indexKey:
      "pages.trackRecord.projects.logistics.valueProcess.steps.sales.index",
    labelKey:
      "pages.trackRecord.projects.logistics.valueProcess.steps.sales.label",
  },
];

export interface LogisticsStrategicLocationItem {
  id: string;
  indexKey:
    | "pages.trackRecord.projects.logistics.strategicLocation.items.access.index"
    | "pages.trackRecord.projects.logistics.strategicLocation.items.market.index"
    | "pages.trackRecord.projects.logistics.strategicLocation.items.lastMile.index"
    | "pages.trackRecord.projects.logistics.strategicLocation.items.warehouses.index";
  titleKey:
    | "pages.trackRecord.projects.logistics.strategicLocation.items.access.title"
    | "pages.trackRecord.projects.logistics.strategicLocation.items.market.title"
    | "pages.trackRecord.projects.logistics.strategicLocation.items.lastMile.title"
    | "pages.trackRecord.projects.logistics.strategicLocation.items.warehouses.title";
  textKey:
    | "pages.trackRecord.projects.logistics.strategicLocation.items.access.text"
    | "pages.trackRecord.projects.logistics.strategicLocation.items.market.text"
    | "pages.trackRecord.projects.logistics.strategicLocation.items.lastMile.text"
    | "pages.trackRecord.projects.logistics.strategicLocation.items.warehouses.text";
}

export const logisticsStrategicLocationItems: LogisticsStrategicLocationItem[] =
  [
    {
      id: "access",
      indexKey:
        "pages.trackRecord.projects.logistics.strategicLocation.items.access.index",
      titleKey:
        "pages.trackRecord.projects.logistics.strategicLocation.items.access.title",
      textKey:
        "pages.trackRecord.projects.logistics.strategicLocation.items.access.text",
    },
    {
      id: "market",
      indexKey:
        "pages.trackRecord.projects.logistics.strategicLocation.items.market.index",
      titleKey:
        "pages.trackRecord.projects.logistics.strategicLocation.items.market.title",
      textKey:
        "pages.trackRecord.projects.logistics.strategicLocation.items.market.text",
    },
    {
      id: "lastMile",
      indexKey:
        "pages.trackRecord.projects.logistics.strategicLocation.items.lastMile.index",
      titleKey:
        "pages.trackRecord.projects.logistics.strategicLocation.items.lastMile.title",
      textKey:
        "pages.trackRecord.projects.logistics.strategicLocation.items.lastMile.text",
    },
    {
      id: "warehouses",
      indexKey:
        "pages.trackRecord.projects.logistics.strategicLocation.items.warehouses.index",
      titleKey:
        "pages.trackRecord.projects.logistics.strategicLocation.items.warehouses.title",
      textKey:
        "pages.trackRecord.projects.logistics.strategicLocation.items.warehouses.text",
    },
  ];

export interface LogisticsFinishedProductItem {
  id: string;
  textKey:
    | "pages.trackRecord.projects.logistics.finishedProduct.items.modular"
    | "pages.trackRecord.projects.logistics.finishedProduct.items.yard"
    | "pages.trackRecord.projects.logistics.finishedProduct.items.access"
    | "pages.trackRecord.projects.logistics.finishedProduct.items.infrastructure"
    | "pages.trackRecord.projects.logistics.finishedProduct.items.permits"
    | "pages.trackRecord.projects.logistics.finishedProduct.items.sold";
}

export const logisticsFinishedProductItems: LogisticsFinishedProductItem[] = [
  {
    id: "modular",
    textKey:
      "pages.trackRecord.projects.logistics.finishedProduct.items.modular",
  },
  {
    id: "yard",
    textKey: "pages.trackRecord.projects.logistics.finishedProduct.items.yard",
  },
  {
    id: "access",
    textKey:
      "pages.trackRecord.projects.logistics.finishedProduct.items.access",
  },
  {
    id: "infrastructure",
    textKey:
      "pages.trackRecord.projects.logistics.finishedProduct.items.infrastructure",
  },
  {
    id: "permits",
    textKey:
      "pages.trackRecord.projects.logistics.finishedProduct.items.permits",
  },
  {
    id: "sold",
    textKey: "pages.trackRecord.projects.logistics.finishedProduct.items.sold",
  },
];

export interface LogisticsProvenExecutionStat {
  id: string;
  valueKey:
    | "pages.trackRecord.projects.logistics.provenExecution.stats.year.value"
    | "pages.trackRecord.projects.logistics.provenExecution.stats.sold.value"
    | "pages.trackRecord.projects.logistics.provenExecution.stats.highway.value"
    | "pages.trackRecord.projects.logistics.provenExecution.stats.type.value";
  labelKey:
    | "pages.trackRecord.projects.logistics.provenExecution.stats.year.label"
    | "pages.trackRecord.projects.logistics.provenExecution.stats.sold.label"
    | "pages.trackRecord.projects.logistics.provenExecution.stats.highway.label"
    | "pages.trackRecord.projects.logistics.provenExecution.stats.type.label";
}

export const logisticsProvenExecutionStats: LogisticsProvenExecutionStat[] = [
  {
    id: "year",
    valueKey:
      "pages.trackRecord.projects.logistics.provenExecution.stats.year.value",
    labelKey:
      "pages.trackRecord.projects.logistics.provenExecution.stats.year.label",
  },
  {
    id: "sold",
    valueKey:
      "pages.trackRecord.projects.logistics.provenExecution.stats.sold.value",
    labelKey:
      "pages.trackRecord.projects.logistics.provenExecution.stats.sold.label",
  },
  {
    id: "highway",
    valueKey:
      "pages.trackRecord.projects.logistics.provenExecution.stats.highway.value",
    labelKey:
      "pages.trackRecord.projects.logistics.provenExecution.stats.highway.label",
  },
  {
    id: "type",
    valueKey:
      "pages.trackRecord.projects.logistics.provenExecution.stats.type.value",
    labelKey:
      "pages.trackRecord.projects.logistics.provenExecution.stats.type.label",
  },
];

export interface LuxuryJourneyStep {
  id: string;
  image: string;
  titleKey:
    | "pages.trackRecord.projects.luxury.journey.steps.step1.title"
    | "pages.trackRecord.projects.luxury.journey.steps.step2.title"
    | "pages.trackRecord.projects.luxury.journey.steps.step3.title"
    | "pages.trackRecord.projects.luxury.journey.steps.step4.title"
    | "pages.trackRecord.projects.luxury.journey.steps.step5.title"
    | "pages.trackRecord.projects.luxury.journey.steps.delivered.title";
  textKey?:
    | "pages.trackRecord.projects.luxury.journey.steps.step1.text"
    | "pages.trackRecord.projects.luxury.journey.steps.step4.text";
  imageAltKey:
    | "pages.trackRecord.projects.luxury.journey.steps.step1.imageAlt"
    | "pages.trackRecord.projects.luxury.journey.steps.step2.imageAlt"
    | "pages.trackRecord.projects.luxury.journey.steps.step3.imageAlt"
    | "pages.trackRecord.projects.luxury.journey.steps.step4.imageAlt"
    | "pages.trackRecord.projects.luxury.journey.steps.step5.imageAlt"
    | "pages.trackRecord.projects.luxury.journey.steps.delivered.imageAlt";
}

export const luxuryJourneySteps: LuxuryJourneyStep[] = [
  {
    id: "step1",
    image: luxuryStep1Image,
    titleKey: "pages.trackRecord.projects.luxury.journey.steps.step1.title",
    textKey: "pages.trackRecord.projects.luxury.journey.steps.step1.text",
    imageAltKey:
      "pages.trackRecord.projects.luxury.journey.steps.step1.imageAlt",
  },
  {
    id: "step2",
    image: luxuryStep2Image,
    titleKey: "pages.trackRecord.projects.luxury.journey.steps.step2.title",
    imageAltKey:
      "pages.trackRecord.projects.luxury.journey.steps.step2.imageAlt",
  },
  {
    id: "step3",
    image: luxuryStep3Image,
    titleKey: "pages.trackRecord.projects.luxury.journey.steps.step3.title",
    imageAltKey:
      "pages.trackRecord.projects.luxury.journey.steps.step3.imageAlt",
  },
  {
    id: "step4",
    image: luxuryStep4Image,
    titleKey: "pages.trackRecord.projects.luxury.journey.steps.step4.title",
    textKey: "pages.trackRecord.projects.luxury.journey.steps.step4.text",
    imageAltKey:
      "pages.trackRecord.projects.luxury.journey.steps.step4.imageAlt",
  },
  {
    id: "step5",
    image: luxuryStep5Image,
    titleKey: "pages.trackRecord.projects.luxury.journey.steps.step5.title",
    imageAltKey:
      "pages.trackRecord.projects.luxury.journey.steps.step5.imageAlt",
  },
];

export const luxuryJourneyLateSteps: LuxuryJourneyStep[] = [
  {
    id: "delivered",
    image: luxuryDeliveredImage,
    titleKey:
      "pages.trackRecord.projects.luxury.journey.steps.delivered.title",
    imageAltKey:
      "pages.trackRecord.projects.luxury.journey.steps.delivered.imageAlt",
  },
];

export const luxuryComplexHeroImage = luxuryComplexHeroImageAsset;

export interface LuxuryComplexGalleryItem {
  id: string;
  image: string;
  captionKey:
    | "pages.trackRecord.projects.luxury.complex.items.foundation.caption"
    | "pages.trackRecord.projects.luxury.complex.items.construction.caption"
    | "pages.trackRecord.projects.luxury.complex.items.infrastructure.caption"
    | "pages.trackRecord.projects.luxury.complex.items.partner.caption";
}

export const luxuryComplexGalleryItems: LuxuryComplexGalleryItem[] = [
  {
    id: "foundation",
    image: luxuryFoundationImage,
    captionKey:
      "pages.trackRecord.projects.luxury.complex.items.foundation.caption",
  },
  {
    id: "construction",
    image: luxuryStep3Image,
    captionKey:
      "pages.trackRecord.projects.luxury.complex.items.construction.caption",
  },
  {
    id: "infrastructure",
    image: luxuryStep5Image,
    captionKey:
      "pages.trackRecord.projects.luxury.complex.items.infrastructure.caption",
  },
  {
    id: "partner",
    image: luxuryComplexHeroImageAsset,
    captionKey:
      "pages.trackRecord.projects.luxury.complex.items.partner.caption",
  },
];

export interface LuxuryDevelopmentItem {
  id: string;
  image: string;
  captionKey:
    | "pages.trackRecord.projects.luxury.development.items.masterPlanning.caption"
    | "pages.trackRecord.projects.luxury.development.items.utilities.caption"
    | "pages.trackRecord.projects.luxury.development.items.aerial.caption";
}

export const luxuryDevelopmentItems: LuxuryDevelopmentItem[] = [
  {
    id: "masterPlanning",
    image: luxuryMasterPlanningImage,
    captionKey:
      "pages.trackRecord.projects.luxury.development.items.masterPlanning.caption",
  },
  {
    id: "utilities",
    image: luxuryUtilitiesImage,
    captionKey:
      "pages.trackRecord.projects.luxury.development.items.utilities.caption",
  },
  {
    id: "aerial",
    image: luxuryAerialImage,
    captionKey:
      "pages.trackRecord.projects.luxury.development.items.aerial.caption",
  },
];

export interface ResidentialPhaseTwoItem {
  id: string;
  captionKey:
    | "pages.trackRecord.projects.residential.phaseTwo.items.before.caption"
    | "pages.trackRecord.projects.residential.phaseTwo.items.after.caption";
}

export const residentialPhaseTwoItems: ResidentialPhaseTwoItem[] = [
  {
    id: "before",
    captionKey:
      "pages.trackRecord.projects.residential.phaseTwo.items.before.caption",
  },
  {
    id: "after",
    captionKey:
      "pages.trackRecord.projects.residential.phaseTwo.items.after.caption",
  },
];

export interface ResidentialPhaseThreeItem {
  id: string;
  captionKey:
    | "pages.trackRecord.projects.residential.phaseThree.items.roads.caption"
    | "pages.trackRecord.projects.residential.phaseThree.items.construction.caption";
}

export const residentialPhaseThreeItems: ResidentialPhaseThreeItem[] = [
  {
    id: "roads",
    captionKey:
      "pages.trackRecord.projects.residential.phaseThree.items.roads.caption",
  },
  {
    id: "construction",
    captionKey:
      "pages.trackRecord.projects.residential.phaseThree.items.construction.caption",
  },
];

export interface ResidentialPhaseFourItem {
  id: string;
  captionKey:
    | "pages.trackRecord.projects.residential.phaseFour.items.towers.caption"
    | "pages.trackRecord.projects.residential.phaseFour.items.community.caption";
}

export const residentialPhaseFourItems: ResidentialPhaseFourItem[] = [
  {
    id: "towers",
    captionKey:
      "pages.trackRecord.projects.residential.phaseFour.items.towers.caption",
  },
  {
    id: "community",
    captionKey:
      "pages.trackRecord.projects.residential.phaseFour.items.community.caption",
  },
];
