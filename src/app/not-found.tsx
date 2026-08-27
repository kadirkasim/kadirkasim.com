import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-normal">Page not found</h1>
      <p className="text-muted">
        <Link href="/" className="text-gold">
          Back to headquarters
        </Link>
      </p>
    </div>
  );
}
