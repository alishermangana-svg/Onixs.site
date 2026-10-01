import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Onixs — London digital studio in Chiswick. Email admin@onixs.ai or call +44 7438 764784.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Onixs",
    description:
      "Project enquiry for web, apps, SEO and growth. Studio: Chiswick, London.",
    url: `${site.url}/contact`,
  },
};

export default function Page() {
  return <ContactPage />;
}
