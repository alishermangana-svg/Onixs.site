import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Onixs digital studio.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="bg-white py-16 md:py-24">
      <div className="container-x max-w-3xl prose-sm">
        <p className="text-sm font-semibold text-muted">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span className="mx-2">/</span>
          Privacy Policy
        </p>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy-ink">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-body-light">
          Onixs (&quot;we&quot;, &quot;us&quot;) respects your privacy. When you contact us via
          forms, email ({site.email}), phone ({site.phoneDisplay}), or WhatsApp,
          we collect the details you provide to respond to your enquiry and
          deliver services. We do not sell personal data. Data is processed in
          the UK / EEA with appropriate safeguards. For requests or questions,
          email {site.email}. Address: {site.address}.
        </p>
        <p className="mt-6 text-sm text-muted">Last updated: September 2026</p>
      </div>
    </main>
  );
}
