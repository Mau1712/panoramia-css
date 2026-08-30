export const PRERENDER_LOCALES = ["es", "en"] as const;

export type PrerenderLocale = (typeof PRERENDER_LOCALES)[number];

/** Content paths (without locale prefix). ES = `/path`, EN = `/en/path`. */
export const PRERENDER_ROUTES = [
  "/",
  "/about-us",
  "/track-record",
  "/track-record/residential",
  "/track-record/logistics",
  "/track-record/luxury",
  "/current-projects",
  "/land-holdings",
  "/contact",
] as const;

export type PrerenderRoute = (typeof PRERENDER_ROUTES)[number];
