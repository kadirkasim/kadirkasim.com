import type { Metadata } from "next";
import { ProductLanding } from "@/components/ProductPages";
import { getProduct } from "@/lib/content";

export function generateMetadata(): Metadata {
  const product = getProduct("solitaire-friends");
  return { title: product.title, description: product.description };
}

export default function SolitairePage() {
  return <ProductLanding product={getProduct("solitaire-friends")} />;
}
