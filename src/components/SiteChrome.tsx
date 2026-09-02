import Link from "next/link";
import { getSite } from "@/lib/content";

const nav = [
  { href: "/apps/kanvra", label: "Apps" },
  { href: "/games/solitaire-friends", label: "Games" },
  { href: "/#work", label: "Work" },
];

export function SiteHeader() {
  const site = getSite();
  return (
    <header className="flex items-baseline justify-between border-b border-line py-8">
      <Link
        href="/"
        className="font-sans text-[0.7rem] tracking-[0.22em] text-paper uppercase no-underline"
      >
        {site.title}
      </Link>
      <nav className="flex gap-6 font-sans text-sm text-muted">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="text-muted no-underline hover:text-paper">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const site = getSite();
  return (
    <footer className="mt-20 border-t border-line py-10 font-sans text-sm text-muted">
      <p className="tracking-[0.12em] uppercase">{site.title}</p>
      <p className="mt-2">Headquarters. Proof is what is live.</p>
      <p className="mt-3">
        <a href={`mailto:${site.supportEmail}`} className="text-gold no-underline hover:text-paper">
          {site.supportEmail}
        </a>
      </p>
    </footer>
  );
}
