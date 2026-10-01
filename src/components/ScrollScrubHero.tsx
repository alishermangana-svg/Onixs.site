"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { heroRotator } from "@/content/hero";
import { industries } from "@/content/work";
import { cn } from "@/lib/cn";

const FRAME_COUNT = 48;

type ScrollScrubHeroProps = {
  onBookCall: () => void;
};

export function ScrollScrubHero({ onBookCall }: ScrollScrubHeroProps) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const raf = useRef(0);

  const frames = useMemo(
    () =>
      Array.from({ length: FRAME_COUNT }, (_, i) =>
        `/videos/frames/frame-${String(i).padStart(3, "0")}.webp`,
      ),
    [],
  );

  const frameIndex = Math.min(
    FRAME_COUNT - 1,
    Math.max(0, Math.round(progress * (FRAME_COUNT - 1))),
  );

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroRotator.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reduce]);

  useEffect(() => {
    if (reduce) return;

    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const next = scrolled / Math.max(total, 1);
      setProgress(next);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduce]);

  // Preload nearby frames for smooth scrub
  useEffect(() => {
    frames.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [frames]);

  const current = heroRotator[heroIndex];
  const copyOpacity = 1 - Math.min(progress * 1.15, 0.85);
  const copyY = progress * 48;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[280vh] bg-white"
      aria-label="Hero"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden">
        {/* Scroll-scrubbed visual */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {frames.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              priority={i < 3}
              sizes="100vw"
              className={cn(
                "object-cover transition-opacity duration-75",
                i === frameIndex ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-white/90" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Content overlay */}
        <div
          className="relative z-10 flex flex-1 flex-col justify-center py-10 sm:py-14"
          style={
            reduce
              ? undefined
              : {
                  opacity: Math.max(copyOpacity, 0.2),
                  transform: `translate3d(0, ${copyY}px, 0)`,
                }
          }
        >
          <div className="container-x text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand sm:text-[11px]">
              Onixs · London
            </p>
            <h1 className="relative mx-auto mt-3 max-w-4xl text-[clamp(1.85rem,5.5vw,3.75rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-navy-ink">
              London Web, App &amp; SEO Studio for Ambitious Brands
            </h1>

            <p className="relative mx-auto mt-4 max-w-2xl px-1 text-[0.95rem] leading-relaxed text-muted-2 sm:mt-5 sm:text-[17px]">
              {site.positioning}
            </p>
            <p
              className="relative mx-auto mt-3 max-w-xl text-[0.9rem] text-muted sm:text-[15px]"
              aria-live="polite"
            >
              Right now we&apos;re shipping{" "}
              <span className="font-semibold text-brand">{current.word}</span>
              {": "}
              {current.now}.
            </p>

            <div className="relative mt-3.5 flex justify-center gap-1.5">
              {heroRotator.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === heroIndex ? "w-6 bg-brand" : "w-1.5 bg-navy-ink/15",
                  )}
                />
              ))}
            </div>

            <div className="relative mt-7 flex w-full flex-col items-stretch justify-center gap-2.5 sm:mt-8 sm:flex-row sm:items-center sm:gap-3">
              <button
                type="button"
                className="btn-primary w-full justify-center sm:w-auto"
                onClick={onBookCall}
              >
                Book a call
              </button>
              <a href="#work" className="btn-ghost w-full justify-center sm:w-auto">
                See our work
              </a>
            </div>

            <div className="relative mt-10 w-full sm:mt-12">
              <p className="px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-label sm:text-[11px] sm:tracking-[2.2px]">
                Industries we serve
              </p>
              <div className="marquee-wrap relative mt-3.5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]">
                <div className="marquee-track font-display text-[0.95rem] font-semibold text-muted/55 sm:text-[19px]">
                  {[...industries, ...industries].map((b, i) => (
                    <span
                      key={`${b}-${i}`}
                      className="inline-flex items-center gap-5 sm:gap-10"
                    >
                      {b}
                      <span className="h-3.5 w-px bg-border-light sm:h-4" aria-hidden />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="relative z-10 flex flex-col items-center gap-2 pb-6">
          <div className="h-1 w-40 overflow-hidden rounded-full bg-navy-ink/10">
            <div
              className="h-full rounded-full bg-brand transition-[width] duration-75"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            Scroll to scrub
          </p>
        </div>
      </div>
    </section>
  );
}
