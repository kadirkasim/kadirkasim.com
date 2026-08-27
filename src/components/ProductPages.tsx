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
      <h1 className="mb-4 text-4xl font-normal leading-tight">{product.title}</h1>
      <p className="mb-6 text-xl text-muted">{product.tagline}</p>
      <p className="mb-8 text-muted">{product.description}</p>
      {product.body ? <p className="mb-10 text-muted">{product.body}</p> : null}
      <div className="mb-12 flex flex-wrap items-center gap-4">
        {product.storeUrl ? (
          <a
            href={product.storeUrl}
            className="bg-paper px-4 py-2 font-sans text-sm text-bg no-underline hover:bg-gold"
          >
            Get on the App Store
          </a>
        ) : (
          <span className="text-muted">App Store listing is not public on this page yet.</span>
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
            {product.title} keeps data on your device. Reinstalling the app removes local data.
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
            Tasks and settings stay on your device. {product.title} does not require an account
            for this listing.
          </p>
        ) : (
          <p>See the product listing for how data is handled. This page does not invent SDKs.</p>
        )}
        <h2 className="pt-4 text-lg font-normal text-paper">What we state here</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>{product.ads ? "Advertising may be used." : "No advertising stated."}</li>
          <li>
            {product.analytics
              ? "Analytics may be used."
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
