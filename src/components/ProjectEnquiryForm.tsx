"use client";

import { FormEvent, useState } from "react";
import { contactOptions } from "@/content/faq";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

const steps = [
  { id: 1, label: "Contact" },
  { id: 2, label: "Request type" },
  { id: 3, label: "Details" },
] as const;

const field =
  "w-full rounded-xl border border-border-light bg-[#f3f4f3] px-4 py-3.5 text-sm text-navy-ink outline-none transition focus:border-brand focus:bg-white";

const labelCls =
  "mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-muted";

export function ProjectEnquiryForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    companyName: "",
    service: "",
    budget: "",
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function goNext() {
    setError("");
    if (step === 1) {
      if (form.name.trim().length < 2) {
        setError("Please enter your name.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        setError("Enter a valid email.");
        return;
      }
      if (form.companyName.trim().length < 2) {
        setError("Enter your company name.");
        return;
      }
    }
    if (step === 2 && !form.service) {
      setError("Select a request type.");
      return;
    }
    setStep((s) => Math.min(3, s + 1));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.companyName,
          service: form.service,
          budget: form.budget || "",
          message: form.message || "",
          website: "", // honeypot
        }),
      });
      const json = (await res.json()) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setError(json.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("ok");
      setForm({
        name: "",
        email: "",
        companyName: "",
        service: "",
        budget: "",
        message: "",
      });
      setStep(1);
    } catch {
      setStatus("error");
      setError(`Network error. Please email ${site.email}.`);
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-[24px] border border-border-light bg-white p-8 md:p-10">
        <h2 className="font-display text-3xl font-bold text-navy-ink">
          Message sent
        </h2>
        <p className="mt-3 text-body-light">
          Thanks. We&apos;ll reply within one business day from {site.email}.
        </p>
        <button
          type="button"
          className="btn-primary mt-8"
          onClick={() => setStatus("idle")}
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[24px] border border-border-light bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] md:p-10"
      noValidate
    >
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy-ink md:text-[2.75rem]">
        Contact
      </h1>

      {/* Steps */}
      <ol className="mt-8 flex flex-wrap gap-2 border-b border-border-light pb-4">
        {steps.map((s) => (
          <li key={s.id} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => s.id < step && setStep(s.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] transition",
                step === s.id
                  ? "bg-brand/15 text-brand"
                  : step > s.id
                    ? "text-navy-ink hover:text-brand"
                    : "text-muted",
              )}
            >
              <span className="mr-1.5 opacity-70">
                {String(s.id).padStart(2, "0")}
              </span>
              {s.label}
            </button>
            {s.id < 3 ? (
              <span className="hidden text-border-light sm:inline" aria-hidden>
                /
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      {step === 1 ? (
        <div className="mt-8 space-y-5">
          <p className="text-sm font-semibold text-navy-ink">Who you are</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="enq-name" className={labelCls}>
                Name
              </label>
              <input
                id="enq-name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={field}
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label htmlFor="enq-email" className={labelCls}>
                Email
              </label>
              <input
                id="enq-email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={field}
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="enq-company" className={labelCls}>
              Company
            </label>
            <input
              id="enq-company"
              value={form.companyName}
              onChange={(e) => update("companyName", e.target.value)}
              className={field}
              autoComplete="organization"
              required
            />
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="mt-8 space-y-5">
          <p className="text-sm font-semibold text-navy-ink">
            What do you need?
          </p>
          <div>
            <label htmlFor="enq-service" className={labelCls}>
              Request type
            </label>
            <select
              id="enq-service"
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
              className={field}
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              {contactOptions.services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="mt-8 space-y-5">
          <p className="text-sm font-semibold text-navy-ink">Project details</p>
          <div>
            <label htmlFor="enq-budget" className={labelCls}>
              Budget range{" "}
              <span className="normal-case tracking-normal text-muted/70">
                (optional)
              </span>
            </label>
            <select
              id="enq-budget"
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              className={field}
            >
              <option value="">Prefer to skip</option>
              {contactOptions.budgets.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="enq-message" className={labelCls}>
              Message{" "}
              <span className="normal-case tracking-normal text-muted/70">
                (optional)
              </span>
            </label>
            <textarea
              id="enq-message"
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={field}
              placeholder="Goals, timeline, links, whatever helps"
            />
          </div>
        </div>
      ) : null}

      {error ? (
        <p
          key={error}
          className="mt-4 animate-[error-nudge_0.45s_ease] text-sm font-medium text-navy-ink"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => {
              setError("");
              setStep((s) => s - 1);
            }}
            className="text-sm font-semibold text-muted hover:text-navy-ink"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}
        {step < 3 ? (
          <button type="button" onClick={goNext} className="btn-primary">
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send enquiry →"}
          </button>
        )}
      </div>
    </form>
  );
}
