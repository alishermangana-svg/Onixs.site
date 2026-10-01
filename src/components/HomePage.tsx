"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import {
  leakCards,
  services,
} from "@/content/services";
import { stats, workItems, showcaseWebsites } from "@/content/work";
import {
  faqs,
  googleReviewsUrl,
  engagementModels,
  reviews,
} from "@/content/reviews";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { SiteFooter } from "@/components/SiteFooter";
import { cn } from "@/lib/cn";

const ContactModal = dynamic(
  () =>
    import("@/components/ui/ContactModal").then((m) => m.ContactModal),
  { ssr: false },
);

/** Lightweight placeholder — no framer / scroll observers on the home path */
function Reveal({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "right" | "left" | "bottom";
  style?: React.CSSProperties;
}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
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
                    loading={i < 2 ? "eager" : "lazy"}
                    quality={70}
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
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? (window.scrollY / max) * 100 : 0;
        if (progressRef.current) {
          progressRef.current.style.width = `${p}%`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={progressRef}
        className="scroll-progress"
        style={{ width: "0%" }}
        aria-hidden
      />

      <SiteHeader onContactOpen={() => setContactOpen(true)} />

      <main>
        <HeroSection onBookCall={() => setContactOpen(true)} />

        {/* 1. Studio visuals */}
        <section className="bg-white py-10 md:py-14">
          <div className="container-x">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="h-section mt-3 text-navy-ink">
                  Built in London. Shipped worldwide.
                </h2>
                <p className="mt-3 text-muted">
                  A peek at the products and craft behind Onixs — full process
                  and studio story on our About page.
                </p>
              </div>
              <Link href="/about" className="btn-ghost shrink-0 self-start sm:self-auto">
                About Onixs →
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  src: "/images/About-us-2-768x512.webp",
                  alt: "Onixs London studio",
                  label: "Studio",
                },
                {
                  src: "/work/pocket-guide-ai.webp",
                  alt: "Pocket Guide product",
                  label: "Product",
                },
                {
                  src: "/work/castle-auction.webp",
                  alt: "Castle Auction website",
                  label: "Web",
                },
                {
                  src: "/work/Pocket-Guide-App-Mockup-2.webp",
                  alt: "Mobile app mockup",
                  label: "Apps",
                },
              ].map((item) => (
                <Link
                  key={item.src}
                  href="/about"
                  className="group relative block overflow-hidden rounded-[20px] border border-border-light bg-mist"
                >
                  <div className="relative aspect-[4/5] sm:aspect-[3/4]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041f1c]/70 via-[#041f1c]/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy-ink">
                      {item.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 2. SERVICES */}
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

        {/* 3. THE LEAK */}
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

        {/* 4. SELECTED WORK */}
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
            <div className="mx-auto w-full max-w-4xl space-y-4 pb-4 md:space-y-6 md:pb-8">
              {workItems.map((item, i) => (
                <div
                  key={item.slug}
                  className="relative z-[1] md:sticky"
                  style={{ top: `${5.5 + i * 0.75}rem`, zIndex: i + 1 }}
                >
                  <article className="rounded-[18px] border border-border-light bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] sm:rounded-[22px] sm:p-5 md:p-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="pulse-live" />
                          <h3 className="font-display text-lg font-bold text-navy-ink sm:text-xl md:text-2xl">
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
                    <div className="mt-4 grid grid-cols-3 gap-1.5 sm:mt-5 sm:gap-3">
                      {(() => {
                        const shots = (
                          item.gallery.length ? item.gallery : [item.image]
                        ).slice(0, 3);
                        while (shots.length < 3) shots.push(item.image);
                        return shots.map((src, n) => (
                          <div
                            key={`${item.slug}-${n}`}
                            className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border-light bg-mist sm:rounded-xl"
                          >
                            <Image
                              src={src}
                              alt={`${item.brand} client project screenshot ${n + 1}, ${item.metric}`}
                              fill
                              sizes="(max-width: 640px) 33vw, 280px"
                              className="object-cover object-top"
                              loading={i < 2 && n === 0 ? "eager" : "lazy"}
                              quality={70}
                            />
                          </div>
                        ));
                      })()}
                    </div>
                  </article>
                </div>
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

        {/* 7. FAQ — zigzag path (5 only) */}
        <section
          id="faq"
          className="relative overflow-hidden bg-[#041f1c] py-12 md:py-16"
          aria-labelledby="faq-heading"
        >
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 20% 100%, rgba(23,184,160,0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 10%, rgba(15,143,124,0.2), transparent 50%)",
            }}
          />

          <div className="container-x relative z-10 max-w-2xl">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-[#17b8a0]/40 bg-[#0b3b36]/80 px-4 py-1.5 text-[12px] font-semibold text-[#8ae0d2] shadow-[0_0_24px_rgba(23,184,160,0.25)]">
                Clear answers ↓
              </span>
              <h2
                id="faq-heading"
                className="mt-5 text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-[-0.035em] text-white"
              >
                Questions,{" "}
                <span className="text-[#5dd4c0]">answered.</span>
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-white/65">
                Five things people ask before we start. Still unsure? Book a
                call and we&apos;ll talk it through.
              </p>
            </div>

            <ol className="mt-12 flex list-none flex-col items-center px-1">
              {faqs.map((f, i) => {
                const light = i % 2 === 0;
                /** Zigzag: even items connect on the right, odd on the left */
                const sideRight = i % 2 === 0;
                return (
                  <li key={f.question} className="relative w-full max-w-xl">
                    <details className="group">
                      <summary className="cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
                        <div
                          className={cn(
                            "rounded-[1.35rem] border px-4 py-3.5 text-center text-[12px] font-semibold leading-snug transition sm:rounded-full sm:px-8 sm:py-[1.15rem] sm:text-[15px]",
                            light
                              ? "border-transparent bg-white text-[#062e2a] shadow-[0_14px_40px_rgba(0,0,0,0.22)]"
                              : "border-white/30 bg-[#031816] text-white",
                          )}
                        >
                          {f.question}
                        </div>
                      </summary>
                      <p className="mx-auto mt-3 max-w-[90%] text-center text-sm leading-relaxed text-white/70">
                        {f.answer}
                      </p>
                    </details>

                    {i < faqs.length - 1 ? (
                      <div
                        className={cn(
                          "mt-1.5 mb-1.5 h-6 w-[7px] rounded-full bg-[#17b8a0]/60",
                          sideRight ? "ml-[76%]" : "ml-[22%]",
                        )}
                        aria-hidden
                      />
                    ) : null}
                  </li>
                );
              })}
            </ol>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#062e2a] transition hover:bg-[#d4f4ee]"
                onClick={() => setContactOpen(true)}
              >
                Book a call →
              </button>
            </div>
          </div>
        </section>

        {/* 8. CTA BANNER */}
        <section id="contact" className="bg-white py-10 md:pb-16">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-[28px] bg-[#041f1c]">
              {/* Atmosphere */}
              <div
                className="pointer-events-none absolute inset-0"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(ellipse 70% 90% at 100% 0%, rgba(23,184,160,0.35), transparent 55%), radial-gradient(ellipse 50% 60% at 0% 100%, rgba(15,143,124,0.22), transparent 50%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.18]"
                aria-hidden
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                  maskImage:
                    "radial-gradient(ellipse 80% 70% at 70% 40%, black, transparent)",
                }}
              />

              <div className="relative z-10 grid gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-12 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-12 md:px-14 md:py-16 lg:px-16">
                <div className="min-w-0">
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#5dd4c0]">
                    Next step
                  </p>
                  <h2 className="mt-3 max-w-xl text-[clamp(1.55rem,5.5vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-white">
                    Tell us what&apos;s slowing your brand down.
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75 sm:text-[15px] md:text-base">
                    Send the messy version: the website, the ads, the content,
                    the idea. We&apos;ll reply with the most practical next step,
                    usually within a day.
                  </p>

                  <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                    <Link
                      href="/contact"
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#062e2a] transition hover:bg-[#d4f4ee] sm:w-auto"
                    >
                      Contact us →
                    </Link>
                    <a
                      href={site.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/45 hover:bg-white/10 sm:w-auto"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/15 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:pl-12">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/45">
                    Reach the studio
                  </p>
                  <ul className="mt-5 space-y-4">
                    <li>
                      <a
                        href={`mailto:${site.email}`}
                        className="group block"
                      >
                        <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/40">
                          Email
                        </span>
                        <span className="mt-0.5 block text-[15px] font-semibold text-white transition group-hover:text-[#5dd4c0]">
                          {site.email}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`tel:${site.phone.replace(/\s/g, "")}`}
                        className="group block"
                      >
                        <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/40">
                          Phone
                        </span>
                        <span className="mt-0.5 block text-[15px] font-semibold text-white transition group-hover:text-[#5dd4c0]">
                          {site.phoneDisplay}
                        </span>
                      </a>
                    </li>
                    <li>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/40">
                        Studio
                      </span>
                      <span className="mt-0.5 block text-[15px] font-medium leading-snug text-white/80">
                        {site.streetAddress}
                        <br />
                        {site.studioLabel} {site.postalCode}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 10. FOOTER */}
      <SiteFooter />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
