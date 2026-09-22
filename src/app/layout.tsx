import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getSite, listProducts, productBasePath } from "@/lib/content";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
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
    metadataBase: new URL("https://kadirkasim.com"),
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const site = getSite();
  const products = listProducts().map((product) => ({
    title: product.title,
    href: productBasePath(product),
  }));

  return (
    <html lang="en">
      <body className={`${sans.variable} min-h-screen bg-void font-sans text-ink antialiased`}>
        <a
          href="#content"
          className="absolute left-4 top-4 z-[80] -translate-y-16 rounded-full bg-elevated px-4 py-2 text-sm text-ink focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader title={site.title} status={site.status} email={site.supportEmail} />
        <main id="content">{children}</main>
        <SiteFooter
          title={site.title}
          tagline={site.tagline}
          email={site.supportEmail}
          products={products}
        />
      </body>
    </html>
  );
}
