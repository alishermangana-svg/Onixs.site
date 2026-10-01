import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkDetailPage } from "@/components/WorkDetailPage";
import { getWorkBySlug, workItems } from "@/content/work";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workItems.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return { title: "Case study" };
  return {
    title: `${item.brand} — Case Study`,
    description: item.result,
    alternates: { canonical: `/work/${item.slug}` },
    openGraph: {
      title: `${item.brand} | Onixs case study`,
      description: item.resultLine,
      url: `${site.url}/work/${item.slug}`,
      images: [{ url: item.image }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!getWorkBySlug(slug)) notFound();
  return <WorkDetailPage slug={slug} />;
}
