import type { Metadata } from "next";
import { PrivacyPage } from "@/components/ProductPages";
import { getProduct } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { getUi } from "@/lib/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const product = getProduct("solitaire-friends", locale);
  const ui = getUi(locale);
  return { title: `${ui.privacy} — ${product.title}`, description: product.description };
}

export default async function SolitairePrivacy() {
  const locale = await getLocale();
  return <PrivacyPage product={getProduct("solitaire-friends", locale)} locale={locale} />;
}
