import luxuryHouseImage01 from "@assets/currentProjects/LuxuryHousesinCaracas01.webp";
import luxuryHouseImage02 from "@assets/currentProjects/LuxuryHousesinCaracas02.webp";
import luxuryHouseImage03 from "@assets/currentProjects/LuxuryHousesinCaracas03.webp";
import luxuryHouseImage04 from "@assets/currentProjects/LuxuryHousesinCaracas04.webp";
import nicheResidencesImage01 from "@assets/currentProjects/ResidencesforNicheSegments.webp";
import nicheResidencesImage02 from "@assets/currentProjects/ResidencesforNicheSegments02.webp";
import secondHomeImage01 from "@assets/currentProjects/EXCLUSIVE-BEACH-FRONT-HOUSES-1.webp";
import secondHomeImage02 from "@assets/currentProjects/EXCLUSIVE-BEACH-FRONT-HOUSES-2.webp";
import secondHomeImage03 from "@assets/currentProjects/EXCLUSIVE-BEACH-FRONT-HOUSES-3.webp";
import secondHomeImage04 from "@assets/currentProjects/EXCLUSIVE-BEACH-FRONT-HOUSES-4.webp";
import secondHomeImage05 from "@assets/currentProjects/EXCLUSIVE-BEACH-FRONT-HOUSES-5.webp";
import secondHomeImage06 from "@assets/currentProjects/EXCLUSIVE-BEACH-FRONT-HOUSES-6.webp";
import secondHomeImage07 from "@assets/currentProjects/EXCLUSIVE-BEACH-FRONT-HOUSES-7.webp";

export interface MicroFulfillmentPoint {
  id: string;
  titleKey:
    | "pages.currentProjects.microFulfillment.points.consumerShift.title"
    | "pages.currentProjects.microFulfillment.points.disintermediation.title"
    | "pages.currentProjects.microFulfillment.points.operationalIntelligence.title"
    | "pages.currentProjects.microFulfillment.points.urbanInfrastructure.title"
    | "pages.currentProjects.microFulfillment.points.panoramiaDevelopment.title";
  textKey:
    | "pages.currentProjects.microFulfillment.points.consumerShift.text"
    | "pages.currentProjects.microFulfillment.points.disintermediation.text"
    | "pages.currentProjects.microFulfillment.points.operationalIntelligence.text"
    | "pages.currentProjects.microFulfillment.points.urbanInfrastructure.text"
    | "pages.currentProjects.microFulfillment.points.panoramiaDevelopment.text";
}

export const microFulfillmentPoints: MicroFulfillmentPoint[] = [
  {
    id: "consumerShift",
    titleKey:
      "pages.currentProjects.microFulfillment.points.consumerShift.title",
    textKey: "pages.currentProjects.microFulfillment.points.consumerShift.text",
  },
  {
    id: "disintermediation",
    titleKey:
      "pages.currentProjects.microFulfillment.points.disintermediation.title",
    textKey:
      "pages.currentProjects.microFulfillment.points.disintermediation.text",
  },
  {
    id: "operationalIntelligence",
    titleKey:
      "pages.currentProjects.microFulfillment.points.operationalIntelligence.title",
    textKey:
      "pages.currentProjects.microFulfillment.points.operationalIntelligence.text",
  },
  {
    id: "urbanInfrastructure",
    titleKey:
      "pages.currentProjects.microFulfillment.points.urbanInfrastructure.title",
    textKey:
      "pages.currentProjects.microFulfillment.points.urbanInfrastructure.text",
  },
  {
    id: "panoramiaDevelopment",
    titleKey:
      "pages.currentProjects.microFulfillment.points.panoramiaDevelopment.title",
    textKey:
      "pages.currentProjects.microFulfillment.points.panoramiaDevelopment.text",
  },
];

export interface LuxuryHousesPoint {
  id: string;
  titleKey:
    | "pages.currentProjects.luxuryHouses.points.strategicLocation.title"
    | "pages.currentProjects.luxuryHouses.points.lowDensityLuxury.title"
    | "pages.currentProjects.luxuryHouses.points.projectTimeline.title";
  textKey:
    | "pages.currentProjects.luxuryHouses.points.strategicLocation.text"
    | "pages.currentProjects.luxuryHouses.points.lowDensityLuxury.text"
    | "pages.currentProjects.luxuryHouses.points.projectTimeline.text";
}

export const luxuryHousesPoints: LuxuryHousesPoint[] = [
  {
    id: "strategicLocation",
    titleKey:
      "pages.currentProjects.luxuryHouses.points.strategicLocation.title",
    textKey: "pages.currentProjects.luxuryHouses.points.strategicLocation.text",
  },
  {
    id: "lowDensityLuxury",
    titleKey: "pages.currentProjects.luxuryHouses.points.lowDensityLuxury.title",
    textKey: "pages.currentProjects.luxuryHouses.points.lowDensityLuxury.text",
  },
  {
    id: "projectTimeline",
    titleKey: "pages.currentProjects.luxuryHouses.points.projectTimeline.title",
    textKey: "pages.currentProjects.luxuryHouses.points.projectTimeline.text",
  },
];

