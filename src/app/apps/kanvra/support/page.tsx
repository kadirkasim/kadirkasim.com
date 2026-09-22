import type { Metadata } from "next";
import { SupportPage } from "@/components/ProductPages";
import { getProduct, getSite } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";
import { getUi } from "@/lib/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const product = getProduct("kanvra", locale);
  const site = getSite(locale);
  const ui = getUi(locale);
  const description =
    locale === "tr"
      ? `${product.title} destek. Sorularınız için ${site.supportEmail} adresine yazın.`
      : `Support for ${product.title}. Email ${site.supportEmail} with your device, iOS version, and what you expected.`;

  return pageMetadata({
    title: `${ui.support} — ${product.title}`,
    description,
    path: "/apps/kanvra/support",
    image: "/apps/kanvra/opengraph-image",
  });
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
