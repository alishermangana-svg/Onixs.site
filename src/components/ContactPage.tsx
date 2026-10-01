"use client";

import { useState } from "react";
import { contactPageFaqs } from "@/content/site";
import { SiteHeader } from "@/components/SiteHeader";
import { StudioCard } from "@/components/StudioCard";
import { ProjectEnquiryForm } from "@/components/ProjectEnquiryForm";
import { ContactModal } from "@/components/ui/ContactModal";
import { SiteFooter } from "@/components/SiteFooter";
import { cn } from "@/lib/cn";

export function ContactPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SiteHeader onContactOpen={() => setContactOpen(true)} solid />

      <main className="min-h-[100svh] bg-[#f4f6f5] pb-20 pt-28 md:pb-28 md:pt-32">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
            <ProjectEnquiryForm />

            <div className="flex flex-col gap-6">
              <StudioCard />

              <section className="rounded-[24px] border border-border-light bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] md:p-8">
                <h2 className="font-display text-2xl font-bold text-navy-ink md:text-[1.75rem]">
                  Before you write
                </h2>
                <div className="mt-6 space-y-2">
                  {contactPageFaqs.map((faq, i) => {
                    const open = openFaq === i;
                    return (
                      <div
                        key={faq.q}
                        className="overflow-hidden rounded-xl border border-border-light"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                          aria-expanded={open}
                          onClick={() => setOpenFaq(open ? null : i)}
                        >
                          <span className="text-[12px] font-bold uppercase tracking-[0.06em] text-navy-ink">
                            {faq.q}
                          </span>
                          <span
                            className={cn(
                              "shrink-0 text-lg font-light text-muted",
                              open && "text-brand",
                            )}
                            aria-hidden
                          >
                            {open ? "−" : "+"}
                          </span>
                        </button>
                        {open ? (
                          <p className="px-4 pb-4 text-sm leading-relaxed text-body-light">
                            {faq.a}
                          </p>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
