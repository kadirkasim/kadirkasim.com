import type { Metadata } from "next";
import { SupportPage } from "@/components/ProductPages";
import { getProduct, getSite } from "@/lib/content";

export function generateMetadata(): Metadata {
  return { title: "Support — Hue Stack" };
}

export default function HueStackSupport() {
  return <SupportPage product={getProduct("hue-stack")} email={getSite().supportEmail} />;
}
