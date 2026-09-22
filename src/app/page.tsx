import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getSite } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const site = getSite(locale);

  return pageMetadata({
    title: site.title,
    description: `${site.title} — ${site.tagline}`,
    path: "/",
    absoluteTitle: true,
  });
}

export default async function Page() {
  const locale = await getLocale();
  return <HomePage site={getSite(locale)} locale={locale} />;
}
