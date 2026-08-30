import type { AppLanguage } from "./i18n";

export const EN_LOCALE_PREFIX = "/en";

const splitPathAndHash = (path: string) => {
  const hashIndex = path.indexOf("#");
  if (hashIndex === -1) {
    return { pathname: path, hash: "" };
  }
  return {
    pathname: path.slice(0, hashIndex),
    hash: path.slice(hashIndex),
  };
};

const normalizePathname = (pathname: string) => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.length > 1 && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
};

/** Locale encoded in the URL (`/en/...` → en, otherwise es). */
export const getLocaleFromPathname = (pathname: string): AppLanguage => {
  const normalized = normalizePathname(pathname);
  if (normalized === EN_LOCALE_PREFIX || normalized.startsWith(`${EN_LOCALE_PREFIX}/`)) {
    return "en";
  }
  return "es";
};

/** Content path without `/en` prefix (for route SEO + nav matching). */
export const stripLocalePrefix = (pathname: string): string => {
  const normalized = normalizePathname(pathname);

  if (normalized === EN_LOCALE_PREFIX) {
    return "/";
  }

  if (normalized.startsWith(`${EN_LOCALE_PREFIX}/`)) {
    return normalized.slice(EN_LOCALE_PREFIX.length) || "/";
  }

  return normalized;
};

/** Prefix a content path (and optional hash) for the given locale. */
export const localizePath = (path: string, locale: AppLanguage): string => {
  const { pathname, hash } = splitPathAndHash(path);
  const bare = stripLocalePrefix(pathname || "/");

  const localized =
    locale === "en"
      ? bare === "/"
        ? EN_LOCALE_PREFIX
        : `${EN_LOCALE_PREFIX}${bare}`
      : bare;

  return `${localized}${hash}`;
};

/** Swap locale while preserving the content path + hash. */
export const switchLocalePath = (
  pathname: string,
  targetLocale: AppLanguage,
  hash = "",
): string => {
  const bare = stripLocalePrefix(pathname);
  return localizePath(`${bare}${hash}`, targetLocale);
};
