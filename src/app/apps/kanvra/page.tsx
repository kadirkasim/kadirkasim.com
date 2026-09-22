import type { Metadata } from "next";
import { ProductLanding } from "@/components/ProductPages";
import { JsonLd, softwareJsonLd } from "@/components/JsonLd";
import { getProduct } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const product = getProduct("kanvra", locale);
  return pageMetadata({
    title: product.title,
    description: product.description,
    path: "/apps/kanvra",
    image: "/apps/kanvra/opengraph-image",
  });
}

export default async function KanvraPage() {
  const locale = await getLocale();
  return (
    <>
      <JsonLd data={softwareJsonLd("kanvra")} />
      <ProductLanding product={getProduct("kanvra", locale)} locale={locale} />
    </>
  );
}
