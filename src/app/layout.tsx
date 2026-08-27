import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getSite } from "@/lib/content";
import "./globals.css";

export function generateMetadata(): Metadata {
  const site = getSite();
  return {
    title: {
      default: site.title,
      template: `%s — ${site.title}`,
    },
    description: site.tagline,
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-paper antialiased">
        <div className="mx-auto w-[min(40rem,calc(100%-2.5rem))]">
          <SiteHeader />
          <main className="py-14">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
