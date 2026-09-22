import { DeviceShot, ShotStack } from "@/components/DeviceShot";
import type { ProductContent } from "@/lib/content";

export function ProductVisual({
  product,
  stacked = false,
}: {
  product: ProductContent;
  stacked?: boolean;
}) {
  const shots = product.screenshots.length
    ? product.screenshots
    : product.cover
      ? [product.cover]
      : [];

  if (!shots.length) return null;

  if (stacked && shots.length > 1) {
    return <ShotStack shots={shots} alt={`${product.title} on mobile`} />;
  }

  return <DeviceShot src={shots[0]} alt={`${product.title} on mobile`} />;
}
