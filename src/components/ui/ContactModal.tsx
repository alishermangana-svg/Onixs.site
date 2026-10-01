"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            aria-label="Close contact form"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="relative z-10 w-full max-w-lg rounded-[22px] border border-border-light bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2
                  id="contact-title"
                  className="text-2xl font-bold text-navy-ink"
                >
                  Start a project
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Usually within one business day.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-border-light p-2 text-muted hover:text-navy-ink"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ContactForm onSuccess={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
