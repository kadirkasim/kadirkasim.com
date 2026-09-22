import type { MetadataRoute } from "next";
import { absoluteUrl, indexedPaths } from "@/lib/seo";

const priorityByPath: Record<string, number> = {
  "/": 1,
  "/apps/kanvra": 0.9,
  "/games/solitaire-friends": 0.9,
  "/apps/kanvra/support": 0.5,
  "/apps/kanvra/privacy": 0.5,
  "/games/solitaire-friends/support": 0.5,
  "/games/solitaire-friends/privacy": 0.5,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return indexedPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: priorityByPath[path] ?? 0.6,
  }));
}
