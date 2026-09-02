import Link from "next/link";
import type { ProductContent } from "@/lib/content";
import { productBasePath } from "@/lib/content";

export function ProductLanding({ product }: { product: ProductContent }) {
  const base = productBasePath(product);
  return (
    <article>
      <p className="mb-8 font-sans text-xs tracking-wide text-muted">
        <Link href="/" className="text-muted">
          Home
        </Link>
        {" / "}
        {product.kind === "game" ? "Games" : "Apps"} / {product.title}
      </p>
      <p className="mb-3 font-sans text-xs uppercase tracking-[0.16em] text-gold">
        {product.kind === "game" ? "Game" : "App"}
      </p>
      <h1 className="mb-4 text-4xl font-normal leading-tight tracking-tight md:text-5xl">
        {product.title}
      </h1>
      <p className="mb-6 text-xl text-muted">{product.tagline}</p>
      <p className="mb-8 max-w-xl leading-relaxed text-muted">{product.description}</p>
      {product.body ? <p className="mb-10 max-w-xl leading-relaxed text-muted">{product.body}</p> : null}
      <div className="mb-12 flex flex-wrap items-center gap-5">
        {product.storeUrl ? (
          <a
            href={product.storeUrl}
            className="bg-paper px-5 py-2.5 font-sans text-sm tracking-wide text-bg no-underline hover:bg-gold"
          >
            Get on the App Store
          </a>
        ) : (
          <span className="font-sans text-sm text-muted">
            App Store listing is not public on this page yet.
          </span>
        )}
        <Link href={`${base}/support`} className="text-gold">
          Support
        </Link>
        <Link href={`${base}/privacy`} className="text-gold">
          Privacy
        </Link>
      </div>
    </article>
  );
}

export function SupportPage({
  product,
  email,
}: {
  product: ProductContent;
  email: string;
}) {
  const base = productBasePath(product);
  return (
    <article>
      <p className="mb-8 font-sans text-xs tracking-wide text-muted">
        <Link href="/" className="text-muted">
          Home
        </Link>
        {" / "}
        <Link href={base} className="text-muted">
          {product.title}
        </Link>
        {" / Support"}
      </p>
      <p className="mb-3 font-sans text-xs uppercase tracking-[0.16em] text-gold">Support</p>
      <h1 className="mb-4 text-4xl font-normal">{product.title}</h1>
      <p className="mb-8 text-xl text-muted">
        Questions, bugs, or something that should work and does not.
      </p>
      <div className="space-y-4 text-muted">
        <p>
          Email{" "}
          <a href={`mailto:${email}`} className="text-gold">
            {email}
          </a>
          . Include your device, iOS version, and what you expected to happen.
        </p>
        {product.onDevice ? (
          <p>
            {product.title} keeps game or app data on your device. Reinstalling removes local data.
          </p>
        ) : null}
        {product.ads ? (
          <p>
            Version 2.0 shows ads from {product.adNetwork || "an advertising partner"}. If an ad is
            broken or inappropriate, mention {product.title} in your email.
          </p>
        ) : null}
        <p>
          <Link href={`${base}/privacy`} className="text-gold">
            Privacy policy
          </Link>
        </p>
      </div>
    </article>
  );
}

export function PrivacyPage({ product }: { product: ProductContent }) {
  const base = productBasePath(product);
  return (
    <article>
      <p className="mb-8 font-sans text-xs tracking-wide text-muted">
        <Link href="/" className="text-muted">
          Home
        </Link>
        {" / "}
        <Link href={base} className="text-muted">
          {product.title}
        </Link>
        {" / Privacy"}
      </p>
      <p className="mb-3 font-sans text-xs uppercase tracking-[0.16em] text-gold">Privacy</p>
      <h1 className="mb-4 text-4xl font-normal">{product.title}</h1>
      <p className="mb-8 text-xl text-muted">Last updated {product.privacyUpdated}.</p>
      <div className="space-y-4 text-muted">
        <h2 className="pt-4 text-lg font-normal text-paper">What this app is</h2>
        <p>{product.description}</p>
        <h2 className="pt-4 text-lg font-normal text-paper">Data</h2>
        {product.onDevice ? (
          <p>
            {product.kind === "game"
              ? "Game progress stays on your device."
              : "Tasks and settings stay on your device."}{" "}
            {product.title} does not require an account.
          </p>
        ) : (
          <p>See the product listing for how data is handled.</p>
        )}
        {product.ads ? (
          <>
            <h2 className="pt-4 text-lg font-normal text-paper">Advertising</h2>
            <p>
              This game shows ads through {product.adNetwork || "a third-party ad network"}
              {product.adPublisherId ? ` (${product.adPublisherId})` : ""}. That partner may
              collect device and advertising identifiers to serve and measure ads. We do not
              receive your game progress on our servers.
            </p>
            <p>
              Google’s privacy policy:{" "}
              <a href="https://policies.google.com/privacy" className="text-gold">
                policies.google.com/privacy
              </a>
              . Authorized sellers are listed at{" "}
              <a href="/app-ads.txt" className="text-gold">
                kadirkasim.com/app-ads.txt
              </a>
              .
            </p>
          </>
        ) : null}
        <h2 className="pt-4 text-lg font-normal text-paper">What we state here</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            {product.ads
              ? `Advertising is used${product.adNetwork ? ` (${product.adNetwork})` : ""}.`
              : "No advertising stated."}
          </li>
          <li>
            {product.analytics
              ? "Analytics may be used."
              : product.ads
                ? "No separate analytics product is stated beyond the ad partner."
                : "No identifying analytics stated."}
          </li>
          <li>
            {product.iap ? "In-app purchases may be used." : "No in-app purchases stated."}
          </li>
        </ul>
        {product.body ? <p className="pt-2">{product.body}</p> : null}
      </div>
    </article>
  );
}
