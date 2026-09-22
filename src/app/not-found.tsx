import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { getLocale } from "@/lib/locale";
import { getUi } from "@/lib/ui";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default async function NotFound() {
  const locale = await getLocale();
  const ui = getUi(locale);
  return (
    <div className="bg-void">
      <Container className="flex min-h-[60vh] flex-col justify-center py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">{ui.pageNotFound}</h1>
        <p className="mt-5 text-[17px] text-muted">
          <Link href="/" className="text-link no-underline hover:underline">
            {ui.backHome}
          </Link>
        </p>
      </Container>
    </div>
  );
}
