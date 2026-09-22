import type { Metadata } from "next";
import { PrivacyPage } from "@/components/ProductPages";
import { getProduct } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";
import { getUi } from "@/lib/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const product = getProduct("solitaire-friends", locale);
  const ui = getUi(locale);
  const description =
    locale === "tr"
      ? `${product.title} gizlilik politikası. İlerleme cihazınızda kalır. Sürüm 2.1 reklam içerir.`
      : `Privacy policy for ${product.title}. Progress stays on your device. Version 2.1 includes ads.`;

  return pageMetadata({
    title: `${ui.privacy} — ${product.title}`,
    description,
    path: "/games/solitaire-friends/privacy",
    image: "/games/solitaire-friends/opengraph-image",
  });
}

export default async function SolitairePrivacy() {
  const locale = await getLocale();
  return <PrivacyPage product={getProduct("solitaire-friends", locale)} locale={locale} />;
}
