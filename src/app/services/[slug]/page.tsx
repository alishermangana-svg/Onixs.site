import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getServiceBySlug, services } from "@/content/services";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service" };
  return {
    title: `${service.title} | Onixs London`,
    description: service.detail,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Onixs`,
      description: service.detail,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.detail,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: "407 Chiswick High Rd.",
        addressLocality: "London",
        postalCode: "W4 4AR",
        addressCountry: "GB",
      },
    },
    areaServed: "Worldwide",
    url: `${site.url}/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailPage slug={slug} />
    </>
  );
}
