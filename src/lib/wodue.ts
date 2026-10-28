import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { defaultLocale, type Locale } from "@/lib/locale";

export const wodueBasePath = "/wodue";
export const wodueIcon = "/media/wodue/icon.png";

export type WoDueSection = {
  title: string;
  paragraphs: string[];
  items: string[];
  after: string[];
};

export type WoDueDoc = {
  title: string;
  metaDescription: string;
  lead: string;
  notice: string;
  updated: string;
  eyebrow: string;
  tagline: string;
  description: string;
  note: string;
  sections: WoDueSection[];
};

export type WoDuePage = "landing" | "privacy" | "support";

function file(locale: Locale, page: WoDuePage) {
  const rel = path.join("wodue", `${page}.md`);
  if (locale !== defaultLocale) {
    const localized = path.join(process.cwd(), "content", locale, rel);
    if (fs.existsSync(localized)) return localized;
  }
  return path.join(process.cwd(), "content", rel);
}

function text(value: unknown): string {
  return value == null ? "" : String(value).trim();
}

function list(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map(text).filter(Boolean);
}

function sections(value: unknown): WoDueSection[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const row = item as Record<string, unknown>;
      const title = text(row.title);
      const paragraphs = list(row.paragraphs);
      const items = list(row.items);
      const after = list(row.after);
      return title && (paragraphs.length || items.length) ? { title, paragraphs, items, after } : null;
    })
    .filter((item): item is WoDueSection => item !== null);
}

export function getWoDue(page: WoDuePage, locale: Locale = defaultLocale): WoDueDoc {
  const { data } = matter(fs.readFileSync(file(locale, page), "utf8"));
  return {
    title: text(data.title) || "WoDue",
    metaDescription: text(data.metaDescription),
    lead: text(data.lead),
    notice: text(data.notice),
    updated: text(data.updated),
    eyebrow: text(data.eyebrow),
    tagline: text(data.tagline),
    description: text(data.description),
    note: text(data.note),
    sections: sections(data.sections),
  };
}
