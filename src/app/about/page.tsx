import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { META_DESCRIPTION, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Onixs works — a London digital studio with a clear process for websites, apps, SEO and growth.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${site.name}`,
    description: META_DESCRIPTION,
    url: `${site.url}/about`,
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}
