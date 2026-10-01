import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for Onixs digital studio.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="bg-white py-16 md:py-24">
      <div className="container-x max-w-3xl">
        <p className="text-sm font-semibold text-muted">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span className="mx-2">/</span>
          Terms
        </p>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy-ink">
          Terms of use
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-body-light">
          By using {site.url} or engaging Onixs for services, you agree that
          project scope, fees, and timelines are defined in a written proposal
          or statement of work after a discovery call. Website content is for
          general information and does not form a contract until countersigned.
          Contact {site.email} for questions. Onixs, {site.address}.
        </p>
        <p className="mt-6 text-sm text-muted">Last updated: September 2026</p>
      </div>
    </main>
  );
}
