import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { faqs } from "@/content/faq";
import { META_DESCRIPTION, META_TITLE, site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: site.url,
    type: "website",
    locale: "en_GB",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <HomePage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
