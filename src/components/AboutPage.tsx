"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { processSteps, whyCards } from "@/content/services";
import { site } from "@/content/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactModal } from "@/components/ui/ContactModal";

const studioVisuals = [
  {
    src: "/images/About-us-2-768x512.webp",
    alt: "Onixs studio collaboration",
    label: "Chiswick studio",
  },
  {
    src: "/images/project-1-1024x645.webp",
    alt: "Product design session",
    label: "Design systems",
  },
  {
    src: "/work/pocket-guide-ai.webp",
    alt: "Shipped product screenshot",
    label: "Shipped builds",
  },
  {
    src: "/hero/hero-visual.webp",
    alt: "Delivery dashboard visual",
    label: "Delivery rhythm",
  },
] as const;

export function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <SiteHeader onContactOpen={() => setContactOpen(true)} solid />

      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-border-light bg-[#f7faf9] pt-28 pb-12 md:pt-32 md:pb-16">
          <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0">
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-brand">
                About Onixs
              </p>
              <h1 className="mt-3 text-[clamp(1.9rem,4.5vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-navy-ink">
                A clear process, and more than a vendor.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-body-light">
                We design, ship, and grow digital products as one team, with the
                same standards from first brief to long-term support — from our
                Chiswick studio in London.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setContactOpen(true)}
                >
                  Book a call →
                </button>
                <Link href="/contact" className="btn-ghost">
                  Contact studio
                </Link>
              </div>
              <p className="mt-5 text-sm text-muted">
                {site.streetAddress} · {site.studioLabel}
              </p>
            </div>

            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[24px] border border-border-light shadow-[0_24px_60px_rgba(11,59,54,0.12)] lg:mx-0">
              <Image
                src="/images/About-us-2-768x512.webp"
                alt="Onixs London digital studio"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 560px"
                quality={85}
              />
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12 md:py-16">
          <div className="container-x">
            <h2 className="h-section max-w-2xl text-navy-ink">How we work</h2>
            <p className="mt-3 max-w-xl text-muted">
              Five clear stages from discovery to ongoing support — so you always
              know what happens next.
            </p>
            <div className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((s) => (
                <article
                  key={s.id}
                  className="h-full rounded-[18px] border border-border-light bg-card p-6"
                >
                  <span className="font-display text-[13px] font-bold text-brand">
                    {s.id}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="border-y border-border-light bg-[#f7faf9] py-12 md:py-16">
          <div className="container-x">
            <h2 className="h-section max-w-2xl text-navy-ink">
              Why brands stay with Onixs
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {whyCards.map((c) => (
                <article
                  key={c.title}
                  className="rounded-[20px] border border-border-light bg-white p-7 shadow-[0_12px_40px_rgba(14,42,92,0.06)]"
                >
                  <h3 className="text-xl font-bold text-navy-ink">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body-light">
                    {c.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Visual strip */}
        <section className="py-12 md:py-16">
          <div className="container-x">
            <h2 className="h-section max-w-2xl text-navy-ink">Studio in pictures</h2>
            <p className="mt-3 max-w-xl text-muted">
              From brief to build — the environments and products behind our work.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {studioVisuals.map((v) => (
                <figure
                  key={v.src}
                  className="overflow-hidden rounded-[20px] border border-border-light bg-white"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={v.src}
                      alt={v.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 25vw"
                      quality={75}
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm font-semibold text-navy-ink">
                    {v.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-14 md:pb-20">
          <div className="container-x">
            <div className="rounded-[24px] bg-[#041f1c] px-6 py-10 text-center sm:px-10 md:py-14">
              <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold tracking-tight text-white">
                Ready to work with one accountable studio?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-white/70">
                Tell us what you are building. We will reply with the practical
                next step — usually within a day.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-[#062e2a]"
                >
                  Book a call →
                </button>
                <Link
                  href="/work/pocket-guide-ai"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-bold text-white"
                >
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
