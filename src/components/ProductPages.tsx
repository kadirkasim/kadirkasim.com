import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ProductGallery } from "@/components/ProductGallery";
import { Reveal } from "@/components/Reveal";
import type { ProductContent } from "@/lib/content";
import { listProducts, productBasePath } from "@/lib/content";

function Back({ href = "/", label = "Home" }: { href?: string; label?: string }) {
  return (
    <Link href={href} className="text-[13px] text-faint no-underline transition-colors hover:text-ink">
      ← {label}
    </Link>
  );
}

export function ProductLanding({ product }: { product: ProductContent }) {
  const base = productBasePath(product);
  const kind = product.kind === "game" ? "Game" : "App";
  const shots = product.screenshots.length
    ? product.screenshots
    : product.cover
      ? [product.cover]
      : [];
  const products = listProducts();
  const index = products.findIndex((item) => item.slug === product.slug);
  const next = products[(index + 1) % Math.max(products.length, 1)];

  return (
    <article>
      <section className="border-b border-line pt-28 md:pt-32">
        <Container className="pb-16 md:pb-24">
          <Back />
          <Reveal>
            <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
              {product.icon ? (
                <Image
                  src={product.icon}
                  alt={`${product.title} icon`}
                  width={96}
                  height={96}
                  priority
                  className="h-20 w-20 rounded-[1.35rem] border border-white/10 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)] sm:h-24 sm:w-24"
                />
              ) : null}
              <div className="min-w-0 flex-1">
                <p className="eyebrow">
                  {product.category || kind}
                  {product.year ? ` · ${product.year}` : ""}
                </p>
                <h1 className="display mt-4 max-w-[14ch] text-[clamp(2.6rem,7vw,5rem)]">{product.title}</h1>
                <p className="mt-5 max-w-2xl text-[1.15rem] leading-relaxed text-muted sm:text-[1.25rem]">
                  {product.tagline}
                </p>
                <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">{product.description}</p>
                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
                  {product.storeUrl ? (
                    <a href={product.storeUrl} className="text-link" rel="noreferrer" target="_blank">
                      App Store
                    </a>
                  ) : null}
                  <Link href={`${base}/support`} className="text-link">
                    Support
                  </Link>
                  <Link href={`${base}/privacy`} className="text-link">
                    Privacy
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {product.problem || product.solution ? (
        <section className="border-b border-line py-20 md:py-28">
          <Container className="grid gap-12 md:grid-cols-2 md:gap-16">
            {product.problem ? (
              <Reveal>
                <p className="eyebrow">Problem</p>
                <p className="mt-4 text-[1.05rem] leading-[1.8] text-muted">{product.problem}</p>
              </Reveal>
            ) : null}
            {product.solution ? (
              <Reveal delay={80}>
                <p className="eyebrow">Approach</p>
                <p className="mt-4 text-[1.05rem] leading-[1.8] text-muted">{product.solution}</p>
              </Reveal>
            ) : null}
          </Container>
        </section>
      ) : null}

      {product.sections.length ? (
        <section className="border-b border-line py-20 md:py-28">
          <Container className="max-w-[46rem] space-y-14">
            {product.sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 60}>
                <p className="eyebrow">{section.title}</p>
                <p className="mt-4 text-[1.05rem] leading-[1.85] text-muted">{section.body}</p>
              </Reveal>
            ))}
          </Container>
        </section>
      ) : null}

      {product.technologies.length ? (
        <section className="border-b border-line py-16 md:py-20">
          <Container>
            <Reveal>
              <p className="eyebrow">Technologies</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {product.technologies.map((tech) => (
                  <li key={tech} className="rounded-full border border-line px-4 py-2 text-[14px] text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>
      ) : null}

      {shots.length ? <ProductGallery title={product.title} shots={shots} /> : null}

      {next && next.slug !== product.slug ? (
        <section className="py-20 md:py-28">
          <Container>
            <Reveal>
              <p className="eyebrow">Next</p>
              <Link href={productBasePath(next)} className="group mt-4 flex items-center gap-4 no-underline">
                {next.icon ? (
                  <Image
                    src={next.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-[0.85rem] border border-white/10"
                  />
                ) : null}
                <h2 className="display text-[clamp(2rem,5vw,3.2rem)] text-ink transition-colors group-hover:text-muted">
                  {next.title}
                  <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
                </h2>
              </Link>
            </Reveal>
          </Container>
        </section>
      ) : null}
    </article>
  );
}

function DocShell({
  product,
  eyebrow,
  children,
}: {
  product: ProductContent;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <article>
      <Container className="max-w-[42rem] py-28 md:py-32">
        <Back href={productBasePath(product)} label={product.title} />
        <p className="eyebrow mt-12">{eyebrow}</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,6vw,4rem)]">{product.title}</h1>
        {children}
      </Container>
    </article>
  );
}

