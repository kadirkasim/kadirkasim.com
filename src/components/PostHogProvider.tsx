"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, type ReactNode } from "react";
import {
  analyticsEnabled,
  posthogHost,
  posthogKey,
  trackPageview,
} from "@/lib/analytics";

function PostHogPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!analyticsEnabled()) return;
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    trackPageview(window.location.origin + url);
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: ReactNode }) {
  const started = useRef(false);

  useEffect(() => {
    if (!analyticsEnabled() || started.current) return;
    started.current = true;

    posthog.init(posthogKey, {
      api_host: posthogHost,
      person_profiles: "identified_only",
      // No durable cookie/localStorage — aligns with anonymous usage-only.
      persistence: "memory",
      capture_pageview: false,
      capture_pageleave: true,
      autocapture: false,
      disable_session_recording: true,
    });
  }, []);

  if (!analyticsEnabled()) {
    return <>{children}</>;
  }

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageViews />
      </Suspense>
      {children}
    </PHProvider>
  );
}
