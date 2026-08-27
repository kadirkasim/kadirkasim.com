import Link from "next/link";
import { getSite } from "@/lib/content";

export function SiteHeader() {
  const site = getSite();
  return (
    <header className="flex items-baseline justify-between border-b border-line pb-8 pt-8">
      <Link href="/" className="tracking-[0.08em] text-paper no-underline">
        {site.title}
      </Link>
      <nav className="flex gap-6 text-sm text-muted">
        <Link href="/apps/kanvra" className="text-muted no-underline hover:text-paper">
          Apps
        </Link>
        <Link href="/games/solitaire-friends" className="text-muted no-underline hover:text-paper">
          Games
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const site = getSite();
  return (
    <footer className="mt-16 border-t border-line py-8 text-sm text-muted">
      <p>{site.title}</p>
      <p>
        <a href={`mailto:${site.supportEmail}`} className="text-gold">
          {site.supportEmail}
        </a>
      </p>
    </footer>
  );
}
