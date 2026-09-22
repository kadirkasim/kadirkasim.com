import type { Metadata } from "next";
import { ProductLanding } from "@/components/ProductPages";
import { getProduct } from "@/lib/content";
import { getLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const product = getProduct("kanvra", locale);
  return { title: product.title, description: product.description };
}

export default async function KanvraPage() {
  const locale = await getLocale();
  return <ProductLanding product={getProduct("kanvra", locale)} locale={locale} />;
}
