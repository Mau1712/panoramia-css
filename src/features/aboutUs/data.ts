export interface TeamGroup {
  id: "coPrincipals" | "members";
  titleKey:
    | "pages.aboutUs.meetOurTeam.groups.coPrincipals"
    | "pages.aboutUs.meetOurTeam.groups.members";
  members: string[];
}

export const teamGroups: TeamGroup[] = [
  {
    id: "coPrincipals",
    titleKey: "pages.aboutUs.meetOurTeam.groups.coPrincipals",
    members: ["Ing. Hector Jose Casado", "Ing. Gabriel Roig Picon"],
  },
  {
    id: "members",
    titleKey: "pages.aboutUs.meetOurTeam.groups.members",
    members: [
      "Ing. Gustavo Stolk Toro",
      "Ing. Hector Alberto Casado",
      "Dr. Luis Carlos Serra Carmona",
      "Mr. Francisco Javier Reyna",
      "Arq. Raul Garcia Ballestas",
      "Dr. Armando Hidalgo Unamuno",
    ],
  },
];
