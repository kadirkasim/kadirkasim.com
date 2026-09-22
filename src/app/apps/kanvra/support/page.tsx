import type { Metadata } from "next";
import { SupportPage } from "@/components/ProductPages";
import { getProduct, getSite } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { getUi } from "@/lib/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const ui = getUi(locale);
  return { title: `${ui.support} — Kanvra` };
}

export default async function KanvraSupport() {
  const locale = await getLocale();
  return (
    <SupportPage
      product={getProduct("kanvra", locale)}
      email={getSite(locale).supportEmail}
      locale={locale}
    />
  );
}
