"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getWorkBySlug, workItems } from "@/content/work";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactModal } from "@/components/ui/ContactModal";
import { SiteFooter } from "@/components/SiteFooter";

export function WorkDetailPage({ slug }: { slug: string }) {
  const item = getWorkBySlug(slug)!;
  const [contactOpen, setContactOpen] = useState(false);
  const idx = workItems.findIndex((w) => w.slug === slug);
  const next = workItems[(idx + 1) % workItems.length];

  return (
    <>
      <SiteHeader onContactOpen={() => setContactOpen(true)} solid />
      <main className="bg-white">
        <section className="border-b border-border-light py-14 md:py-20">
          <div className="container-x max-w-3xl">
            <p className="text-sm font-semibold text-muted">
              <Link href="/#work" className="hover:text-brand">
                Work
              </Link>
              <span className="mx-2 text-border-light">/</span>
              {item.brand}
            </p>
            <h1 className="h-section mt-3 text-navy-ink">{item.brand}</h1>
            <p className="mt-4 text-lg font-medium text-brand">{item.resultLine}</p>
            <p className="mt-4 text-[17px] leading-relaxed text-body-light">
              {item.result}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="btn-primary"
                onClick={() => setContactOpen(true)}
              >
                Start a similar project →
              </button>
              {item.liveUrl ? (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Live site ↗
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container-x">
            <div className="grid gap-4 md:grid-cols-3">
              {(item.gallery.length ? item.gallery : [item.image]).map((src, n) => (
                <div
                  key={src}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-light bg-mist"
                >
                  <Image
                    src={src}
                    alt={`${item.brand} case study screenshot ${n + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                    priority={n === 0}
                  />
                </div>
              ))}
            </div>

            <div className="mx-auto mt-14 grid max-w-3xl gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-lg font-bold text-navy-ink">Challenge</h2>
                <p className="mt-3 text-sm leading-relaxed text-body-light">
                  {item.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold text-navy-ink">Solution</h2>
                <p className="mt-3 text-sm leading-relaxed text-body-light">
                  {item.solution}
                </p>
              </div>
            </div>

            <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-2">
              {item.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-mist px-3 py-1.5 text-xs font-semibold text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-between gap-4 border-t border-border-light pt-8">
              <Link href="/#work" className="text-sm font-semibold text-muted hover:text-brand">
                ← Back to work
              </Link>
              <Link
                href={`/work/${next.slug}`}
                className="text-sm font-semibold text-brand hover:underline"
              >
                Next: {next.brand} →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
