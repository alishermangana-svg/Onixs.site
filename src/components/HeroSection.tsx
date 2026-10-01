"use client";

import Image from "next/image";
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
      className="relative isolate overflow-x-clip bg-[#fbfcfd] py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14"
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

        {/* Visual */}
        <div className="relative mx-auto w-full min-w-0 max-w-[420px] sm:max-w-[480px] lg:mx-0 lg:max-w-none">
          <div className="relative overflow-hidden rounded-[22px] border border-white/80 bg-white/40 shadow-[0_28px_70px_rgba(11,59,54,0.14)] sm:rounded-[28px]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/hero/hero-visual.webp"
                alt="Onixs product delivery dashboard on laptop and phone"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover object-center"
                quality={85}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#041f1c]/25 via-transparent to-transparent"
                aria-hidden
              />
            </div>

            <div className="absolute left-3 top-3 z-10 flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-2xl border border-white/90 bg-white/90 px-2.5 py-2 shadow-[0_12px_30px_rgba(11,59,54,0.12)] backdrop-blur-md sm:left-4 sm:top-4 sm:gap-3 sm:px-3.5 sm:py-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-sm font-bold text-brand">
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
            </div>

            <div className="absolute bottom-3 left-3 z-10 w-[46%] max-w-[11.5rem] rounded-2xl border border-white/90 bg-white/95 p-2.5 shadow-[0_16px_40px_rgba(11,59,54,0.14)] backdrop-blur-md sm:bottom-4 sm:left-4 sm:p-3">
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
