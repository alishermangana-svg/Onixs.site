"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type HeroSectionProps = {
  onBookCall: () => void;
};

export function HeroSection({ onBookCall }: HeroSectionProps) {
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    onBookCall();
  }

  return (
    <section
      id="home"
      className="relative isolate overflow-x-clip bg-[#fbfcfd] py-6 sm:py-8 md:py-10 lg:flex lg:min-h-[calc(100svh-4.75rem)] lg:items-center lg:py-8"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 70% 35%, rgba(46,196,171,0.16), transparent 60%), radial-gradient(ellipse 50% 40% at 20% 20%, rgba(23,184,160,0.08), transparent 55%), #fbfcfd",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,42,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,42,36,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 60% 40%, black, transparent)",
        }}
      />

      <div className="container-x relative z-10 grid w-full items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12">
        {/* Copy */}
        <div className="min-w-0 max-w-xl lg:max-w-none">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-[11px] font-semibold text-navy-ink shadow-[0_8px_30px_rgba(11,59,54,0.06)] backdrop-blur-md sm:text-[13px]">
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-[11px] text-brand"
              aria-hidden
            >
              ✓
            </span>
            <span className="truncate">Trusted by ambitious brands worldwide</span>
          </div>

          <h1 className="mt-4 text-[clamp(1.75rem,5vw+0.5rem,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-navy-ink sm:mt-5">
            Websites, apps &amp; growth from{" "}
            <span className="bg-gradient-to-r from-[#0b6f61] to-[#17b8a0] bg-clip-text text-transparent">
              one London studio.
            </span>
          </h1>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-body-light sm:mt-4 sm:text-base">
            Onixs designs, ships, and scales digital products for brands that
            want one accountable team, not a patchwork of freelancers.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-5 flex w-full max-w-lg flex-col gap-2.5 sm:mt-6 sm:flex-row sm:items-center sm:gap-3"
          >
            <label className="sr-only" htmlFor="hero-email">
              Work email
            </label>
            <input
              id="hero-email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="min-h-11 w-full min-w-0 flex-1 rounded-full border border-border-light bg-white/90 px-4 text-sm text-navy-ink outline-none ring-brand/30 placeholder:text-muted focus:ring-2 sm:min-h-[3.15rem] sm:px-5"
            />
            <button
              type="submit"
              className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#0f8f7c] to-[#17b8a0] px-6 text-sm font-bold text-white shadow-[0_14px_36px_rgba(23,184,160,0.35)] transition hover:-translate-y-0.5 sm:min-h-[3.15rem] sm:w-auto sm:px-7"
            >
              Book a call
            </button>
          </form>

          <div className="mt-3 flex flex-col gap-1.5 text-sm text-muted sm:mt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link href="/services" className="font-semibold text-brand hover:underline">
              Explore services →
            </Link>
            <span className="hidden h-1 w-1 rounded-full bg-border-light sm:inline-block" />
            <span className="text-[13px]">Free discovery call · No hard pitch</span>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border-light/80 pt-4 sm:mt-8 sm:gap-6 sm:pt-5">
            {[
              { value: "50+", label: "Projects shipped" },
              { value: "8", label: "Services under one roof" },
              { value: "UK", label: "London-based delivery" },
            ].map((s) => (
              <div key={s.label} className="min-w-0">
                <p className="text-lg font-extrabold tracking-tight text-navy-ink sm:text-2xl">
                  {s.value}
                </p>
                <p className="mt-0.5 text-[10px] font-medium leading-snug text-muted sm:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual — contained scale so it never spills */}
        <div className="relative mx-auto w-full min-w-0 max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:mx-0 lg:max-w-none">
          <div className="relative mx-auto w-full overflow-hidden px-2 pb-2 pt-6 sm:px-3 sm:pt-7 lg:overflow-visible lg:px-4 lg:pt-8">
            {/* Floating chip */}
            <div className="absolute top-0 left-3 z-20 flex max-w-[min(100%,16rem)] items-center gap-2 rounded-2xl border border-white/90 bg-white/95 px-2.5 py-2 shadow-[0_12px_30px_rgba(11,59,54,0.12)] sm:left-4 sm:max-w-none sm:gap-3 sm:px-3.5 sm:py-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-xs font-bold text-brand sm:h-9 sm:w-9 sm:text-sm">
                +
              </span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-bold text-navy-ink sm:text-[12px]">
                  Ship anything
                </p>
                <p className="truncate text-[10px] text-muted sm:text-[11px]">
                  Web · Apps · SEO · Ads
                </p>
              </div>
              <span className="hidden shrink-0 rounded-full bg-navy-ink px-2.5 py-1 text-[10px] font-bold text-white md:inline">
                Start project
              </span>
            </div>

            {/* Main card — flat on small, slight tilt only on large */}
            <div className="relative z-10 mt-2 overflow-hidden rounded-[18px] border border-white/90 bg-white shadow-[0_24px_60px_rgba(11,59,54,0.14)] sm:rounded-[22px] lg:mt-3 lg:origin-center lg:[transform:perspective(1200px)_rotateY(-8deg)_rotateX(4deg)]">
              <div className="flex items-center gap-2 border-b border-border-light bg-[#f4f7f6] px-3 py-2 sm:px-4 sm:py-2.5">
                <span className="flex gap-1.5" aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
                </span>
                <span className="ml-1 truncate text-[10px] font-semibold text-muted sm:text-[11px]">
                  onixs.ai / delivery
                </span>
              </div>

              <div className="grid grid-cols-[52px_1fr] sm:grid-cols-[72px_1fr] lg:grid-cols-[80px_1fr]">
                <aside className="flex flex-col gap-2 border-r border-border-light bg-[#fafcfb] p-2 sm:gap-2.5 sm:p-3">
                  {["⌂", "◆", "◎", "↗", "⚙"].map((icon, i) => (
                    <span
                      key={icon}
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs sm:h-8 sm:w-8 sm:rounded-xl ${
                        i === 0
                          ? "bg-brand text-white shadow-[0_8px_20px_rgba(23,184,160,0.35)]"
                          : "bg-white text-muted"
                      }`}
                      aria-hidden
                    >
                      {icon}
                    </span>
                  ))}
                </aside>

                <div className="flex min-w-0 flex-col gap-2 p-2.5 sm:gap-2.5 sm:p-3 lg:p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                        Active build
                      </p>
                      <p className="mt-0.5 truncate text-xs font-bold text-navy-ink sm:text-sm">
                        Westend Hijama relaunch
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-brand/10 px-2 py-0.5 text-[9px] font-bold text-brand sm:text-[10px]">
                      On track
                    </span>
                  </div>

                  <div className="rounded-xl bg-gradient-to-br from-[#0b3b36] to-[#17b8a0] p-2.5 text-white sm:rounded-2xl sm:p-3">
                    <p className="text-[10px] text-white/70">Performance score</p>
                    <div className="mt-1 flex items-end justify-between gap-2">
                      <p className="text-xl font-extrabold tracking-tight sm:text-2xl">
                        98
                      </p>
                      <p className="text-[10px] font-semibold text-white/85">
                        LCP &lt; 1.0s
                      </p>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-[92%] rounded-full bg-white" />
                    </div>
                  </div>

                  <div className="hidden space-y-1.5 sm:block">
                    {[
                      { label: "Website Development", status: "Shipped" },
                      { label: "Technical SEO", status: "Live" },
                      { label: "Booking funnel", status: "QA" },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between gap-2 rounded-xl border border-border-light bg-[#f7faf9] px-2.5 py-1.5"
                      >
                        <span className="truncate text-[11px] font-semibold text-navy-ink">
                          {row.label}
                        </span>
                        <span className="shrink-0 text-[9px] font-bold text-brand">
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Metric chip */}
            <div className="relative z-20 mt-3 w-[55%] max-w-[11.5rem] rounded-2xl border border-white/90 bg-white p-2.5 shadow-[0_16px_40px_rgba(11,59,54,0.12)] sm:absolute sm:bottom-3 sm:left-0 sm:mt-0 sm:w-[42%] sm:max-w-[11rem] sm:p-3 lg:bottom-4 lg:-left-1">
              <p className="text-[10px] font-semibold text-muted">This month</p>
              <p className="text-lg font-extrabold tracking-tight text-navy-ink sm:text-xl">
                +37%
              </p>
              <p className="text-[10px] font-medium text-body-light">
                Qualified enquiries
              </p>
              <button
                type="button"
                onClick={onBookCall}
                className="mt-2 w-full rounded-full bg-navy-ink py-1.5 text-[10px] font-bold text-white transition hover:bg-[#0b3b36]"
              >
                View growth plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
