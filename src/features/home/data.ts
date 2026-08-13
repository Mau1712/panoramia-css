import coverImage from "@assets/cover_panoramica_caracas_avila.webp";
import caracasImage from "@assets/caracas.webp";
import experienceIcon from "@assets/skills/exito-480x480.webp";
import landIcon from "@assets/skills/mapa-480x480.webp";
import residentialIcon from "@assets/skills/edificio-480x480.webp";
import logisticsIcon from "@assets/skills/diseno-480x480.webp";
import logisticsPipelineImage from "@assets/pipelineSection/LastmileMicroulfillmentCentersMain2.webp";
import residentialPipelineImage from "@assets/pipelineSection/LuxuryHousesinCaracas02.webp";
import landPipelineImage from "@assets/pipelineSection/land_holdings_hero.webp";
import beachPipelineImage from "@assets/pipelineSection/Beach-Houses-near-Caracas02.webp";
import residentialTrackImage from "@assets/selectedTrack/residentialdevelopment1-480x360.webp";
import logisticsTrackImage from "@assets/selectedTrack/Land-Development-to-Last-Mile-Logistics2-480x270.webp";
import luxuryTrackImage from "@assets/selectedTrack/land-development-to-luxury-residential-06-480x301.webp";

export interface HeroSlide {
  id: string;
  src: string;
  altKey: "pages.home.hero.slides.avilaAlt" | "pages.home.hero.slides.caracasAlt";
}

export const heroSlides: HeroSlide[] = [
  {
    id: "avila",
    src: coverImage,
    altKey: "pages.home.hero.slides.avilaAlt",
  },
  {
    id: "caracas",
    src: caracasImage,
    altKey: "pages.home.hero.slides.caracasAlt",
  },
];

export const HERO_CAROUSEL_INTERVAL_MS = 5000;

export interface SkillItem {
  id: string;
  icon: string;
  target: number;
  suffixKey:
    | "pages.home.skills.items.experience.suffix"
    | "pages.home.skills.items.land.suffix"
    | "pages.home.skills.items.residential.suffix"
    | "pages.home.skills.items.logistics.suffix";
  descriptionKey:
    | "pages.home.skills.items.experience.description"
    | "pages.home.skills.items.land.description"
    | "pages.home.skills.items.residential.description"
    | "pages.home.skills.items.logistics.description";
}

export const skillItems: SkillItem[] = [
  {
    id: "experience",
    icon: experienceIcon,
    target: 40,
    suffixKey: "pages.home.skills.items.experience.suffix",
    descriptionKey: "pages.home.skills.items.experience.description",
  },
  {
    id: "land",
    icon: landIcon,
    target: 200,
    suffixKey: "pages.home.skills.items.land.suffix",
    descriptionKey: "pages.home.skills.items.land.description",
  },
  {
    id: "residential",
    icon: residentialIcon,
    target: 9000,
    suffixKey: "pages.home.skills.items.residential.suffix",
    descriptionKey: "pages.home.skills.items.residential.description",
  },
  {
    id: "logistics",
    icon: logisticsIcon,
    target: 70000,
    suffixKey: "pages.home.skills.items.logistics.suffix",
    descriptionKey: "pages.home.skills.items.logistics.description",
  },
];

export interface PlatformPoint {
  id: string;
  titleKey:
    | "pages.home.platform.points.execution.title"
    | "pages.home.platform.points.coInvestment.title"
    | "pages.home.platform.points.land.title";
  textKey:
    | "pages.home.platform.points.execution.text"
    | "pages.home.platform.points.coInvestment.text"
    | "pages.home.platform.points.land.text";
}

export const platformPoints: PlatformPoint[] = [
  {
    id: "execution",
    titleKey: "pages.home.platform.points.execution.title",
    textKey: "pages.home.platform.points.execution.text",
  },
  {
    id: "coInvestment",
    titleKey: "pages.home.platform.points.coInvestment.title",
    textKey: "pages.home.platform.points.coInvestment.text",
  },
  {
    id: "land",
    titleKey: "pages.home.platform.points.land.title",
    textKey: "pages.home.platform.points.land.text",
  },
];

