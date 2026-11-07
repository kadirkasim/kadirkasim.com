import type { Metadata } from "next";
import { WoDuePrivacy } from "@/components/WoDuePages";
import { getSite } from "@/lib/content";
import { getLocale, isLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";
import { getUi } from "@/lib/ui";
import { getWoDue } from "@/lib/wodue";

type PrivacyPageProps = { searchParams: Promise<{ lang?: string | string[] }> };

async function privacyLocale({ searchParams }: PrivacyPageProps) {
  const { lang } = await searchParams;
  return isLocale(lang) ? lang : getLocale();
}

export async function generateMetadata(props: PrivacyPageProps): Promise<Metadata> {
  const locale = await privacyLocale(props);
  const doc = getWoDue("privacy", locale);
  return pageMetadata({
    title: `${getUi(locale).privacy} — ${doc.title}`,
    description: doc.metaDescription,
    path: "/wodue/privacy",
  });
}

export default async function WoDuePrivacyPage(props: PrivacyPageProps) {
  const locale = await privacyLocale(props);
  return (
    <WoDuePrivacy doc={getWoDue("privacy", locale)} email={getSite(locale).supportEmail} locale={locale} />
  );
}
