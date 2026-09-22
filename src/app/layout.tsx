import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { JsonLd, personJsonLd, websiteJsonLd } from "@/components/JsonLd";
import { PostHogProvider } from "@/components/PostHogProvider";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getSite, listProducts, productBasePath } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { getUi } from "@/lib/ui";
import "./globals.css";

const sans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const site = getSite(locale);
  return {
    title: {
      default: site.title,
      template: `%s — ${site.title}`,
    },
    description: site.tagline,
    metadataBase: new URL("https://kadirkasim.com"),
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.title,
    },
    twitter: {
      card: "summary_large_image",
    },
    icons: {
      icon: [
        {
          url: "/brand/favicon-light-192.png",
          type: "image/png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/brand/favicon-dark-192.png",
          type: "image/png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/brand/favicon-light.png",
          sizes: "32x32",
          type: "image/png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/brand/favicon-dark.png",
          sizes: "32x32",
          type: "image/png",
          media: "(prefers-color-scheme: dark)",
        },
      ],
      apple: [{ url: "/brand/icon-apple-180.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  const site = getSite(locale);
  const ui = getUi(locale);
  const products = listProducts(locale).map((product) => ({
    title: product.title,
    href: productBasePath(product),
  }));

  return (
    <html lang={locale}>
      <body className={`${sans.variable} min-h-screen bg-void font-sans text-ink antialiased`}>
        <PostHogProvider>
          <JsonLd data={[personJsonLd(), websiteJsonLd()]} />
          <a
            href="#content"
            className="absolute left-4 top-4 z-[80] -translate-y-16 rounded-full bg-elevated px-4 py-2 text-sm text-ink focus:translate-y-0"
          >
            {ui.skip}
          </a>
          <SiteHeader
            title={site.title}
            status={site.status}
            email={site.supportEmail}
            locale={locale}
            ui={ui}
          />
          <main id="content">{children}</main>
          <SiteFooter
            title={site.title}
            tagline={site.tagline}
            email={site.supportEmail}
            products={products}
            designedWith={ui.designedWith}
            analyticsNote={site.analyticsNote}
          />
        </PostHogProvider>
      </body>
    </html>
  );
}
