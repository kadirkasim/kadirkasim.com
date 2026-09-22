"use client";

import type { ReactNode } from "react";
import { trackStoreClick } from "@/lib/analytics";

type Props = {
  href: string;
  product: string;
  className?: string;
  children: ReactNode;
};

/** External App Store link with anonymous `store_click` event. */
export function StoreLink({ href, product, className, children }: Props) {
  return (
    <a
      href={href}
      className={className}
      rel="noreferrer"
      target="_blank"
      onClick={() => trackStoreClick(product)}
    >
      {children}
    </a>
  );
}
