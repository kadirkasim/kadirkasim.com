import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ProductGallery } from "@/components/ProductGallery";
import { Reveal } from "@/components/Reveal";
import { StoreLink } from "@/components/StoreLink";
import type { ProductContent } from "@/lib/content";
import { listProducts, productBasePath } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import {
  adsPrivacyBody,
  advertisingUsedLine,
  analyticsLine,
  getUi,
  kindLabel,
} from "@/lib/ui";

function Back({ href = "/", label }: { href?: string; label: string }) {
  return (
    <Link href={href} className="text-[13px] text-faint no-underline transition-colors hover:text-ink">
      ← {label}
    </Link>
  );
}

export function ProductLanding({ product, locale }: { product: ProductContent; locale: Locale }) {
  const ui = getUi(locale);
  const base = productBasePath(product);
  const kind = kindLabel(locale, product.kind);
  const shots = product.screenshots.length
    ? product.screenshots
    : product.cover
      ? [product.cover]
      : [];
  const products = listProducts(locale);
  const index = products.findIndex((item) => item.slug === product.slug);
  const next = products[(index + 1) % Math.max(products.length, 1)];

  return (
    <article>
      <section className="border-b border-line pt-28 md:pt-32">
        <Container className="pb-16 md:pb-24">
          <Back label={ui.home} />
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
                    <StoreLink href={product.storeUrl} product={product.slug} className="text-link">
                      {ui.appStore}
                    </StoreLink>
                  ) : null}
                  <Link href={`${base}/support`} className="text-link">
                    {ui.support}
                  </Link>
                  <Link href={`${base}/privacy`} className="text-link">
                    {ui.privacy}
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
                <p className="eyebrow">{ui.problem}</p>
                <p className="mt-4 text-[1.05rem] leading-[1.8] text-muted">{product.problem}</p>
              </Reveal>
            ) : null}
            {product.solution ? (
              <Reveal delay={80}>
                <p className="eyebrow">{ui.approach}</p>
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
              <p className="eyebrow">{ui.technologies}</p>
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

      {shots.length ? <ProductGallery title={product.title} shots={shots} ui={ui} /> : null}

      {next && next.slug !== product.slug ? (
        <section className="py-20 md:py-28">
          <Container>
            <Reveal>
              <p className="eyebrow">{ui.next}</p>
              <Link href={productBasePath(next)} className="group mt-4 flex items-center gap-4 no-underline">
                {next.icon ? (
                  <Image
                    src={next.icon}
                    alt={`${next.title} icon`}
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

export function SupportPage({
  product,
  email,
  locale,
}: {
  product: ProductContent;
  email: string;
  locale: Locale;
}) {
  const ui = getUi(locale);
  const base = productBasePath(product);
  const partner = product.adNetwork || (locale === "tr" ? "bir reklam ortağı" : "an advertising partner");
  return (
    <DocShell product={product} eyebrow={ui.support}>
      <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.8] text-muted">
        <p>
          {locale === "tr" ? "E-posta" : "Email"}{" "}
          <a href={`mailto:${email}`} className="text-link">
            {email}
          </a>
          . {ui.supportLead}
        </p>
        {product.onDevice ? (
          <p>
            {product.title}{" "}
            {product.kind === "game" ? ui.supportDeviceGame : ui.supportDeviceApp}
          </p>
        ) : null}
        {product.ads ? (
          <p>
            {product.title} {ui.supportAdsPrefix} {partner}. {ui.supportAdsSuffix}
          </p>
        ) : null}
        <p>
          <Link href={`${base}/privacy`} className="text-link">
            {ui.privacyPolicy}
          </Link>
        </p>
      </div>
    </DocShell>
  );
}

export function PrivacyPage({ product, locale }: { product: ProductContent; locale: Locale }) {
  const ui = getUi(locale);
  return (
    <DocShell product={product} eyebrow={`${ui.privacy} · ${product.privacyUpdated}`}>
      <div className="mt-8 space-y-8 text-[1.05rem] leading-[1.8] text-muted">
        <section>
          <h2 className="text-[13px] uppercase tracking-[0.2em] text-faint">{ui.whatThisIs}</h2>
          <p className="mt-4">{product.description}</p>
        </section>
        <section>
          <h2 className="text-[13px] uppercase tracking-[0.2em] text-faint">{ui.data}</h2>
          {product.onDevice ? (
            <p className="mt-4">
              {product.kind === "game" ? ui.dataGame : ui.dataApp} {product.title} {ui.dataNoAccount}
            </p>
          ) : (
            <p className="mt-4">{ui.dataFallback}</p>
          )}
        </section>
        {product.ads ? (
          <section>
            <h2 className="text-[13px] uppercase tracking-[0.2em] text-faint">{ui.advertising}</h2>
            <p className="mt-4">
              {adsPrivacyBody(locale, {
                adNetwork: product.adNetwork,
                adPartners: product.adPartners,
                adPublisherId: product.adPublisherId,
                attPrompt: product.attPrompt,
              })}
            </p>
            {product.attPrompt ? <p className="mt-4">{ui.attCopy}</p> : null}
            <p className="mt-4">
              {product.adPrivacyPolicies.map((policy) => (
                <span key={policy.url}>
                  {locale === "tr" ? `${policy.name} gizlilik politikası:` : `${policy.name}’s privacy policy:`}{" "}
                  <a href={policy.url} className="text-link">
                    {policy.url.replace(/^https:\/\//, "")}
                  </a>
                  .{" "}
                </span>
              ))}
              {ui.authorizedSellers}{" "}
              <a href="/app-ads.txt" className="text-link">
                kadirkasim.com/app-ads.txt
              </a>
              .
            </p>
          </section>
        ) : null}
        <section>
          <h2 className="text-[13px] uppercase tracking-[0.2em] text-faint">{ui.whatWeState}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              {advertisingUsedLine(locale, {
                ads: product.ads,
                adUsedLabel: product.adUsedLabel,
                adNetwork: product.adNetwork,
              })}
            </li>
            <li>
              {analyticsLine(locale, {
                analytics: product.analytics,
                ads: product.ads,
                adPartners: Boolean(product.adPartners),
              })}
            </li>
            <li>{product.iap ? ui.iapMay : ui.noIap}</li>
          </ul>
          {product.body ? <p className="mt-4">{product.body}</p> : null}
        </section>
      </div>
    </DocShell>
  );
}
