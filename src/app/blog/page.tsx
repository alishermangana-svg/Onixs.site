import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Onixs insights on London web development, SEO, apps and growth.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="bg-white py-20 md:py-28">
      <div className="container-x max-w-2xl text-center">
        <h1 className="h-section mt-3 text-navy-ink">Insights coming soon</h1>
        <p className="mt-4 text-muted">
          We&apos;re preparing practical notes on London web development, SEO,
          app architecture, and growth. Meanwhile, explore our work.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/#work" className="btn-primary">
            See our work
          </Link>
          <Link href="/" className="btn-ghost">
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