export function SupportPage({ product, email }: { product: ProductContent; email: string }) {
  const base = productBasePath(product);
  return (
    <DocShell product={product} eyebrow="Support">
      <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.8] text-muted">
        <p>
          Email{" "}
          <a href={`mailto:${email}`} className="text-link">
            {email}
          </a>
          . Include your device, iOS version, and what you expected to happen.
        </p>
        {product.onDevice ? (
          <p>
            {product.title} keeps {product.kind === "game" ? "game" : "app"} data on your device.
            Reinstalling removes local data.
          </p>
        ) : null}
        {product.ads ? (
          <p>
            {product.title} shows ads from {product.adNetwork || "an advertising partner"}. If an ad
            is broken or inappropriate, mention {product.title} in your email.
          </p>
        ) : null}
        <p>
          <Link href={`${base}/privacy`} className="text-link">
            Privacy policy
          </Link>
        </p>
      </div>
    </DocShell>
  );
}

export function PrivacyPage({ product }: { product: ProductContent }) {
  return (
    <DocShell product={product} eyebrow={`Privacy · ${product.privacyUpdated}`}>
      <div className="mt-8 space-y-8 text-[1.05rem] leading-[1.8] text-muted">
        <section>
          <h2 className="text-[13px] uppercase tracking-[0.2em] text-faint">What this is</h2>
          <p className="mt-4">{product.description}</p>
        </section>
        <section>
          <h2 className="text-[13px] uppercase tracking-[0.2em] text-faint">Data</h2>
          {product.onDevice ? (
            <p className="mt-4">
              {product.kind === "game"
                ? "Game progress stays on your device."
                : "Tasks and settings stay on your device."}{" "}
              {product.title} does not require an account.
            </p>
          ) : (
            <p className="mt-4">See the product listing for how data is handled.</p>
          )}
        </section>
        {product.ads ? (
          <section>
            <h2 className="text-[13px] uppercase tracking-[0.2em] text-faint">Advertising</h2>
            <p className="mt-4">
              {product.adPartners
                ? `This game shows ads through ${product.adNetwork || "a third-party ad network"}. Current ad networks are ${product.adPartners}. Those partners may collect device and advertising identifiers${product.attPrompt ? ", including IDFA if you allow tracking," : ""} to serve${product.attPrompt ? ", personalize," : ""} and measure ads. We do not receive your game progress on our servers.`
                : `This game shows ads through ${product.adNetwork || "a third-party ad network"}${product.adPublisherId ? ` (${product.adPublisherId})` : ""}. That partner may collect device and advertising identifiers to serve and measure ads. We do not receive your game progress on our servers.`}
            </p>
            {product.attPrompt ? (
              <p className="mt-4">
                On iOS, Apple’s Allow Tracking prompt appears before ads start. If you select Ask App
                Not to Track, ads still show, but they are not personalized using your advertising
                identifier (IDFA).
              </p>
            ) : null}
            <p className="mt-4">
              {product.adPrivacyPolicies.map((policy) => (
                <span key={policy.url}>
                  {policy.name}’s privacy policy:{" "}
                  <a href={policy.url} className="text-link">
                    {policy.url.replace(/^https:\/\//, "")}
                  </a>
                  .{" "}
                </span>
              ))}
              Authorized sellers are listed at{" "}
              <a href="/app-ads.txt" className="text-link">
                kadirkasim.com/app-ads.txt
              </a>
              .
            </p>
          </section>
        ) : null}
        <section>
          <h2 className="text-[13px] uppercase tracking-[0.2em] text-faint">What we state here</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              {product.ads
                ? `Advertising is used${
                    product.adUsedLabel
                      ? ` (${product.adUsedLabel})`
                      : product.adNetwork
                        ? ` (${product.adNetwork})`
                        : ""
                  }.`
                : "No advertising stated."}
            </li>
            <li>
              {product.analytics
                ? "Analytics may be used."
                : product.ads
                  ? `No separate analytics product is stated beyond the ad ${
                      product.adPartners ? "partners" : "partner"
                    }.`
                  : "No identifying analytics stated."}
            </li>
            <li>{product.iap ? "In-app purchases may be used." : "No in-app purchases stated."}</li>
          </ul>
          {product.body ? <p className="mt-4">{product.body}</p> : null}
        </section>
      </div>
    </DocShell>
  );
}
