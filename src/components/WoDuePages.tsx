import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import type { Locale } from "@/lib/locale";
import { getUi } from "@/lib/ui";
import type { WoDueDoc, WoDueSection } from "@/lib/wodue";
import { wodueBasePath, wodueIcon } from "@/lib/wodue";

function Back({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-[13px] text-faint no-underline transition-colors hover:text-ink">
      ← {label}
    </Link>
  );
}

function Rich({ text, email }: { text: string; email: string }) {
  const parts = text.split("{email}");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 ? (
            <a href={`mailto:${email}`} className="text-link break-words">
              {email}
            </a>
          ) : null}
        </span>
      ))}
    </>
  );
}

function SectionBody({ section, email }: { section: WoDueSection; email: string }) {
  return (
    <>
      {section.paragraphs.map((p) => (
        <p key={p} className="mt-4">
          <Rich text={p} email={email} />
        </p>
      ))}
      {section.items.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-5">
          {section.items.map((item) => (
            <li key={item}>
              <Rich text={item} email={email} />
            </li>
          ))}
        </ul>
      ) : null}
      {section.after.map((p) => (
        <p key={p} className="mt-4">
          <Rich text={p} email={email} />
        </p>
      ))}
    </>
  );
}

export function WoDueLanding({ doc, email, locale }: { doc: WoDueDoc; email: string; locale: Locale }) {
  const ui = getUi(locale);
  return (
    <article>
      <section className="border-b border-line pt-28 md:pt-32">
        <Container className="pb-16 md:pb-24">
          <Back href="/" label={ui.home} />
          <Reveal>
            <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
              <Image
                src={wodueIcon}
                alt={`${doc.title} icon`}
                width={96}
                height={96}
                priority
                className="h-20 w-20 rounded-[1.35rem] border border-white/10 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)] sm:h-24 sm:w-24"
              />
              <div className="min-w-0 flex-1">
                {doc.eyebrow ? <p className="eyebrow">{doc.eyebrow}</p> : null}
                <h1 className="display mt-4 max-w-[14ch] text-[clamp(2.6rem,7vw,5rem)]">{doc.title}</h1>
                <p className="mt-5 max-w-2xl text-[1.15rem] leading-relaxed text-muted sm:text-[1.25rem]">
                  {doc.tagline}
                </p>
                <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">{doc.description}</p>
                {doc.note ? (
                  <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">{doc.note}</p>
                ) : null}
                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
                  <Link href={`${wodueBasePath}/support`} className="text-link">
                    {ui.support}
                  </Link>
                  <Link href={`${wodueBasePath}/privacy`} className="text-link">
                    {ui.privacy}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {doc.sections.length ? (
        <section className="py-20 md:py-28">
          <Container className="max-w-[46rem] space-y-14">
            {doc.sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 60}>
                <p className="eyebrow">{section.title}</p>
                <div className="text-[1.05rem] leading-[1.85] text-muted">
                  <SectionBody section={section} email={email} />
                </div>
              </Reveal>
            ))}
          </Container>
        </section>
      ) : null}
    </article>
  );
}

function WoDueDocShell({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  return (
    <article>
      <Container className="max-w-[42rem] py-28 md:py-32">
        <Back href={wodueBasePath} label={title} />
        <p className="eyebrow mt-12">{eyebrow}</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,6vw,4rem)]">{title}</h1>
        {children}
      </Container>
    </article>
  );
}

function DocSections({ doc, email }: { doc: WoDueDoc; email: string }) {
  return (
    <>
      {doc.sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-[13px] uppercase tracking-[0.2em] text-faint">{section.title}</h2>
          <SectionBody section={section} email={email} />
        </section>
      ))}
    </>
  );
}

export function WoDuePrivacy({ doc, email, locale }: { doc: WoDueDoc; email: string; locale: Locale }) {
  const ui = getUi(locale);
  return (
    <WoDueDocShell title={doc.title} eyebrow={doc.updated ? `${ui.privacy} · ${doc.updated}` : ui.privacy}>
      <div className="mt-8 space-y-8 text-[1.05rem] leading-[1.8] text-muted">
        {doc.lead ? (
          <p>
            <Rich text={doc.lead} email={email} />
          </p>
        ) : null}
        <DocSections doc={doc} email={email} />
        <p>
          <Link href={`${wodueBasePath}/support`} className="text-link">
            {ui.support}
          </Link>
        </p>
      </div>
    </WoDueDocShell>
  );
}

export function WoDueSupport({ doc, email, locale }: { doc: WoDueDoc; email: string; locale: Locale }) {
  const ui = getUi(locale);
  return (
    <WoDueDocShell title={doc.title} eyebrow={ui.support}>
      <div className="mt-8 space-y-8 text-[1.05rem] leading-[1.8] text-muted">
        {doc.lead ? (
          <p>
            <Rich text={doc.lead} email={email} />
          </p>
        ) : null}
        {doc.notice ? <p className="rounded-2xl border border-line px-5 py-4 text-ink">{doc.notice}</p> : null}
        <DocSections doc={doc} email={email} />
        <p>
          <Link href={`${wodueBasePath}/privacy`} className="text-link">
            {ui.privacyPolicy}
          </Link>
        </p>
      </div>
    </WoDueDocShell>
  );
}
