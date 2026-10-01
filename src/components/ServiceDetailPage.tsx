"use client";

import { useState } from "react";
import Link from "next/link";
import { getServiceBySlug, services } from "@/content/services";
import { site } from "@/content/site";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactModal } from "@/components/ui/ContactModal";
import { SiteFooter } from "@/components/SiteFooter";
import { cn } from "@/lib/cn";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug)!;
  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const idx = services.findIndex((s) => s.slug === slug);
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];
  const related = service.related
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <SiteHeader onContactOpen={() => setContactOpen(true)} solid />

      <main className="bg-white">
        {/* HERO */}
        <section className="border-b border-border-light py-16 md:py-24">
          <div className="container-x">
            <p className="text-sm font-semibold text-muted">
              <Link href="/services" className="hover:text-brand">
                Services
              </Link>
              <span className="mx-2 text-border-light">/</span>
              {service.title}
            </p>
            <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
              <div>
                <p className="mt-3 text-sm font-semibold text-brand">
                  {service.group}
                </p>
                <h1 className="h-section mt-3 max-w-3xl text-navy-ink">
                  {service.title}
                </h1>
                <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-body-light">
                  {service.detail}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => setContactOpen(true)}
                  >
                    Start this project →
                  </button>
                  <Link href="/services" className="btn-ghost">
                    All services
                  </Link>
                  <Link href="/#work" className="btn-ghost">
                    See our work ↗
                  </Link>
                </div>
              </div>
              <div
                className={cn(
                  "rounded-[24px] bg-gradient-to-br p-7 text-white shadow-[0_24px_60px_rgba(11,59,54,0.18)] md:p-8",
                  service.gradient,
                )}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                  At a glance
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-white/95">
                  {service.text}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {service.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex gap-2 text-sm leading-snug text-white/90"
                    >
                      <span className="mt-0.5 text-white/70" aria-hidden>
                        ✓
                      </span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="py-14 md:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-ink md:text-3xl">
                What this service actually covers
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-body-light">
                {service.overview}
              </p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-muted">
                Ideal for
              </p>
              <ul className="mt-4 space-y-3">
                {service.idealFor.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-border-light bg-card px-5 py-4 text-[15px] leading-relaxed text-navy-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* INCLUDES */}
        <section className="border-y border-border-light bg-[#f7faf9] py-14 md:py-20">
          <div className="container-x">
            <h2 className="mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-navy-ink md:text-3xl">
              Deliverables you can hold us to
            </h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.includes.map((item, i) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-border-light bg-white p-5"
                >
                  <span className="shrink-0 text-sm font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed text-navy-ink">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {service.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border-light bg-white px-3 py-1.5 text-xs font-semibold text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-14 md:py-20">
          <div className="container-x">
            <h2 className="mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-navy-ink md:text-3xl">
              A clear path from brief to results
            </h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, i) => (
                <li
                  key={step.title}
                  className="relative rounded-2xl border border-border-light bg-card p-6"
                >
                  <span className="text-xs font-bold tracking-[0.14em] text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-navy-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body-light">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border-light bg-[#f7faf9] py-14 md:py-20">
          <div className="container-x max-w-3xl">
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-ink md:text-3xl">
              Questions about {service.title}
            </h2>
            <div className="mt-8 divide-y divide-border-light rounded-2xl border border-border-light bg-white">
              {service.faqs.map((faq, i) => {
                const open = openFaq === i;
                return (
                  <div key={faq.q}>
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left md:px-6"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : i)}
                    >
                      <span className="text-[15px] font-bold text-navy-ink">
                        {faq.q}
                      </span>
                      <span
                        className="mt-0.5 shrink-0 text-brand"
                        aria-hidden
                      >
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open ? (
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-body-light md:px-6">
                        {faq.a}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* RELATED */}
        {related.length > 0 ? (
          <section className="py-14 md:py-20">
            <div className="container-x">
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-ink md:text-3xl">
                Related services
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group rounded-2xl border border-border-light bg-card p-6 transition hover:-translate-y-1 hover:border-brand/40"
                  >
                    <p className="text-xs font-bold text-brand">{s.id}</p>
                    <h3 className="mt-2 text-lg font-bold text-navy-ink group-hover:text-brand">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body-light">
                      {s.text}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* CTA */}
        <section className="pb-16 md:pb-24">
          <div className="container-x">
            <div
              className={cn(
                "rounded-[28px] bg-gradient-to-br px-7 py-10 text-white md:px-12 md:py-14",
                service.gradient,
              )}
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/70">
                Ready when you are
              </p>
              <h2 className="mt-3 max-w-xl text-2xl font-extrabold tracking-tight md:text-3xl">
                Ready to start {service.title}?
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/90">
                Share your goals and constraints. We will map a clear scope and
                next step. London studio · remote-ready · one accountable team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-navy-ink transition hover:-translate-y-0.5"
                >
                  Book a call →
                </button>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(
                    `Enquiry: ${service.title}`,
                  )}`}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/40 px-7 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Email {site.email}
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border-light pt-8">
              <Link
                href={`/services/${prev.slug}`}
                className="text-sm font-semibold text-muted hover:text-brand"
              >
                ← {prev.title}
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold text-muted hover:text-brand"
              >
                All services
              </Link>
              <Link
                href={`/services/${next.slug}`}
                className="text-sm font-semibold text-brand hover:underline"
              >
                {next.title} →
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
