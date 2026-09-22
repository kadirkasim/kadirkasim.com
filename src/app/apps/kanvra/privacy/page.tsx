import type { Metadata } from "next";
import { PrivacyPage } from "@/components/ProductPages";
import { getProduct } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";
import { getUi } from "@/lib/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const product = getProduct("kanvra", locale);
  const ui = getUi(locale);
  const description =
    locale === "tr"
      ? `${product.title} gizlilik politikası. Veri cihazınızda kalır; hesap, reklam ve izleme yoktur.`
      : `Privacy policy for ${product.title}. On-device data; no account, ads, or tracking.`;

  return pageMetadata({
    title: `${ui.privacy} — ${product.title}`,
    description,
    path: "/apps/kanvra/privacy",
    image: "/apps/kanvra/opengraph-image",
  });
}

export default async function KanvraPrivacy() {
  const locale = await getLocale();
  return <PrivacyPage product={getProduct("kanvra", locale)} locale={locale} />;
}
