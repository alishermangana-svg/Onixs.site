"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks, site } from "@/content/site";
import { services } from "@/content/services";
import { OnixsLogo } from "@/components/OnixsLogo";
import { cn } from "@/lib/cn";

type SiteHeaderProps = {
  onContactOpen: () => void;
  solid?: boolean;
};

export function SiteHeader({ onContactOpen, solid = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!dropRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition",
        solid || scrolled ? "header-glass" : "bg-transparent",
      )}
    >
      <div className="container-x flex h-[4.25rem] items-center justify-between md:h-[4.75rem]">
        <OnixsLogo href="/" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((l) =>
            "hasDropdown" in l && l.hasDropdown ? (
              <div
                key={l.href}
                ref={dropRef}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[14.5px] font-semibold text-muted transition hover:text-brand",
                    servicesOpen && "text-brand",
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="menu"
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  {l.label}
                  <svg
                    viewBox="0 0 24 24"
                    className={cn(
                      "h-3.5 w-3.5 transition",
                      servicesOpen && "rotate-180",
                    )}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div
                    role="menu"
                    className="absolute left-1/2 top-full z-50 mt-2 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-border-light bg-white p-2 shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    <Link
                      href="/services"
                      role="menuitem"
                      className="mb-1 block rounded-xl px-3 py-2.5 text-sm font-bold text-navy-ink hover:bg-mist"
                      onClick={() => setServicesOpen(false)}
                    >
                      All services →
                    </Link>
                    <div className="grid gap-0.5">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          role="menuitem"
                          className="rounded-xl px-3 py-2.5 text-sm font-semibold text-muted transition hover:bg-mist hover:text-brand"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="mr-2 font-display text-[11px] text-brand">
                            {s.id}
                          </span>
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[14.5px] font-semibold text-muted transition hover:text-brand"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`mailto:${site.email}`} className="btn-ghost !px-4 !py-2.5 text-sm">
            Client Login
          </a>
          <button
            type="button"
            onClick={onContactOpen}
            className="btn-primary !px-5 !py-2.5 text-sm"
          >
            Let&apos;s talk
          </button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-light lg:hidden"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="flex w-4 flex-col gap-1">
            <span
              className={cn(
                "h-0.5 bg-navy-ink transition",
                menuOpen && "translate-y-1.5 rotate-45",
              )}
            />
            <span className={cn("h-0.5 bg-navy-ink transition", menuOpen && "opacity-0")} />
            <span
              className={cn(
                "h-0.5 bg-navy-ink transition",
                menuOpen && "-translate-y-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border-light bg-white px-5 py-4 lg:hidden">
          {navLinks.map((l) =>
            "hasDropdown" in l && l.hasDropdown ? (
              <div key={l.href} className="border-b border-border-light/70 py-1">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-soft"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                >
                  {l.label}
                  <svg
                    viewBox="0 0 24 24"
                    className={cn(
                      "h-4 w-4 transition",
                      mobileServicesOpen && "rotate-180",
                    )}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="pb-2 pl-2">
                    <Link
                      href="/services"
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-bold text-navy-ink"
                    >
                      All services →
                    </Link>
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-muted"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-semibold text-soft"
              >
                {l.label}
              </Link>
            ),
          )}
          <button
            type="button"
            className="btn-primary mt-3 w-full justify-center"
            onClick={() => {
              setMenuOpen(false);
              onContactOpen();
            }}
          >
            Let&apos;s talk
          </button>
        </div>
      )}
    </header>
  );
}
