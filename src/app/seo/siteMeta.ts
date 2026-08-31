export const SITE_ORIGIN = "https://panoramiaccs.com";
export const SITE_NAME = "Panoramia Capital";
export const DEFAULT_OG_IMAGE_PATH = "/og-image.webp";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}${DEFAULT_OG_IMAGE_PATH}`;
export const THEME_COLOR = "#FFFFFF";

export type SeoLocale = "en" | "es";

export interface LocaleSeoCopy {
  title: string;
  description: string;
}

export interface RouteSeoMeta {
  path: string;
  en: LocaleSeoCopy;
  es: LocaleSeoCopy;
}

/** Default site-wide SEO (also mirrored in index.html for crawlers). */
export const defaultSeo: Record<SeoLocale, LocaleSeoCopy> = {
  es: {
    title:
      "Panoramia Capital | Inversión y desarrollo inmobiliario en Venezuela",
    description:
      "Panoramia Capital origina, estructura, desarrolla y opera proyectos inmobiliarios en Venezuela, coinvirtiendo con Limited Partners en residencial, logística y uso mixto.",
  },
  en: {
    title:
      "Panoramia Capital | Real Estate Investment Platform in Venezuela",
    description:
      "Panoramia Capital originates, structures, develops, and operates real estate projects in Venezuela, co-investing with Limited Partners across residential, logistics, and mixed-use assets.",
  },
};

/**
 * Per-route titles/descriptions for SPA navigation and JS-capable crawlers.
 * Static Open Graph defaults remain in index.html (most social scrapers do not run JS).
 */
export const routeSeo: RouteSeoMeta[] = [
  {
    path: "/",
    es: defaultSeo.es,
    en: defaultSeo.en,
  },
  {
    path: "/about-us",
    es: {
      title: "Nosotros | Panoramia Capital",
      description:
        "Conoce Panoramia Capital: más de 40 años desarrollando proyectos urbanos, residenciales, logísticos y comerciales en Caracas, Venezuela.",
    },
    en: {
      title: "About Us | Panoramia Capital",
      description:
        "Learn about Panoramia Capital: 40+ years developing urban, residential, logistics, and commercial projects in Caracas, Venezuela.",
    },
  },
  {
    path: "/track-record",
    es: {
      title: "Trayectoria | Panoramia Capital",
      description:
        "Revisa la trayectoria de Panoramia Capital en desarrollos residenciales, logísticos y de regeneración urbana en Venezuela.",
    },
    en: {
      title: "Track Record | Panoramia Capital",
      description:
        "Explore Panoramia Capital’s track record across residential, logistics, and urban regeneration developments in Venezuela.",
    },
  },
  {
    path: "/track-record/residential",
    es: {
      title: "Desarrollo residencial de alta densidad | Panoramia Capital",
      description:
        "Caso de trayectoria: de tierra a vivienda residencial de alta densidad, ejecutado por Panoramia Capital en Caracas.",
    },
    en: {
      title: "High-Density Residential Development | Panoramia Capital",
      description:
        "Track record case: land development to high-density residential housing delivered by Panoramia Capital in Caracas.",
    },
  },
  {
    path: "/track-record/logistics",
    es: {
      title: "Logística last mile | Panoramia Capital",
      description:
        "Caso de trayectoria: desarrollo de tierra a activos de logística last mile por Panoramia Capital.",
    },
    en: {
      title: "Last Mile Logistics | Panoramia Capital",
      description:
        "Track record case: land development to last-mile logistics assets by Panoramia Capital.",
    },
  },
  {
    path: "/track-record/luxury",
    es: {
      title: "Residencial de lujo | Panoramia Capital",
      description:
        "Caso de trayectoria: desarrollo de tierra a residencial de lujo ejecutado por Panoramia Capital.",
    },
    en: {
      title: "Luxury Residential | Panoramia Capital",
      description:
        "Track record case: land development to luxury residential delivered by Panoramia Capital.",
    },
  },
  {
    path: "/current-projects",
    es: {
      title: "Proyectos actuales | Panoramia Capital",
      description:
        "Pipeline activo de Panoramia Capital: logística urbana, residencial especializado, second home y desarrollos en Caracas.",
    },
    en: {
      title: "Current Projects | Panoramia Capital",
      description:
        "Panoramia Capital’s active pipeline: urban logistics, specialty residential, second-home, and developments in Caracas.",
    },
  },
  {
    path: "/land-holdings",
    es: {
      title: "Tenencias de tierra | Panoramia Capital",
      description:
        "Panoramia Capital controla una amplia extensión de terreno estratégico en Caracas y su área de expansión.",
    },
    en: {
      title: "Land Holdings | Panoramia Capital",
      description:
        "Panoramia Capital controls a vast extension of strategically located land in Caracas and its expansion area.",
    },
  },
  {
    path: "/contact",
    es: {
      title: "Contacto | Panoramia Capital",
      description:
        "Contacta a Panoramia Capital para consultas de desarrollo, inversión o partnership en Caracas, Venezuela.",
    },
    en: {
      title: "Contact | Panoramia Capital",
      description:
        "Contact Panoramia Capital for development, investment, or partnership inquiries in Caracas, Venezuela.",
    },
  },
  {
    path: "/privacy",
    es: {
      title: "Política de privacidad | Panoramia Capital",
      description:
        "Política de privacidad de Panoramia Capital: tratamiento de datos del formulario de contacto, cookies y terceros.",
    },
    en: {
      title: "Privacy Policy | Panoramia Capital",
      description:
        "Panoramia Capital privacy policy: contact form data processing, cookies, and third-party services.",
    },
  },
];

export const resolveRouteSeo = (
  pathname: string,
  locale: SeoLocale,
): LocaleSeoCopy => {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  const exact = routeSeo.find((entry) => entry.path === normalized);
  if (exact) {
    return exact[locale];
  }

  return defaultSeo[locale];
};

export const absoluteUrl = (pathname: string) => {
  if (!pathname || pathname === "/") {
    return SITE_ORIGIN;
  }

  return `${SITE_ORIGIN}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
};
