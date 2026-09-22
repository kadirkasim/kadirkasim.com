"use client";

import { usePathname } from "next/navigation";
import { useTransition } from "react";
import type { Locale } from "@/lib/locale";

type Props = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: Props) {
  const pathname = usePathname() || "/";
  const [pending, startTransition] = useTransition();

  const setLocale = (next: Locale) => {
    if (next === locale || pending) return;
    startTransition(async () => {
      await fetch("/api/locale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: next, redirect: pathname }),
      });
      window.location.reload();
    });
  };

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-full border border-line p-0.5 text-[12px]"
      role="group"
      aria-label={label}
    >
      {(["en", "tr"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            disabled={pending}
            onClick={() => setLocale(code)}
            className={`min-w-[2.1rem] rounded-full px-2.5 py-1 font-medium uppercase tracking-[0.08em] transition-colors ${
              active ? "bg-ink text-void" : "text-muted hover:text-ink"
            } disabled:opacity-60`}
            aria-pressed={active}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
