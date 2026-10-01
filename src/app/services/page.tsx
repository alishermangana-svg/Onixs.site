import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website, app, software, SEO, digital marketing, ads, graphic design, and VA services from Onixs — one London studio.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Onixs Services — Web, App, AI & Growth",
    description: site.positioning,
    url: `${site.url}/services`,
  },
};

export default function Page() {
  return <ServicesPage />;
}
