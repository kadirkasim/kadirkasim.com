import posthog from "posthog-js";

export const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";
export const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

export function analyticsEnabled(): boolean {
  return Boolean(posthogKey);
}

/** Anonymous store CTA — no personal identifiers. */
export function trackStoreClick(product: string, store: "app_store" = "app_store") {
  if (!analyticsEnabled() || typeof window === "undefined") return;
  posthog.capture("store_click", { product, store });
}

export function trackPageview(url: string) {
  if (!analyticsEnabled() || typeof window === "undefined") return;
  posthog.capture("$pageview", { $current_url: url });
}
