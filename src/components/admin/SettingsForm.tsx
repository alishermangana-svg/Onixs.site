"use client";

import { FormEvent, useState } from "react";
import type { StudioSettings } from "@/lib/settings-store";

export function SettingsForm({ initial }: { initial: StudioSettings }) {
  const [form, setForm] = useState(initial);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  function setField<K extends keyof StudioSettings>(key: K, value: StudioSettings[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setMessage("");
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        ok?: boolean;
      };
      if (!res.ok) {
        setMessage(data.error || "Could not save");
        return;
      }
      setMessage("Settings saved.");
    } catch {
      setMessage("Network error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-3xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-navy-ink md:text-3xl">
            Settings
          </h1>
          <p className="mt-1 text-sm text-muted">
            Studio contact details and notifications.
          </p>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="btn-primary justify-center disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save changes"}
        </button>
      </div>

      {message ? (
        <p className="mt-4 rounded-xl border border-border-light bg-white px-4 py-3 text-sm font-medium text-navy-ink">
          {message}
        </p>
      ) : null}

      <section className="mt-8 rounded-[20px] border border-border-light bg-white p-5 sm:p-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted">
          Studio
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {(
            [
              ["name", "Studio name"],
              ["studioLabel", "Studio label"],
              ["email", "Public email"],
              ["notifyEmail", "Notify email"],
              ["phone", "Phone"],
              ["whatsapp", "WhatsApp URL"],
              ["hours", "Hours"],
              ["tagline", "Tagline"],
            ] as const
          ).map(([key, label]) => (
            <label key={key} className="block text-sm sm:col-span-1">
              <span className="font-semibold text-navy-ink">{label}</span>
              <input
                value={String(form[key])}
                onChange={(e) => setField(key, e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-border-light bg-[#f7faf9] px-3 py-2.5 outline-none ring-brand/30 focus:ring-2"
              />
            </label>
          ))}
          <label className="block text-sm sm:col-span-2">
            <span className="font-semibold text-navy-ink">Address</span>
            <textarea
              value={form.address}
              onChange={(e) => setField("address", e.target.value)}
              rows={2}
              className="mt-1.5 w-full rounded-xl border border-border-light bg-[#f7faf9] px-3 py-2.5 outline-none ring-brand/30 focus:ring-2"
            />
          </label>
        </div>
      </section>

      <section className="mt-5 rounded-[20px] border border-border-light bg-white p-5 sm:p-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted">
          Socials
        </h2>
        <div className="mt-5 space-y-3">
          {form.socials.map((s, i) => (
            <div key={s.label + i} className="grid gap-3 sm:grid-cols-[140px_1fr]">
              <input
                value={s.label}
                onChange={(e) => {
                  const next = [...form.socials];
                  next[i] = { ...next[i], label: e.target.value };
                  setField("socials", next);
                }}
                className="rounded-xl border border-border-light bg-[#f7faf9] px-3 py-2.5 text-sm outline-none"
              />
              <input
                value={s.href}
                onChange={(e) => {
                  const next = [...form.socials];
                  next[i] = { ...next[i], href: e.target.value };
                  setField("socials", next);
                }}
                className="rounded-xl border border-border-light bg-[#f7faf9] px-3 py-2.5 text-sm outline-none"
              />
            </div>
          ))}
        </div>
      </section>
    </form>
  );
}
