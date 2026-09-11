import type { Metadata } from "next";
import { ProductLanding } from "@/components/ProductPages";
import { getProduct } from "@/lib/content";

export function generateMetadata(): Metadata {
  const product = getProduct("hue-stack");
  return { title: product.title, description: product.description };
}

export default function HueStackPage() {
  return <ProductLanding product={getProduct("hue-stack")} />;
}
