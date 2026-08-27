import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();

export type SiteContent = {
  title: string;
  tagline: string;
  supportEmail: string;
  body: string;
};

export type ProductKind = "app" | "game";

export type ProductContent = {
  title: string;
  slug: string;
  kind: ProductKind;
  status: "live" | "coming-soon";
  tagline: string;
  description: string;
  storeUrl: string;
  privacyUpdated: string;
  onDevice: boolean;
  ads: boolean;
  analytics: boolean;
  iap: boolean;
  body: string;
};

function readFile(rel: string) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

export function getSite(): SiteContent {
  const { data, content } = matter(readFile("content/site.md"));
  return {
    title: String(data.title),
    tagline: String(data.tagline),
    supportEmail: String(data.supportEmail ?? "support@kadirkasim.com"),
    body: content.trim(),
  };
}

export function getProduct(slug: string): ProductContent {
  const { data, content } = matter(readFile(`content/products/${slug}.md`));
  return {
    title: String(data.title),
    slug: String(data.slug),
    kind: data.kind as ProductKind,
    status: data.status as ProductContent["status"],
    tagline: String(data.tagline),
    description: String(data.description),
    storeUrl: String(data.storeUrl ?? ""),
    privacyUpdated: String(data.privacyUpdated),
    onDevice: Boolean(data.onDevice),
    ads: Boolean(data.ads),
    analytics: Boolean(data.analytics),
    iap: Boolean(data.iap),
    body: content.trim(),
  };
}

export function productBasePath(product: ProductContent) {
  return product.kind === "game" ? `/games/${product.slug}` : `/apps/${product.slug}`;
}
