import { build } from "vite";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  resolveRouteSeo,
} from "../src/app/seo/siteMeta.ts";
import {
  PRERENDER_LOCALES,
  PRERENDER_ROUTES,
} from "../src/app/seo/prerenderRoutes.ts";
import { localizePath } from "../src/app/i18n/localePath.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const ssrOutDir = path.join(rootDir, "dist-ssr");

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const setMetaByName = (html, name, content) => {
  const pattern = new RegExp(
    `<meta\\s+[^>]*name=["']${name}["'][^>]*>`,
    "i",
  );
  const tag = `<meta name="${name}" content="${escapeHtml(content)}" />`;
  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }
  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const setMetaByProperty = (html, property, content) => {
  const pattern = new RegExp(
    `<meta\\s+[^>]*property=["']${property}["'][^>]*>`,
    "i",
  );
  const tag = `<meta property="${property}" content="${escapeHtml(content)}" />`;
  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }
  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const setCanonical = (html, href) => {
  const pattern = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;
  const tag = `<link rel="canonical" href="${escapeHtml(href)}" />`;
  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }
  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const setHreflang = (html, hreflang, href) => {
  const pattern = new RegExp(
    `<link\\s+[^>]*hreflang=["']${hreflang}["'][^>]*>`,
    "i",
  );
  const tag = `<link rel="alternate" hreflang="${hreflang}" href="${escapeHtml(href)}" />`;
  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }
  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const setTitle = (html, title) =>
  html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

const setHtmlLang = (html, lang) =>
  html.replace(/<html\s+([^>]*)lang=["'][^"']*["']/i, `<html $1lang="${lang}"`);

const injectRootAndStyles = (template, { appHtml, css }) => {
  let html = template.replace(
    /<div id="root"><\/div>|<div id="root">[\s\S]*?<\/div>/i,
    `<div id="root">${appHtml}</div>`,
  );

  if (css) {
    html = html.replace("</head>", `    ${css}\n  </head>`);
  }

  return html;
};

const applyRouteMeta = (template, contentPath, locale) => {
  const pathname = localizePath(contentPath, locale);
  const seo = resolveRouteSeo(contentPath, locale);
  const canonical = absoluteUrl(pathname);
  const esUrl = absoluteUrl(localizePath(contentPath, "es"));
  const enUrl = absoluteUrl(localizePath(contentPath, "en"));

  let html = template;
  html = setHtmlLang(html, locale);
  html = setTitle(html, seo.title);
  html = setMetaByName(html, "description", seo.description);
  html = setCanonical(html, canonical);
  html = setHreflang(html, "es", esUrl);
  html = setHreflang(html, "en", enUrl);
  html = setHreflang(html, "x-default", esUrl);
  html = setMetaByProperty(html, "og:title", seo.title);
  html = setMetaByProperty(html, "og:description", seo.description);
  html = setMetaByProperty(html, "og:url", canonical);
  html = setMetaByProperty(
    html,
    "og:locale",
    locale === "es" ? "es_VE" : "en_US",
  );
  html = setMetaByProperty(
    html,
    "og:locale:alternate",
    locale === "es" ? "en_US" : "es_VE",
  );
  html = setMetaByProperty(html, "og:site_name", SITE_NAME);
  html = setMetaByProperty(html, "og:image", DEFAULT_OG_IMAGE);
  html = setMetaByName(html, "twitter:title", seo.title);
  html = setMetaByName(html, "twitter:description", seo.description);
  html = setMetaByName(html, "twitter:image", DEFAULT_OG_IMAGE);
  return { html, pathname };
};

const outputPathForRoute = (pathname) => {
  if (pathname === "/") {
    return path.join(distDir, "index.html");
  }

  const segments = pathname.replace(/^\//, "").split("/");
  return path.join(distDir, ...segments, "index.html");
};

const run = async () => {
  const templatePath = path.join(distDir, "index.html");
  const template = await fs.readFile(templatePath, "utf8");

  console.log("[prerender] Building SSR bundle…");
  await build({
    configFile: path.join(rootDir, "vite.config.ts"),
    // Node ESM interop breaks styled-components' default export when externalized.
    ssr: {
      noExternal: ["styled-components"],
    },
    build: {
      ssr: path.join(rootDir, "src/entry-server.tsx"),
      outDir: ssrOutDir,
      emptyOutDir: true,
      sourcemap: false,
      minify: false,
      rollupOptions: {
        output: {
          entryFileNames: "entry-server.js",
          format: "esm",
        },
      },
    },
  });

  const entryUrl = pathToFileURL(path.join(ssrOutDir, "entry-server.js")).href;
  const { render } = await import(entryUrl);

  for (const contentPath of PRERENDER_ROUTES) {
    for (const locale of PRERENDER_LOCALES) {
      const url = localizePath(contentPath, locale);
      console.log(`[prerender] ${url} (${locale})`);
      const { html: appHtml, css } = await render(url, locale);
      const { html: withMeta, pathname } = applyRouteMeta(
        template,
        contentPath,
        locale,
      );
      const pageHtml = injectRootAndStyles(withMeta, { appHtml, css });

      const outFile = outputPathForRoute(pathname);
      await fs.mkdir(path.dirname(outFile), { recursive: true });
      await fs.writeFile(outFile, pageHtml, "utf8");
    }
  }

  console.log("[prerender] Done.");
};

run().catch((error) => {
  console.error("[prerender] Failed:", error);
  process.exit(1);
});
