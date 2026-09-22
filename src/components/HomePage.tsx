import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { HeroField } from "@/components/HeroField";
import { MagneticLink, Reveal } from "@/components/Reveal";
import {
  lines,
  listProducts,
  productBasePath,
  type ProductContent,
  type SiteContent,
} from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { getUi, kindLabel, type UiCopy } from "@/lib/ui";

export function HomePage({ site, locale }: { site: SiteContent; locale: Locale }) {
  const ui = getUi(locale);
  const products = listProducts(locale);
  const headline = lines(site.headline);
  const introTitle = lines(site.introTitle);
  const aboutTitle = lines(site.aboutTitle);
  const techLine = lines(site.techLine);

  return (
    <div>
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0 bg-void" />
        <HeroField />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.55)_70%,rgba(5,5,5,0.92)_100%)]" />

        <Container className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32">
          <p className="eyebrow">
            {site.title}
            <span aria-hidden="true" className="mx-2 text-faint">
              ·
            </span>
            {site.role}
          </p>
          <h1 className="display mt-6 max-w-[14ch] text-[clamp(2.8rem,9.5vw,6.6rem)] text-ink">
            {headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          {site.heroLead ? (
            <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-muted md:text-[1.2rem]">
              {site.heroLead}
            </p>
          ) : null}
          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticLink href="#work" className="btn-primary">
              {site.ctaPrimary}
              <span aria-hidden="true">→</span>
            </MagneticLink>
            <MagneticLink href="#contact" className="btn-ghost">
              {site.ctaSecondary}
              <span aria-hidden="true">→</span>
            </MagneticLink>
          </div>
          <p className="mt-16 text-[11px] uppercase tracking-[0.28em] text-faint">{ui.scrollExplore}</p>
        </Container>
      </section>

      <section className="border-t border-line py-24 md:py-36">
        <Container>
          <Reveal>
            <h2 className="display max-w-[16ch] text-[clamp(2.2rem,6vw,4.4rem)] text-ink">
              {introTitle.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.75] text-muted md:text-[1.15rem]">
              {site.introBody}
            </p>
          </Reveal>
        </Container>
      </section>

      <section id="work" className="scroll-mt-20 border-t border-line py-20 md:py-28">
        <Container>
          <Reveal>
            <p className="eyebrow">{ui.selected}</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.8rem)]">{site.workHeading}</h2>
            {site.workLead ? <p className="mt-4 max-w-lg text-[1.05rem] text-muted">{site.workLead}</p> : null}
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {products.map((product, index) => (
              <li key={product.slug} className="h-full">
                <Reveal delay={index * 80} className="h-full">
                  <WorkFeature product={product} locale={locale} ui={ui} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {site.builds.length ? (
        <section id="build" className="scroll-mt-20 border-t border-line py-20 md:py-28">
          <Container>
            <Reveal>
              <p className="eyebrow">{ui.focus}</p>
              <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.8rem)]">{site.buildHeading}</h2>
            </Reveal>
            <ul className="mt-12 grid items-stretch gap-4 md:grid-cols-2">
              {site.builds.map((item, index) => (
                <li key={item.label} className="h-full">
                  <Reveal delay={index * 60} className="h-full">
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-elevated p-7 transition duration-500 hover:border-white/15 hover:bg-[#111] md:p-9">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <div className="relative flex h-full flex-col">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-accent">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-faint transition-colors group-hover:border-white/20 group-hover:text-muted">
                            {item.label}
                          </span>
                        </div>
                        <h3 className="mt-6 text-[1.65rem] font-medium tracking-tight text-ink md:text-[1.85rem]">
                          {item.label}
                        </h3>
                        <p className="mt-3 text-[1.02rem] leading-relaxed text-ink/80">{item.body}</p>
                        {item.detail ? (
                          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{item.detail}</p>
                        ) : null}
                        {item.points.length ? (
                          <ul className="mt-auto space-y-2.5 border-t border-line/80 pt-5">
                            {item.points.map((point) => (
                              <li key={point} className="flex gap-3 text-[0.92rem] leading-snug text-muted">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/80" aria-hidden="true" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {site.stack.length ? (
        <section id="tech" className="scroll-mt-20 border-t border-line py-20 md:py-28">
          <Container>
            <Reveal>
              <p className="eyebrow">{ui.navStack}</p>
              <h2 className="display mt-4 max-w-[14ch] text-[clamp(2rem,5vw,3.6rem)]">
                {techLine.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
            <ul className="mt-12 flex flex-wrap gap-2">
              {site.stack.map((item, index) => (
                <Reveal key={item.name} delay={index * 25}>
                  <li className="group relative">
                    <button
                      type="button"
                      className="rounded-full border border-line bg-elevated px-4 py-2 text-[14px] font-medium text-ink/90 transition-colors hover:border-accent/40 hover:text-ink"
                    >
                      {item.name}
                    </button>
                    {item.note ? (
                      <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.6rem)] z-10 w-56 -translate-x-1/2 rounded-2xl border border-line bg-surface px-4 py-3 text-left text-[12px] leading-relaxed text-muted opacity-0 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                        {item.note}
                      </span>
                    ) : null}
                  </li>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section id="about" className="scroll-mt-20 border-t border-line py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">{ui.navAbout}</p>
            <h2 className="display mt-4 max-w-[12ch] text-[clamp(2.2rem,5vw,3.8rem)]">
              {aboutTitle.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="max-w-xl space-y-5 text-[1.05rem] leading-[1.8] text-muted">
              <p>{site.about}</p>
              {site.body ? <p>{site.body}</p> : null}
              {site.invite ? <p className="text-ink/80">{site.invite}</p> : null}
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-20 relative overflow-hidden border-t border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(59,130,246,0.14),transparent_55%)]"
        />
        <Container className="relative py-28 text-center md:py-40">
          <Reveal>
            <p className="eyebrow">{ui.navContact}</p>
            <h2 className="display mx-auto mt-5 max-w-[12ch] text-[clamp(2.8rem,8vw,5.5rem)]">
              {site.contactTitle}
            </h2>
            {site.contactLead ? (
              <p className="mx-auto mt-5 max-w-md text-[1.15rem] text-muted">{site.contactLead}</p>
            ) : null}
            <a href={`mailto:${site.supportEmail}`} className="btn-primary mt-10 inline-flex">
              {ui.getInTouch}
              <span aria-hidden="true">→</span>
            </a>
            <p className="mt-8 text-[14px] text-muted">
              <a href={`mailto:${site.supportEmail}`} className="text-link">
                {site.supportEmail}
              </a>
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}

function WorkFeature({
  product,
  locale,
  ui,
}: {
  product: ProductContent;
  locale: Locale;
  ui: UiCopy;
}) {
  const href = productBasePath(product);
  const kind = kindLabel(locale, product.kind);
  const visual = product.icon || product.cover;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-elevated p-5 no-underline transition duration-500 hover:-translate-y-0.5 hover:border-white/15 hover:bg-[#111] sm:p-6"
    >
      <div className="flex items-start gap-4">
        {visual ? (
          <Image
            src={visual}
            alt={`${product.title} icon`}
            width={64}
            height={64}
            className="h-14 w-14 shrink-0 rounded-[0.95rem] border border-white/10 shadow-[0_12px_30px_-16px_rgba(0,0,0,0.8)] transition duration-500 group-hover:scale-[1.04] sm:h-16 sm:w-16"
          />
        ) : (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[0.95rem] border border-line bg-surface text-[13px] text-faint sm:h-16 sm:w-16">
            {kind.slice(0, 1)}
          </div>
        )}
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-faint">
            {product.category || kind}
            {product.year ? ` · ${product.year}` : ""}
          </p>
          <h3 className="mt-1.5 text-[1.25rem] font-medium tracking-tight text-ink sm:text-[1.35rem]">
            {product.title}
          </h3>
        </div>
      </div>
      <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{product.tagline}</p>
      {product.technologies.length ? (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {product.technologies.slice(0, 3).map((tech) => (
            <li key={tech} className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-faint">
              {tech}
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mt-auto pt-5 text-[13px] font-medium text-ink">
        {ui.view}
        <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
      </p>
    </Link>
  );
}
