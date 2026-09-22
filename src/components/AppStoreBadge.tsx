"use client";

import { StoreLink } from "@/components/StoreLink";

type Props = {
  href: string;
  title: string;
  /** Product slug or name for `store_click` (e.g. kanvra). */
  product: string;
};

export function AppStoreBadge({ href, title, product }: Props) {
  return (
    <StoreLink href={href} product={product} className="inline-block no-underline">
      <img
        src="/badges/app-store-us.svg"
        alt={`Download ${title} on the App Store`}
        width={149}
        height={50}
        className="h-[50px] w-auto"
      />
    </StoreLink>
  );
}
