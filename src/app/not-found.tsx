import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <div className="bg-paper">
      <Container className="flex min-h-[60vh] flex-col justify-center py-24">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Page not found</h1>
        <p className="mt-5 text-[17px] text-muted">
          <Link href="/" className="text-link no-underline hover:underline">
            Back home
          </Link>
        </p>
      </Container>
    </div>
  );
}
