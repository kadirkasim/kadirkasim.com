import type { Metadata } from "next";
import { ProductLanding } from "@/components/ProductPages";
import { JsonLd, softwareJsonLd } from "@/components/JsonLd";
import { getProduct } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const product = getProduct("solitaire-friends", locale);
  return pageMetadata({
    title: product.title,
    description: product.description,
    path: "/games/solitaire-friends",
    image: "/games/solitaire-friends/opengraph-image",
  });
}

export default async function SolitairePage() {
  const locale = await getLocale();
  return (
    <>
      <JsonLd data={softwareJsonLd("solitaire-friends")} />
      <ProductLanding product={getProduct("solitaire-friends", locale)} locale={locale} />
    </>
  );
}
