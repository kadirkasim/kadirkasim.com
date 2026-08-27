import type { Metadata } from "next";
import { ProductLanding } from "@/components/ProductPages";
import { getProduct } from "@/lib/content";

export function generateMetadata(): Metadata {
  const product = getProduct("kanvra");
  return { title: product.title, description: product.description };
}

export default function KanvraPage() {
  return <ProductLanding product={getProduct("kanvra")} />;
}
