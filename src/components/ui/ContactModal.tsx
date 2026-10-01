"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";

export function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-label="Close contact form"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-[24px] border border-border-light bg-white shadow-[0_30px_80px_rgba(11,59,54,0.2)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border-light px-6 py-5">
          <div>
            <h2
              id="contact-modal-title"
              className="font-display text-xl font-bold text-navy-ink"
            >
              Start a project
            </h2>
            <p className="mt-1 text-sm text-muted">
              Tell us what you need — we reply within one business day.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-muted transition hover:bg-mist hover:text-navy-ink"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[min(70vh,560px)] overflow-y-auto px-6 py-5">
          <ContactForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}
