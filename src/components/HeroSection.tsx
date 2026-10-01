"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type HeroSectionProps = {
  onBookCall: () => void;
};

export function HeroSection({ onBookCall }: HeroSectionProps) {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    onBookCall();
  }

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#fbfcfd] pt-24 pb-8 md:pb-10 md:pt-28"
    >
      {/* Soft teal atmosphere + grid (Polar-style structure, Onixs colours) */}
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
      <span
        className="pointer-events-none absolute left-[12%] top-[22%] hidden text-3xl text-brand/25 md:block"
        aria-hidden
      >
        ✦
      </span>
      <span
        className="pointer-events-none absolute right-[8%] top-[18%] hidden text-2xl text-brand/20 lg:block"
        aria-hidden
      >
        ✦
      </span>

      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-8 lg:px-10">
        {/* LEFT — Onixs copy (not Polar) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3.5 py-1.5 text-[13px] font-semibold text-navy-ink shadow-[0_8px_30px_rgba(11,59,54,0.06)] backdrop-blur-md">
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-[11px] text-brand"
              aria-hidden
            >
              ✓
            </span>
            Trusted by ambitious brands worldwide
          </div>

          <h1 className="mt-6 text-[clamp(2.4rem,5.5vw,3.85rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-navy-ink">
            Websites, apps &amp; growth from{" "}
            <span className="bg-gradient-to-r from-[#0b6f61] to-[#17b8a0] bg-clip-text text-transparent">
              one London studio.
            </span>
          </h1>

          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-body-light">
            Onixs designs, ships, and scales digital products for brands that
            want one accountable team, not a patchwork of freelancers.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:items-center"
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
              className="min-h-[52px] flex-1 rounded-full border border-border-light bg-white/90 px-5 text-sm text-navy-ink shadow-[0_10px_30px_rgba(11,59,54,0.05)] outline-none ring-brand/30 placeholder:text-muted focus:ring-2"
            />
            <button
              type="submit"
              className="inline-flex min-h-[52px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#0f8f7c] to-[#17b8a0] px-7 text-sm font-bold text-white shadow-[0_14px_36px_rgba(23,184,160,0.35)] transition hover:-translate-y-0.5"
            >
              Book a call
            </button>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted">
            <Link href="/services" className="font-semibold text-brand hover:underline">
              Explore services →
            </Link>
            <span className="hidden h-1 w-1 rounded-full bg-border-light sm:inline-block" />
            <span>Free discovery call · No hard pitch</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 border-t border-border-light/80 pt-6">
            {[
              { value: "50+", label: "Projects shipped" },
              { value: "8", label: "Services under one roof" },
              { value: "UK", label: "London-based delivery" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold tracking-tight text-navy-ink">
                  {s.value}
                </p>
                <p className="mt-0.5 text-xs font-medium text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — floating product mockup (Onixs dashboard, not Polar) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none"
        >
          <div
            className="relative mx-auto aspect-[5/4.4] w-full max-w-[500px]"
            style={{ perspective: "1200px" }}
          >
            {/* Floating top chip */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 left-[8%] z-30 flex items-center gap-3 rounded-2xl border border-white/90 bg-white/85 px-3.5 py-2.5 shadow-[0_18px_40px_rgba(11,59,54,0.12)] backdrop-blur-md sm:left-[4%]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/15 text-sm font-bold text-brand">
                +
              </span>
              <div>
                <p className="text-[12px] font-bold text-navy-ink">
                  Ship anything
                </p>
                <p className="text-[11px] text-muted">Web · Apps · SEO · Ads</p>
              </div>
              <span className="hidden rounded-full bg-navy-ink px-2.5 py-1 text-[10px] font-bold text-white sm:inline">
                Start project
              </span>
            </motion.div>

            {/* Main tilted card */}
            <div
              className="absolute inset-x-[4%] top-[10%] bottom-[6%] overflow-hidden rounded-[22px] border border-white/90 bg-white shadow-[0_30px_80px_rgba(11,59,54,0.14)]"
              style={{
                transform: "rotateY(-12deg) rotateX(6deg) rotateZ(2deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex items-center gap-2 border-b border-border-light bg-[#f4f7f6] px-4 py-2.5">
                <span className="flex gap-1.5" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </span>
                <span className="ml-2 text-[11px] font-semibold text-muted">
                  onixs.ai / delivery
                </span>
              </div>

              <div className="grid h-[calc(100%-40px)] grid-cols-[72px_1fr] sm:grid-cols-[88px_1fr]">
                <aside className="flex flex-col gap-3 border-r border-border-light bg-[#fafcfb] p-3">
                  {["⌂", "◆", "◎", "↗", "⚙"].map((icon, i) => (
                    <span
                      key={icon}
                      className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm ${
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

                <div className="flex flex-col gap-3 overflow-hidden p-3 sm:p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                        Active build
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-navy-ink sm:text-base">
                        Westend Hijama relaunch
                      </p>
                    </div>
                    <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-bold text-brand">
                      On track
                    </span>
                  </div>

                  <div className="rounded-2xl border border-border-light bg-gradient-to-br from-[#0b3b36] to-[#17b8a0] p-3.5 text-white shadow-[0_12px_30px_rgba(11,59,54,0.2)]">
                    <p className="text-[11px] text-white/70">Performance score</p>
                    <div className="mt-1 flex items-end justify-between">
                      <p className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                        98
                      </p>
                      <p className="text-[11px] font-semibold text-white/85">
                        LCP &lt; 1.0s
                      </p>
                    </div>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-[92%] rounded-full bg-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      { label: "Website Development", status: "Shipped" },
                      { label: "Technical SEO", status: "Live" },
                      { label: "Booking funnel", status: "QA" },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between rounded-xl border border-border-light bg-[#f7faf9] px-3 py-2"
                      >
                        <span className="text-[12px] font-semibold text-navy-ink">
                          {row.label}
                        </span>
                        <span className="text-[10px] font-bold text-brand">
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating bottom-left metric card */}
            <motion.div
              animate={reduce ? undefined : { y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="absolute bottom-[2%] left-0 z-30 w-[46%] max-w-[200px] rounded-2xl border border-white/90 bg-white/90 p-3.5 shadow-[0_20px_50px_rgba(11,59,54,0.14)] backdrop-blur-md sm:bottom-[4%] sm:left-[-2%]"
            >
              <p className="text-[11px] font-semibold text-muted">This month</p>
              <p className="mt-1 text-xl font-extrabold tracking-tight text-navy-ink sm:text-2xl">
                +37%
              </p>
              <p className="text-[11px] font-medium text-body-light">
                Qualified enquiries
              </p>
              <button
                type="button"
                onClick={onBookCall}
                className="mt-3 w-full rounded-full bg-navy-ink py-2 text-[11px] font-bold text-white transition hover:bg-[#0b3b36]"
              >
                View growth plan
              </button>
            </motion.div>

            {/* Soft glow behind mockup */}
            <div
              className="pointer-events-none absolute bottom-[8%] left-1/2 h-28 w-[70%] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl"
              aria-hidden
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
