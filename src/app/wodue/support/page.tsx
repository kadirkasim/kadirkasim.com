import type { Metadata } from "next";
import { WoDueSupport } from "@/components/WoDuePages";
import { getSite } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";
import { getUi } from "@/lib/ui";
import { getWoDue } from "@/lib/wodue";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const doc = getWoDue("support", locale);
  return pageMetadata({
    title: `${getUi(locale).support} — ${doc.title}`,
    description: doc.metaDescription,
    path: "/wodue/support",
  });
}

export default async function WoDueSupportPage() {
  const locale = await getLocale();
  return (
    <WoDueSupport doc={getWoDue("support", locale)} email={getSite(locale).supportEmail} locale={locale} />
  );
}
