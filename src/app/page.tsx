import Link from "next/link";
import { getProduct, getSite, productBasePath } from "@/lib/content";

export default function HomePage() {
  const site = getSite();
  const kanvra = getProduct("kanvra");
  const solitaire = getProduct("solitaire-friends");

  return (
    <div>
      <p className="mb-3 font-sans text-xs uppercase tracking-[0.16em] text-gold">Coming soon</p>
      <h1 className="mb-4 text-4xl font-normal leading-tight">{site.tagline}</h1>
      <p className="mb-12 text-lg text-muted">{site.body}</p>
      <ul className="space-y-8 border-t border-line pt-10">
        <li>
          <p className="font-sans text-xs uppercase tracking-[0.16em] text-gold">App</p>
          <Link href={productBasePath(kanvra)} className="text-2xl text-paper no-underline hover:text-gold">
            {kanvra.title}
          </Link>
          <p className="text-muted">{kanvra.tagline}</p>
        </li>
        <li>
          <p className="font-sans text-xs uppercase tracking-[0.16em] text-gold">Game</p>
          <Link
            href={productBasePath(solitaire)}
            className="text-2xl text-paper no-underline hover:text-gold"
          >
            {solitaire.title}
          </Link>
          <p className="text-muted">{solitaire.tagline}</p>
        </li>
      </ul>
    </div>
  );
}
