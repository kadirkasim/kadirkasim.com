import Link from "next/link";
import { getProduct, getSite, productBasePath } from "@/lib/content";

export default function HomePage() {
  const site = getSite();
  const products = [
    getProduct("kanvra"),
    getProduct("solitaire-friends"),
    getProduct("hue-stack"),
  ];

  return (
    <div>
      <h1 className="text-[2.75rem] font-normal leading-[1.05] tracking-tight md:text-6xl">
        {site.title}
      </h1>
      <p className="mt-6 max-w-md text-xl leading-snug text-muted">{site.tagline}</p>
      <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">{site.body}</p>

      <ol className="mt-20 border-t border-line">
        {products.map((product, index) => {
          const href = productBasePath(product);
          const kind = product.kind === "game" ? "Game" : "App";
          return (
            <li key={product.slug} className="border-b border-line">
              <Link
                href={href}
                className="group grid gap-3 py-8 no-underline md:grid-cols-[3rem_1fr_auto] md:items-baseline"
              >
                <span className="font-sans text-xs tabular-nums text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-2xl text-paper group-hover:text-gold md:text-3xl">
                    {product.title}
                  </span>
                  <span className="mt-2 block max-w-md text-muted">{product.tagline}</span>
                </span>
                <span className="font-sans text-xs uppercase tracking-[0.14em] text-muted">
                  {kind}
                  {product.storeUrl ? " · App Store" : ""}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>

      <p className="mt-16 max-w-md text-muted">
        Games, apps, and sites — from the first idea through the listing. Write to{" "}
        <a href={`mailto:${site.supportEmail}`} className="text-gold no-underline hover:text-paper">
          {site.supportEmail}
        </a>
        .
      </p>
    </div>
  );
}
