import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();

export type TechItem = { name: string; note: string };
export type BuildItem = {
  label: string;
  body: string;
  detail: string;
  points: string[];
};

export type SiteContent = {
  title: string;
  tagline: string;
  supportEmail: string;
  role: string;
  status: string;
  headline: string;
  heroLead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  introTitle: string;
  introBody: string;
  workHeading: string;
  workLead: string;
  buildHeading: string;
  aboutTitle: string;
  about: string;
  invite: string;
  contactTitle: string;
  contactLead: string;
  techLine: string;
  stack: TechItem[];
  builds: BuildItem[];
  body: string;
};

export type ProductKind = "app" | "game";

export type ProductSection = {
  title: string;
  body: string;
};

export type ProductContent = {
  title: string;
  slug: string;
  kind: ProductKind;
  status: "live" | "coming-soon";
  year: string;
  category: string;
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
  cover: string;
  icon: string;
  screenshots: string[];
  technologies: string[];
  problem: string;
  solution: string;
  sections: ProductSection[];
  body: string;
};

function read(rel: string) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function strings(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item).trim()).filter(Boolean);
}

function parseTech(value: unknown): TechItem[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const row = item as { name?: unknown; note?: unknown };
      const name = String(row.name ?? "").trim();
      const note = String(row.note ?? "").trim();
      return name ? { name, note } : null;
    })
    .filter((item): item is TechItem => item !== null);
}

function parseBuilds(value: unknown): BuildItem[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const row = item as { label?: unknown; body?: unknown; detail?: unknown; points?: unknown };
      const label = String(row.label ?? "").trim();
      const body = String(row.body ?? "").trim();
      const detail = String(row.detail ?? "").trim();
      const points = strings(row.points);
      return label && body ? { label, body, detail, points } : null;
    })
    .filter((item): item is BuildItem => item !== null);
}

function parseSections(value: unknown): ProductSection[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const row = item as { title?: unknown; body?: unknown };
      const title = String(row.title ?? "").trim();
      const body = String(row.body ?? "").trim();
      return title && body ? { title, body } : null;
    })
    .filter((item): item is ProductSection => item !== null);
}

function parsePolicies(value: unknown): { name: string; url: string }[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const row = item as { name?: unknown; url?: unknown };
      const name = String(row.name ?? "").trim();
      const url = String(row.url ?? "").trim();
      return name && url ? { name, url } : null;
    })
    .filter((item): item is { name: string; url: string } => item !== null);
}

export function getSite(): SiteContent {
  const { data, content } = matter(read("content/site.md"));
  return {
    title: String(data.title),
    tagline: String(data.tagline),
    supportEmail: String(data.supportEmail ?? "support@kadirkasim.com"),
    role: String(data.role ?? "Software developer"),
    status: String(data.status ?? ""),
    headline: String(data.headline ?? ""),
    heroLead: String(data.heroLead ?? ""),
    ctaPrimary: String(data.ctaPrimary ?? "See the work"),
    ctaSecondary: String(data.ctaSecondary ?? "Work with me"),
    introTitle: String(data.introTitle ?? ""),
    introBody: String(data.introBody ?? ""),
    workHeading: String(data.workHeading ?? "Selected work"),
    workLead: String(data.workLead ?? ""),
    buildHeading: String(data.buildHeading ?? "What I build"),
    aboutTitle: String(data.aboutTitle ?? ""),
    about: String(data.about ?? content.trim()),
    invite: String(data.invite ?? ""),
    contactTitle: String(data.contactTitle ?? "Have an idea?"),
    contactLead: String(data.contactLead ?? ""),
    techLine: String(data.techLine ?? ""),
    stack: parseTech(data.stack),
    builds: parseBuilds(data.builds),
    body: content.trim(),
  };
}

export function getProduct(slug: string): ProductContent {
  const { data, content } = matter(read(`content/products/${slug}.md`));
  return {
    title: String(data.title),
    slug: String(data.slug),
    kind: data.kind as ProductKind,
    status: data.status as ProductContent["status"],
    year: String(data.year ?? ""),
    category: String(data.category ?? (data.kind === "game" ? "Game" : "App")),
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
    adPrivacyPolicies: parsePolicies(data.adPrivacyPolicies),
    cover: String(data.cover ?? ""),
    icon: String(data.icon ?? ""),
    screenshots: strings(data.screenshots),
    technologies: strings(data.technologies),
    problem: String(data.problem ?? ""),
    solution: String(data.solution ?? ""),
    sections: parseSections(data.sections),
    body: content.trim(),
  };
}

const order = ["kanvra", "solitaire-friends"];

export function listProducts(): ProductContent[] {
  const dir = path.join(root, "content/products");
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => getProduct(file.replace(/\.md$/, "")))
    .sort((a, b) => {
      const ai = order.indexOf(a.slug);
      const bi = order.indexOf(b.slug);
      return (ai === -1 ? order.length : ai) - (bi === -1 ? order.length : bi);
    });
}

export function productBasePath(product: ProductContent) {
  return product.kind === "game" ? `/games/${product.slug}` : `/apps/${product.slug}`;
}

export function lines(text: string): string[] {
  return text
    .split(/\\n|\n/)
    .map((part) => part.trim())
    .filter(Boolean);
}
