import { getProduct, getSite, productBasePath } from "@/lib/content";
import { absoluteUrl, siteName, siteOrigin } from "@/lib/seo";

export function personJsonLd() {
  const site = getSite("en");
  const products = ["kanvra", "solitaire-friends"].map((slug) => getProduct(slug, "en"));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    url: siteOrigin,
    jobTitle: site.role,
    email: site.supportEmail,
    description: site.tagline,
    sameAs: products.map((product) => product.storeUrl).filter(Boolean),
  };
}

export function websiteJsonLd() {
  const site = getSite("en");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteOrigin,
    description: site.tagline,
    publisher: {
      "@type": "Person",
      name: siteName,
      url: siteOrigin,
    },
  };
}

export function softwareJsonLd(slug: "kanvra" | "solitaire-friends") {
  const product = getProduct(slug, "en");
  const path = productBasePath(product);
  const isGame = product.kind === "game";

  return {
    "@context": "https://schema.org",
    "@type": isGame ? "VideoGame" : "SoftwareApplication",
    name: product.title,
    description: product.description,
    url: absoluteUrl(path),
    image: absoluteUrl(product.icon || product.cover),
    applicationCategory: isGame ? "GameApplication" : "ProductivityApplication",
    operatingSystem: "iOS",
    author: {
      "@type": "Person",
      name: siteName,
      url: siteOrigin,
    },
    offers: product.storeUrl
      ? {
          "@type": "Offer",
          url: product.storeUrl,
          price: "0",
          priceCurrency: "USD",
        }
      : undefined,
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload.length === 1 ? payload[0] : payload),
      }}
    />
  );
}
