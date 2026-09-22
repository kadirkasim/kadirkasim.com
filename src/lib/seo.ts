import type { Metadata } from "next";

export const siteOrigin = "https://kadirkasim.com";
export const siteName = "Kadir Kasim";

export const indexedPaths = [
  "/",
  "/apps/kanvra",
  "/apps/kanvra/support",
  "/apps/kanvra/privacy",
  "/games/solitaire-friends",
  "/games/solitaire-friends/support",
  "/games/solitaire-friends/privacy",
] as const;

export type IndexedPath = (typeof indexedPaths)[number];

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteOrigin}${normalized === "/" ? "" : normalized}`;
}

type PageSeoInput = {
  title: string;
  description: string;
  path: IndexedPath | string;
  /** Use the title as-is (no layout template). */
  absoluteTitle?: boolean;
  index?: boolean;
  /** Path to OG image route or static file. Defaults to site opengraph-image. */
  image?: string;
};

/** Stable per-URL metadata: unique title/description, canonical, OG, Twitter. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  index = true,
  image = "/opengraph-image",
}: PageSeoInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const fullTitle = absoluteTitle ? title : `${title} — ${siteName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      // Cookie locale shares one URL — do not invent /tr paths for hreflang.
      languages: {
        "x-default": canonical,
        en: canonical,
      },
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: absoluteUrl(canonical),
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
