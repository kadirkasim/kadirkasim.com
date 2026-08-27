import type { Metadata } from "next";
import { SupportPage } from "@/components/ProductPages";
import { getProduct, getSite } from "@/lib/content";

export function generateMetadata(): Metadata {
  return { title: "Support — Kanvra" };
}

export default function KanvraSupport() {
  return <SupportPage product={getProduct("kanvra")} email={getSite().supportEmail} />;
}
