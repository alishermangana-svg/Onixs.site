import Link from "next/link";
import { OnixsLogo } from "@/components/OnixsLogo";
import { site } from "@/content/site";
import { services } from "@/content/services";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
] as const;

const badges = ["London Studio", "Remote Ready", "GDPR Aware"] as const;

const socialIcons = site.socials.filter((s) =>
  ["LinkedIn", "Instagram", "Facebook"].includes(s.label),
);

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#0a1628] text-white">
        <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
          {/* Brand */}
          <div className="max-w-sm">
            <OnixsLogo quiet size="sm" href="/" invert />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Your digital studio for peace of mind. Onixs helps ambitious brands
              across the UK and worldwide with websites, apps, SEO, ads, design
              and VA support. One connected team from Chiswick, so you ship
              without the stress.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-white">
              Our Services
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-white/70">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="transition hover:text-brand"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-white">
              Quick Links
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-white/70">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-white">
              Support
            </p>
            <ul className="mt-5 space-y-3.5 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-start gap-2.5 transition hover:text-brand"
                >
                  <PhoneIcon />
                  <span>{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-start gap-2.5 transition hover:text-brand"
                >
                  <MailIcon />
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <PinIcon />
                <span>{site.address}</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-[11px] font-bold text-white/80 transition hover:border-brand hover:text-brand"
                >
                  {s.label.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright + badges */}
        <div className="border-t border-white/10">
          <div className="container-x flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/55">
              © {year} Onixs. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/80"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10">
          <div className="container-x py-5">
            <p className="mx-auto max-w-4xl text-center text-[11px] leading-relaxed text-white/45">
              Onixs is a private digital studio based in Chiswick, London. We are
              not affiliated with or endorsed by any government department. We
              design, build and grow digital products for UK and international
              clients under commercial agreements scoped after a discovery call.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition hover:scale-105 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
