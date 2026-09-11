import type { Metadata } from "next";
import { PrivacyPage } from "@/components/ProductPages";
import { getProduct } from "@/lib/content";

export function generateMetadata(): Metadata {
  const product = getProduct("hue-stack");
  return { title: `Privacy — ${product.title}` };
}

export default function HueStackPrivacy() {
  return <PrivacyPage product={getProduct("hue-stack")} />;
}
