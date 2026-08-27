import type { Metadata } from "next";
import { PrivacyPage } from "@/components/ProductPages";
import { getProduct } from "@/lib/content";

export function generateMetadata(): Metadata {
  const product = getProduct("solitaire-friends");
  return { title: `Privacy — ${product.title}` };
}

export default function SolitairePrivacy() {
  return <PrivacyPage product={getProduct("solitaire-friends")} />;
}
