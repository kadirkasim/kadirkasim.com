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
  adNetwork: string;
  adPartners: string;
  adUsedLabel: string;
  adPublisherId: string;
  attPrompt: boolean;
  adPrivacyPolicies: { name: string; url: string }[];
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
    adNetwork: String(data.adNetwork ?? ""),
    adPartners: String(data.adPartners ?? ""),
    adUsedLabel: String(data.adUsedLabel ?? ""),
    adPublisherId: String(data.adPublisherId ?? ""),
    attPrompt: Boolean(data.attPrompt),
    adPrivacyPolicies: parseAdPrivacyPolicies(data.adPrivacyPolicies),
    body: content.trim(),
  };
}

function parseAdPrivacyPolicies(value: unknown): { name: string; url: string }[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const policy = item as { name?: unknown; url?: unknown };
      const name = String(policy.name ?? "").trim();
      const url = String(policy.url ?? "").trim();
      return name && url ? { name, url } : null;
    })
    .filter((policy): policy is { name: string; url: string } => policy !== null);
}

export function productBasePath(product: ProductContent) {
  return product.kind === "game" ? `/games/${product.slug}` : `/apps/${product.slug}`;
}