export interface PipelineCard {
  id: string;
  image: string;
  to: string;
  titleKey:
    | "pages.home.pipeline.cards.logistics.title"
    | "pages.home.pipeline.cards.residential.title"
    | "pages.home.pipeline.cards.land.title"
    | "pages.home.pipeline.cards.beach.title";
  subtitleKey:
    | "pages.home.pipeline.cards.logistics.subtitle"
    | "pages.home.pipeline.cards.residential.subtitle"
    | "pages.home.pipeline.cards.land.subtitle"
    | "pages.home.pipeline.cards.beach.subtitle";
  imageAltKey:
    | "pages.home.pipeline.cards.logistics.imageAlt"
    | "pages.home.pipeline.cards.residential.imageAlt"
    | "pages.home.pipeline.cards.land.imageAlt"
    | "pages.home.pipeline.cards.beach.imageAlt";
}

export const pipelineCards: PipelineCard[] = [
  {
    id: "logistics",
    image: logisticsPipelineImage,
    to: "/current-projects#micro-fulfillment",
    titleKey: "pages.home.pipeline.cards.logistics.title",
    subtitleKey: "pages.home.pipeline.cards.logistics.subtitle",
    imageAltKey: "pages.home.pipeline.cards.logistics.imageAlt",
  },
  {
    id: "residential",
    image: residentialPipelineImage,
    to: "/current-projects#luxury-houses",
    titleKey: "pages.home.pipeline.cards.residential.title",
    subtitleKey: "pages.home.pipeline.cards.residential.subtitle",
    imageAltKey: "pages.home.pipeline.cards.residential.imageAlt",
  },
  {
    id: "land",
    image: landPipelineImage,
    to: "/land-holdings",
    titleKey: "pages.home.pipeline.cards.land.title",
    subtitleKey: "pages.home.pipeline.cards.land.subtitle",
    imageAltKey: "pages.home.pipeline.cards.land.imageAlt",
  },
  {
    id: "beach",
    image: beachPipelineImage,
    to: "/current-projects#second-home",
    titleKey: "pages.home.pipeline.cards.beach.title",
    subtitleKey: "pages.home.pipeline.cards.beach.subtitle",
    imageAltKey: "pages.home.pipeline.cards.beach.imageAlt",
  },
];

export interface SelectedTrackCard {
  id: string;
  path: "/track-record/residential" | "/track-record/logistics" | "/track-record/luxury";
  image: string;
  titleKey:
    | "pages.home.selectedTrack.cards.residential.title"
    | "pages.home.selectedTrack.cards.logistics.title"
    | "pages.home.selectedTrack.cards.luxury.title";
  subtitleKey:
    | "pages.home.selectedTrack.cards.residential.subtitle"
    | "pages.home.selectedTrack.cards.logistics.subtitle"
    | "pages.home.selectedTrack.cards.luxury.subtitle";
  imageAltKey:
    | "pages.home.selectedTrack.cards.residential.imageAlt"
    | "pages.home.selectedTrack.cards.logistics.imageAlt"
    | "pages.home.selectedTrack.cards.luxury.imageAlt";
}

export const selectedTrackCards: SelectedTrackCard[] = [
  {
    id: "residential",
    path: "/track-record/residential",
    image: residentialTrackImage,
    titleKey: "pages.home.selectedTrack.cards.residential.title",
    subtitleKey: "pages.home.selectedTrack.cards.residential.subtitle",
    imageAltKey: "pages.home.selectedTrack.cards.residential.imageAlt",
  },
  {
    id: "logistics",
    path: "/track-record/logistics",
    image: logisticsTrackImage,
    titleKey: "pages.home.selectedTrack.cards.logistics.title",
    subtitleKey: "pages.home.selectedTrack.cards.logistics.subtitle",
    imageAltKey: "pages.home.selectedTrack.cards.logistics.imageAlt",
  },
  {
    id: "luxury",
    path: "/track-record/luxury",
    image: luxuryTrackImage,
    titleKey: "pages.home.selectedTrack.cards.luxury.title",
    subtitleKey: "pages.home.selectedTrack.cards.luxury.subtitle",
    imageAltKey: "pages.home.selectedTrack.cards.luxury.imageAlt",
  },
];

export interface TeamMember {
  id: string;
  name: string;
}

export const teamCoPrincipals: TeamMember[] = [
  { id: "hector-jose", name: "Ing. Hector Jose Casado" },
  { id: "gabriel", name: "Ing. Gabriel Roig Picon" },
];

export const teamMembers: TeamMember[] = [
  { id: "luis", name: "Dr. Luis Carlos Serra Carmona" },
  { id: "gustavo", name: "Ing. Gustavo Stolk Toro" },
  { id: "hector-alberto", name: "Ing. Hector Alberto Casado" },
  { id: "raul", name: "Arq. Raul Garcia Ballestas" },
  { id: "armando", name: "Dr. Armando Hidalgo Unamuno" },
];
