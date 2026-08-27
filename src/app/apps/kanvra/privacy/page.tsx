import type { Metadata } from "next";
import { PrivacyPage } from "@/components/ProductPages";
import { getProduct } from "@/lib/content";

export function generateMetadata(): Metadata {
  const product = getProduct("kanvra");
  return { title: `Privacy — ${product.title}`, description: product.description };
}

export default function KanvraPrivacy() {
  return <PrivacyPage product={getProduct("kanvra")} />;
}
