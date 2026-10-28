import type { Metadata } from "next";
import { WoDuePrivacy } from "@/components/WoDuePages";
import { getSite } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";
import { getUi } from "@/lib/ui";
import { getWoDue } from "@/lib/wodue";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const doc = getWoDue("privacy", locale);
  return pageMetadata({
    title: `${getUi(locale).privacy} — ${doc.title}`,
    description: doc.metaDescription,
    path: "/wodue/privacy",
  });
}

export default async function WoDuePrivacyPage() {
  const locale = await getLocale();
  return (
    <WoDuePrivacy doc={getWoDue("privacy", locale)} email={getSite(locale).supportEmail} locale={locale} />
  );
}
