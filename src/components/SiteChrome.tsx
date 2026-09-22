"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/lib/locale";
import type { UiCopy } from "@/lib/ui";

type HeaderProps = {
  title: string;
  status: string;
  email: string;
  locale: Locale;
  ui: UiCopy;
};

export function SiteHeader({ title, status, email, locale, ui }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const nav = [
    { href: "/#build", label: ui.focus },
    { href: "/#tech", label: ui.navStack },
    { href: "/#about", label: ui.navAbout },
    { href: "/#contact", label: ui.navContact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-void/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-3 sm:gap-6">
        <Link href="/" className="shrink-0 text-[15px] font-medium tracking-tight text-ink no-underline">
          {title}
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] text-muted md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="no-underline transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
          {status ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[12px] text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              {status}
            </span>
          ) : null}
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher locale={locale} label={ui.language} />
          <a href={`mailto:${email}`} className="text-[13px] text-muted no-underline hover:text-ink md:hidden">
            {ui.write}
          </a>
        </div>
      </Container>
    </header>
  );
}

type FooterProps = {
  title: string;
  tagline: string;
  email: string;
  products: { title: string; href: string }[];
  designedWith: string;
  analyticsNote?: string;
};

export function SiteFooter({
  title,
  tagline,
  email,
  products,
  designedWith,
  analyticsNote,
}: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-void">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[15px] font-medium tracking-tight text-ink">{title}</p>
          <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-muted">{tagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted">
          {products.map((product) => (
            <Link key={product.href} href={product.href} className="no-underline hover:text-ink">
              {product.title}
            </Link>
          ))}
          <a href={`mailto:${email}`} className="text-link no-underline">
            {email}
          </a>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-6 text-[12px] text-faint sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>
            © {year} {title}
          </p>
          {analyticsNote ? <p className="max-w-md leading-relaxed">{analyticsNote}</p> : null}
        </div>
        <p>{designedWith}</p>
      </Container>
    </footer>
  );
}
