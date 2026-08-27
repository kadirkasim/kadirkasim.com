import type { Metadata } from "next";
import { SupportPage } from "@/components/ProductPages";
import { getProduct, getSite } from "@/lib/content";

export function generateMetadata(): Metadata {
  return { title: "Support — Solitaire Friends" };
}

export default function SolitaireSupport() {
  return <SupportPage product={getProduct("solitaire-friends")} email={getSite().supportEmail} />;
}
