export interface NavItem {
  labelKey: "nav.home" | "nav.aboutUs" | "nav.trackRecord" | "nav.currentProjects" | "nav.contact";
  path: string;
}

export const navItems: NavItem[] = [
  { labelKey: "nav.home", path: "/" },
  { labelKey: "nav.aboutUs", path: "/about-us" },
  { labelKey: "nav.trackRecord", path: "/track-record" },
  { labelKey: "nav.currentProjects", path: "/current-projects" },
  { labelKey: "nav.contact", path: "/contact" },
];

export interface FooterPhone {
  display: string;
  href: string;
}

export const footerEmail = "interest@panoramiaccs.com";

export const footerPhones: FooterPhone[] = [
  { display: "+58 414 3116161", href: "tel:+584143116161" },
  { display: "+58 212 2578558", href: "tel:+582122578558" },
];

export const footerInstagramUrl = "https://www.instagram.com/panoramia.capital/";
