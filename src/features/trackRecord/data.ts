export const residentialTrackBannerPoints = [
  "pages.trackRecord.projects.residential.banner.points.acquisition",
  "pages.trackRecord.projects.residential.banner.points.zoning",
  "pages.trackRecord.projects.residential.banner.points.services",
  "pages.trackRecord.projects.residential.banner.points.simultaneous",
  "pages.trackRecord.projects.residential.banner.points.partnership",
] as const;

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
