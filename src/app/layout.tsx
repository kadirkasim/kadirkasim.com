import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Outfit } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getSite } from "@/lib/content";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

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
      <body
        className={`${serif.variable} ${serif.className} ${sans.variable} min-h-screen bg-bg text-paper antialiased`}
      >
        <div className="mx-auto w-[min(48rem,calc(100%-2.5rem))]">
          <SiteHeader />
          <main className="py-16">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