export interface LuxuryHousesGalleryImage {
  id: string;
  src: string;
  altKey:
    | "pages.currentProjects.luxuryHouses.gallery.image01Alt"
    | "pages.currentProjects.luxuryHouses.gallery.image02Alt"
    | "pages.currentProjects.luxuryHouses.gallery.image03Alt"
    | "pages.currentProjects.luxuryHouses.gallery.image04Alt";
}

export const luxuryHousesGallery: LuxuryHousesGalleryImage[] = [
  {
    id: "luxury-01",
    src: luxuryHouseImage01,
    altKey: "pages.currentProjects.luxuryHouses.gallery.image01Alt",
  },
  {
    id: "luxury-02",
    src: luxuryHouseImage02,
    altKey: "pages.currentProjects.luxuryHouses.gallery.image02Alt",
  },
  {
    id: "luxury-03",
    src: luxuryHouseImage03,
    altKey: "pages.currentProjects.luxuryHouses.gallery.image03Alt",
  },
  {
    id: "luxury-04",
    src: luxuryHouseImage04,
    altKey: "pages.currentProjects.luxuryHouses.gallery.image04Alt",
  },
];

export interface NicheResidencesPoint {
  id: string;
  titleKey:
    | "pages.currentProjects.nicheResidences.points.marketGap.title"
    | "pages.currentProjects.nicheResidences.points.assetClass.title"
    | "pages.currentProjects.nicheResidences.points.feasibility.title";
  textKey:
    | "pages.currentProjects.nicheResidences.points.marketGap.text"
    | "pages.currentProjects.nicheResidences.points.assetClass.text"
    | "pages.currentProjects.nicheResidences.points.feasibility.text";
}

export const nicheResidencesPoints: NicheResidencesPoint[] = [
  {
    id: "marketGap",
    titleKey: "pages.currentProjects.nicheResidences.points.marketGap.title",
    textKey: "pages.currentProjects.nicheResidences.points.marketGap.text",
  },
  {
    id: "assetClass",
    titleKey: "pages.currentProjects.nicheResidences.points.assetClass.title",
    textKey: "pages.currentProjects.nicheResidences.points.assetClass.text",
  },
  {
    id: "feasibility",
    titleKey: "pages.currentProjects.nicheResidences.points.feasibility.title",
    textKey: "pages.currentProjects.nicheResidences.points.feasibility.text",
  },
];

export interface NicheResidencesGalleryImage {
  id: string;
  src: string;
  altKey:
    | "pages.currentProjects.nicheResidences.gallery.image01Alt"
    | "pages.currentProjects.nicheResidences.gallery.image02Alt";
}

export const nicheResidencesGallery: NicheResidencesGalleryImage[] = [
  {
    id: "niche-01",
    src: nicheResidencesImage01,
    altKey: "pages.currentProjects.nicheResidences.gallery.image01Alt",
  },
  {
    id: "niche-02",
    src: nicheResidencesImage02,
    altKey: "pages.currentProjects.nicheResidences.gallery.image02Alt",
  },
];

export interface SecondHomeGalleryImage {
  id: string;
  src: string;
  altKey:
    | "pages.currentProjects.secondHome.gallery.image01Alt"
    | "pages.currentProjects.secondHome.gallery.image02Alt"
    | "pages.currentProjects.secondHome.gallery.image03Alt"
    | "pages.currentProjects.secondHome.gallery.image04Alt"
    | "pages.currentProjects.secondHome.gallery.image05Alt"
    | "pages.currentProjects.secondHome.gallery.image06Alt"
    | "pages.currentProjects.secondHome.gallery.image07Alt";
}

export const secondHomeGallery: SecondHomeGalleryImage[] = [
  {
    id: "second-home-01",
    src: secondHomeImage01,
    altKey: "pages.currentProjects.secondHome.gallery.image01Alt",
  },
  {
    id: "second-home-02",
    src: secondHomeImage02,
    altKey: "pages.currentProjects.secondHome.gallery.image02Alt",
  },
  {
    id: "second-home-03",
    src: secondHomeImage03,
    altKey: "pages.currentProjects.secondHome.gallery.image03Alt",
  },
  {
    id: "second-home-04",
    src: secondHomeImage04,
    altKey: "pages.currentProjects.secondHome.gallery.image04Alt",
  },
  {
    id: "second-home-05",
    src: secondHomeImage05,
    altKey: "pages.currentProjects.secondHome.gallery.image05Alt",
  },
  {
    id: "second-home-06",
    src: secondHomeImage06,
    altKey: "pages.currentProjects.secondHome.gallery.image06Alt",
  },
  {
    id: "second-home-07",
    src: secondHomeImage07,
    altKey: "pages.currentProjects.secondHome.gallery.image07Alt",
  },
];
