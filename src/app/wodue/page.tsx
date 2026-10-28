import type { Metadata } from "next";
import { WoDueLanding } from "@/components/WoDuePages";
import { getSite } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";
import { getWoDue } from "@/lib/wodue";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const doc = getWoDue("landing", locale);
  return pageMetadata({ title: doc.title, description: doc.metaDescription, path: "/wodue" });
}

export default async function WoDuePage() {
  const locale = await getLocale();
  return (
    <WoDueLanding doc={getWoDue("landing", locale)} email={getSite(locale).supportEmail} locale={locale} />
  );
}
