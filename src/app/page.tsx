import Link from "next/link";
import { getProduct, getSite, productBasePath } from "@/lib/content";

export default function HomePage() {
  const site = getSite();
  const kanvra = getProduct("kanvra");
  const solitaire = getProduct("solitaire-friends");
  const products = [kanvra, solitaire];

  return (
    <div>
      <p className="mb-4 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Headquarters</p>
      <h1 className="max-w-xl text-[2.6rem] font-normal leading-[1.12] tracking-tight md:text-5xl">
        {site.tagline}
      </h1>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{site.body}</p>
      <p className="mt-8 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-gold">
        Trust · Charisma · Labor · Creativity
      </p>

      <section className="mt-16 border-t border-line pt-12" aria-labelledby="shipped">
        <h2 id="shipped" className="mb-8 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">
          Shipped
        </h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {products.map((product) => {
            const href = productBasePath(product);
            return (
              <li key={product.slug}>
                <Link
                  href={href}
                  className="block border border-line p-6 no-underline transition-colors hover:border-gold"
                >
                  <p className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-gold">
                    {product.kind === "game" ? "Game" : "App"} · Live
                  </p>
                  <h3 className="mt-3 text-2xl font-normal text-paper">{product.title}</h3>
                  <p className="mt-2 text-muted">{product.tagline}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="work" className="mt-16 scroll-mt-8 border-t border-line pt-12">
        <h2 className="mb-4 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Work</h2>
        <p className="max-w-lg text-lg leading-relaxed text-muted">
          From marketing through production: games, apps, and sites. Partnership starts from what
          is already on the store — not a services menu.
        </p>
        <p className="mt-6">
          <a href={`mailto:${site.supportEmail}`} className="text-gold no-underline hover:text-paper">
            {site.supportEmail}
          </a>
        </p>
      </section>
    </div>
  );
}
