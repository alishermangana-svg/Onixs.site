"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services, processSteps } from "@/content/services";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactModal } from "@/components/ui/ContactModal";
import { SiteFooter } from "@/components/SiteFooter";
import { cn } from "@/lib/cn";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x: 56 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.2, 0.7, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function ServicesPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <SiteHeader onContactOpen={() => setContactOpen(true)} solid />

      <main className="bg-white">
        <section className="border-b border-border-light py-16 md:py-24">
          <div className="container-x">
            <Reveal>
              <h1 className="h-section mt-3 max-w-3xl text-navy-ink">
                Eight services. One connected studio.
              </h1>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-body-light">
                Website, app, software, SEO, marketing, ads, design, and VA.
                delivered as one product team from London, not a patchwork of vendors.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setContactOpen(true)}
                >
                  Start your project →
                </button>
                <Link href="/#work" className="btn-ghost">
                  See our work ↗
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-x">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.04} className="h-full">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[20px] border border-border-light bg-card p-7 transition duration-400 hover:-translate-y-2 hover:border-transparent hover:text-white"
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition duration-400 group-hover:opacity-100",
                        s.gradient,
                      )}
                    />
                    <div className="relative flex h-full flex-col">
                      <span className="font-display text-xs font-bold text-brand group-hover:text-white/80">
                        {s.id}
                      </span>
                      <h2 className="mt-4 text-[19px] font-bold tracking-tight text-navy-ink group-hover:text-white">
                        {s.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-body-light group-hover:text-white/85">
                        {s.text}
                      </p>
                      <span className="mt-5 inline-flex text-sm font-semibold text-brand transition group-hover:translate-x-1 group-hover:text-white">
                        Explore →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border-light bg-mist/40 py-16 md:py-24">
          <div className="container-x">
            <Reveal>
              <h2 className="h-section mt-3 text-navy-ink">
                A clear process. No black box.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((s, i) => (
                <Reveal key={s.id} delay={i * 0.05}>
                  <article className="h-full rounded-[18px] border border-border-light bg-white p-6">
                    <span className="font-display text-[13px] font-bold text-brand">
                      {s.id}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-navy-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:pb-24">
          <div className="container-x">
            <Reveal>
              <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#0b3b36,#17b8a0_55%,#2ec4ab)] px-8 py-14 text-center md:px-16 md:py-16">
                <h2 className="h-section text-white">
                  Need more than one service?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/80">
                  Most clients run web, growth, and ops together. Tell us the outcome.
                  we&apos;ll map the right mix.
                </p>
                <button
                  type="button"
                  className="mt-8 rounded-full bg-navy-ink px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
                  onClick={() => setContactOpen(true)}
                >
                  Book a call
                </button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
