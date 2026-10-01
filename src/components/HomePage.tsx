"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import {
  leakCards,
  processSteps,
  services,
  whyCards,
} from "@/content/services";
import { stats, workItems, showcaseWebsites } from "@/content/work";
import {
  faqs,
  googleReviewsUrl,
  engagementModels,
  reviews,
} from "@/content/reviews";
import { ContactModal } from "@/components/ui/ContactModal";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { SiteFooter } from "@/components/SiteFooter";
import { cn } from "@/lib/cn";

function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "right" | "left" | "bottom";
  style?: React.CSSProperties;
}) {
  const reduce = useReducedMotion();
  const offset =
    from === "right"
      ? { x: 88, y: 0 }
      : from === "left"
        ? { x: -72, y: 0 }
        : from === "bottom"
          ? { x: 0, y: 72 }
          : { x: 0, y: 18 };

  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "text-sm",
            i < n ? "text-brand" : "text-navy-ink/15",
          )}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

const WEBSITES_PREVIEW = 6;

function WebsitesShowcase() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll
    ? showcaseWebsites
    : showcaseWebsites.slice(0, WEBSITES_PREVIEW);
  const hasMore = showcaseWebsites.length > WEBSITES_PREVIEW;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((siteItem, i) => {
          const host = siteItem.liveUrl
            .replace(/^https?:\/\//, "")
            .replace(/\/$/, "");

          return (
            <Reveal key={siteItem.brand} delay={i * 0.05} from="bottom">
              <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-border-light bg-white transition duration-300 hover:-translate-y-1 hover:border-brand/30">
                <div className="border-b border-border-light bg-[#eef2f0] px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex gap-1.5" aria-hidden>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </span>
                    <div className="min-w-0 flex-1 truncate rounded-md bg-white px-2.5 py-1 text-center text-[11px] font-medium text-muted">
                      {host}
                    </div>
                  </div>
                </div>

                <a
                  href={siteItem.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-mist"
                >
                  <Image
                    src={siteItem.image}
                    alt={`${siteItem.brand} website built by Onixs`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </a>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-ink">
                      {siteItem.brand}
                    </h3>
                    <p className="mt-0.5 text-sm text-body-light">
                      {siteItem.industry}
                    </p>
                  </div>
                  <a
                    href={siteItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm font-semibold text-brand hover:underline"
                  >
                    Visit live site ↗
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {hasMore ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="btn-primary"
          >
            {showAll ? "Show less" : "See more →"}
          </button>
        </div>
      ) : null}
    </>
  );
}

export function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        aria-hidden
      />

      <SiteHeader onContactOpen={() => setContactOpen(true)} />

      <main>
        <HeroSection onBookCall={() => setContactOpen(true)} />

        {/* SERVICES */}
        <section id="services" className="bg-white py-10 text-navy-ink md:py-14">
          <div className="container-x">
            <Reveal>
              <h2 className="h-section mt-3 max-w-3xl text-navy-ink">
                Eight services. One connected system.
              </h2>
              <p className="mt-2 text-sm font-semibold text-brand sm:text-[15px]">
                Web development, SEO &amp; ads in London
              </p>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-body-light">
                Most brands buy these from different vendors and spend their time
                stitching the seams. We run them as one London studio.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
              {services.map((s, i) => (
                <Reveal key={s.id} delay={i * 0.04} className="h-full">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[20px] border border-border-light bg-card p-7 transition duration-400 hover:-translate-y-3 hover:border-transparent"
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
                      <h3 className="mt-4 text-[19px] font-bold tracking-tight text-navy-ink group-hover:text-white">
                        {s.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-body-light group-hover:text-white/85">
                        {s.text}
                      </p>
                      <span className="mt-5 inline-flex text-sm font-semibold text-brand transition group-hover:translate-x-1 group-hover:text-white">
                        Explore {s.title} →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/services" className="btn-ghost">
                View all services →
              </Link>
            </div>
          </div>
        </section>

        {/* THE LEAK */}
        <section className="bg-white py-10 md:py-14">
          <div className="container-x">
            <Reveal>
              <h2 className="h-section mt-3 max-w-3xl text-navy-ink">
                Disconnected delivery quietly slows every brand.
              </h2>
              <p className="mt-4 max-w-2xl text-muted">
                When your website, ads, content, and creatives live in different
                hands, growth turns into chasing and copy-paste.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3 md:items-stretch">
              {leakCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.08} from="right" className="h-full">
                  <article className="flex h-full min-h-[220px] flex-col rounded-[20px] border border-border-light bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                    <span className="font-display text-sm font-bold text-brand">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-navy-ink">{c.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-body-light">
                      {c.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS + WHY (merged) */}
        <section id="about" className="bg-white py-10 md:py-14">
          <div className="container-x">
            <Reveal>
              <h2 className="h-section mt-3 max-w-3xl text-navy-ink">
                A clear process, and more than a vendor.
              </h2>
              <p className="mt-4 max-w-2xl text-body-light">
                We design, ship, and grow digital products as one team, with the
                same standards from first brief to long-term support.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((s, i) => (
                <Reveal key={s.id} delay={i * 0.05}>
                  <article className="h-full rounded-[18px] border border-border-light bg-card p-6">
                    <span className="font-display text-[13px] font-bold text-brand">
                      {s.id}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-navy-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {whyCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.05}>
                  <article className="rounded-[20px] border border-border-light bg-white p-7 shadow-[0_12px_40px_rgba(14,42,92,0.06)]">
                    <h3 className="text-xl font-bold text-navy-ink">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-body-light">
                      {c.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SELECTED WORK */}
        <section id="work" className="bg-white py-10 md:py-14">
          <div className="container-x">
            <Reveal className="mb-10 text-center">
              <h2 className="h-section mt-3 text-navy-ink">
                Real builds. Real screenshots. Real outcomes.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted">
                Six recent cases from onixs.ai: websites, apps, and products we shipped.
              </p>
            </Reveal>
            <div className="mx-auto w-full max-w-4xl space-y-6">
              {workItems.map((item, i) => (
                <Reveal
                  key={item.slug}
                  from="bottom"
                  delay={i * 0.05}
                  className="sticky z-[1]"
                  style={{ top: `${5.5 + i * 0.75}rem`, zIndex: i + 1 }}
                >
                  <article className="rounded-[22px] border border-border-light bg-white p-5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] md:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="pulse-live" />
                          <h3 className="font-display text-xl font-bold text-navy-ink md:text-2xl">
                            {item.brand}
                          </h3>
                          <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-bold text-brand">
                            {item.metric}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-body-light">
                          Client · {item.brand} · {item.industry}
                        </p>
                        <p className="mt-3 max-w-2xl text-sm font-medium text-navy-ink md:text-[15px]">
                          {item.resultLine}
                        </p>
                      </div>
                      <Link
                        href={`/work/${item.slug}`}
                        className="shrink-0 text-sm font-semibold text-brand hover:underline"
                      >
                        View case study →
                      </Link>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                      {(() => {
                        const shots = (
                          item.gallery.length ? item.gallery : [item.image]
                        ).slice(0, 3);
                        while (shots.length < 3) shots.push(item.image);
                        return shots.map((src, n) => (
                          <div
                            key={`${item.slug}-${n}`}
                            className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border-light bg-mist"
                          >
                            <Image
                              src={src}
                              alt={`${item.brand} client project screenshot ${n + 1}, ${item.metric}`}
                              fill
                              sizes="(max-width: 640px) 33vw, 280px"
                              className="object-cover object-top"
                              loading={i < 2 && n === 0 ? "eager" : "lazy"}
                            />
                          </div>
                        ));
                      })()}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WEBSITES WE BUILT */}
        <section id="websites" className="border-y border-border-light bg-[#f7faf9] py-10 md:py-14">
          <div className="container-x">
            <Reveal className="mb-12 text-center">
              <h2 className="h-section mt-3 text-navy-ink">
                Live sites. Real brands. Shipped by Onixs.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted">
                Recent websites our London studio designed and developed, from
                hospitality and accounting to community, engineering and construction.
              </p>
            </Reveal>

            <WebsitesShowcase />
          </div>
        </section>

        {/* NUMBERS (single stats block) */}
        <section className="bg-white py-10 md:py-14">
          <div className="container-x">
            <Reveal className="text-center">
              <h2 className="h-section mt-3 text-navy-ink">
                Numbers our clients actually feel.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                Outcomes from real delivery. One connected studio, London standards.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.04}>
                  <div className="rounded-[18px] border border-border-light bg-card p-6 text-center">
                    <p className="font-display text-[39px] font-bold tracking-tight text-navy-ink">
                      {s.value}
                    </p>
                    <p className="mt-2 text-sm text-muted">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 text-center">
              <button
                type="button"
                className="btn-primary"
                onClick={() => setContactOpen(true)}
              >
                Get results like these →
              </button>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section className="bg-white py-10 md:py-14">
          <div className="container-x">
            <Reveal>
              <h2 className="h-section mt-3 text-navy-ink">
                Brands love working with us.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {reviews.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.06}>
                  <article className="flex h-full flex-col rounded-[20px] border border-border-light bg-card p-7">
                    <Stars n={r.rating} />
                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-body-light">
                      “{r.quote}”
                    </p>
                    <div className="mt-6 flex items-center gap-3 border-t border-border-light pt-5">
                      <div className="relative h-11 w-11 overflow-hidden rounded-full bg-brand/15">
                        <Image
                          src={r.photo}
                          alt={`${r.name}, ${r.role} at ${r.company}`}
                          width={44}
                          height={44}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-ink">{r.name}</p>
                        <p className="text-xs text-muted">
                          {r.role} · {r.company}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center">
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand hover:underline"
              >
                Read our Google reviews ↗
              </a>
            </p>
          </div>
        </section>

        {/* HOW WE ENGAGE — no public pricing */}
        <section id="engage" className="bg-white py-10 md:py-14">
          <div className="container-x">
            <Reveal className="text-center">
              <h2 className="h-section mt-3 text-navy-ink">
                Three ways to partner with Onixs.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                Pick the engagement that matches where you are. Every scope is
                quoted after a free discovery call, never a one-size price list.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {engagementModels.map((p) => (
                <Reveal key={p.name} from="bottom">
                  <article
                    className={cn(
                      "relative flex h-full flex-col rounded-[22px] p-8",
                      p.featured
                        ? "border border-brand/40 bg-[linear-gradient(160deg,#17b8a0,#0b3b36)] text-white shadow-[0_16px_40px_rgba(23,184,160,0.22)]"
                        : "border border-border-light bg-card text-navy-ink shadow-[0_8px_24px_rgba(0,0,0,0.04)]",
                    )}
                  >
                    {p.featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-ink">
                        Most chosen
                      </span>
                    )}
                    <p
                      className={cn(
                        "text-xs font-bold uppercase tracking-[0.14em]",
                        p.featured ? "text-white/70" : "text-brand",
                      )}
                    >
                      {p.tagline}
                    </p>
                    <h3
                      className={cn(
                        "mt-2 text-xl font-bold",
                        p.featured ? "text-white" : "text-navy-ink",
                      )}
                    >
                      {p.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-relaxed",
                        p.featured ? "text-white/80" : "text-muted",
                      )}
                    >
                      {p.blurb}
                    </p>
                    <p
                      className={cn(
                        "mt-6 text-xs font-bold uppercase tracking-wider",
                        p.featured ? "text-white/70" : "text-label",
                      )}
                    >
                      What you get
                    </p>
                    <ul
                      className={cn(
                        "mt-3 flex-1 space-y-2.5 text-sm",
                        p.featured ? "text-white/85" : "text-body-light",
                      )}
                    >
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <span
                            className={p.featured ? "text-white" : "text-brand"}
                          >
                            ✓
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => setContactOpen(true)}
                      className={cn(
                        "mt-8 w-full justify-center",
                        p.featured
                          ? "rounded-full bg-white px-6 py-3 text-sm font-bold text-navy-ink transition hover:-translate-y-0.5"
                          : "btn-primary",
                      )}
                    >
                      {p.cta}
                    </button>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted">
              No public price list. Every engagement is scoped to your goals
              after a free call.
            </p>
          </div>
        </section>

        {/* 7. FAQ */}
        <section id="faq" className="bg-white py-10 md:py-14" aria-labelledby="faq-heading">
          <div className="container-x max-w-3xl">
            <Reveal className="text-center">
              <h2 id="faq-heading" className="h-section mt-3 text-navy-ink">
                Questions, answered.
              </h2>
              <p className="mt-3 text-muted">
                Still unsure? Send us the messy version. We&apos;ll reply with the
                practical next step.
              </p>
              <button
                type="button"
                className="btn-primary mt-6"
                onClick={() => setContactOpen(true)}
              >
                Book a call →
              </button>
            </Reveal>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.question}
                  className="group overflow-hidden rounded-2xl border border-border-light bg-card open:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-navy-ink marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>{f.question}</span>
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-light text-lg leading-none text-brand transition group-open:bg-brand group-open:text-white"
                      aria-hidden
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <div className="border-t border-border-light px-5 py-4 text-sm leading-relaxed text-body-light">
                    {f.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CTA BANNER */}
        <section id="contact" className="bg-white py-10 md:pb-14">
          <div className="container-x">
            <Reveal>
              <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#062e2a,#0b6f61_50%,#0f8f7c)] px-8 py-16 text-center shadow-[0_30px_80px_rgba(11,111,97,0.28)] md:px-16 md:py-20">
                <h2 className="h-section text-white">
                  Tell us what&apos;s slowing your brand down.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/90">
                  Send the messy version: the website, the ads, the content, the
                  idea. We&apos;ll reply with the most practical next step, usually
                  within a day.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0b6f61] transition hover:-translate-y-0.5"
                  >
                    Contact us →
                  </Link>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* 10. FOOTER */}
      <SiteFooter />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
