"use client";

import { FormEvent, useState } from "react";
import { contactOptions } from "@/content/faq";
import { site } from "@/content/site";

export function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setError(json.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("ok");
      form.reset();
      onSuccess?.();
    } catch {
      setStatus("error");
      setError(`Network error. Please email ${site.email}.`);
    }
  }

  const field =
    "w-full rounded-xl border border-border-light bg-mist px-4 py-3 text-sm text-navy-ink outline-none transition focus:border-brand";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Name" className={field} />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className={field}
        />
      </div>
      <input
        name="company"
        required
        placeholder="Company"
        className={field}
        autoComplete="organization"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <select name="service" required className={field} defaultValue="">
          <option value="" disabled>
            Service
          </option>
          {contactOptions.services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select name="budget" className={field} defaultValue="">
          <option value="">Budget (optional)</option>
          {contactOptions.budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <textarea
        name="message"
        rows={5}
        placeholder="Message (optional)"
        className={field}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center sm:w-auto disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message →"}
      </button>
      {status === "ok" && (
        <p className="text-sm text-brand">
          Message sent. We’ll reply within one business day.
        </p>
      )}
      {status === "error" && (
        <p
          key={error}
          className="animate-[error-nudge_0.45s_ease] text-sm font-medium text-navy-ink"
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
