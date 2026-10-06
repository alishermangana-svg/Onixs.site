"use client";

import { useMemo, useState } from "react";
import type { Lead, LeadStatus } from "@/lib/leads-store";
import { cn } from "@/lib/cn";

const STATUS_LABEL: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  won: "Won",
  lost: "Lost",
};

const STATUS_STYLE: Record<LeadStatus, string> = {
  new: "bg-brand/15 text-brand",
  contacted: "bg-amber-100 text-amber-800",
  qualified: "bg-sky-100 text-sky-800",
  won: "bg-emerald-100 text-emerald-800",
  lost: "bg-mist text-muted",
};

function formatWhen(iso: string) {
  const d = new Date(iso);
  const diff = Date.now() - d.getTime();
  const hours = Math.floor(diff / 36e5);
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
}

export function LeadsPanel({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState(initialLeads);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<LeadStatus | "all">("all");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads.filter((l) => {
      if (status !== "all" && l.status !== status) return false;
      if (!q) return true;
      return (
        l.name.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        l.company.toLowerCase().includes(q) ||
        l.service.toLowerCase().includes(q)
      );
    });
  }, [leads, query, status]);

  const active = leads.find((l) => l.id === activeId) ?? null;

  const counts = useMemo(() => {
    return {
      new: leads.filter((l) => l.status === "new").length,
      contacted: leads.filter((l) => l.status === "contacted").length,
      won: leads.filter((l) => l.status === "won").length,
    };
  }, [leads]);

  async function patchLead(id: string, patch: Partial<Pick<Lead, "status" | "notes">>) {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (!res.ok) return;
      const data = (await res.json()) as { lead: Lead };
      setLeads((prev) => prev.map((l) => (l.id === id ? data.lead : l)));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-navy-ink md:text-3xl">
            Leads
          </h1>
          <p className="mt-1 text-sm text-muted">
            Website enquiries from contact forms.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-brand/15 px-3 py-1 text-xs font-bold text-brand">
            New {counts.new}
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
            In progress {counts.contacted}
          </span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
            Won {counts.won}
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search name, email, company…"
          className="min-h-11 flex-1 rounded-full border border-border-light bg-white px-4 text-sm outline-none ring-brand/30 focus:ring-2"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as LeadStatus | "all")}
          className="min-h-11 rounded-full border border-border-light bg-white px-4 text-sm outline-none"
        >
          <option value="all">All statuses</option>
          {(Object.keys(STATUS_LABEL) as LeadStatus[]).map((s) => (
            <option key={s} value={s}>
              {STATUS_LABEL[s]}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 overflow-hidden rounded-[20px] border border-border-light bg-white">
        <div className="hidden grid-cols-[110px_1.2fr_1fr_1fr_1fr_90px] gap-3 border-b border-border-light bg-[#f7faf9] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-muted md:grid">
          <span>Status</span>
          <span>Name</span>
          <span>Company</span>
          <span>Service</span>
          <span>Email</span>
          <span>When</span>
        </div>
        {filtered.length === 0 ? (
          <p className="px-4 py-10 text-center text-sm text-muted">
            No leads match your filters.
          </p>
        ) : (
          <ul>
            {filtered.map((lead) => (
              <li key={lead.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(lead.id)}
                  className="grid w-full gap-2 border-b border-border-light px-4 py-4 text-left transition hover:bg-[#f7faf9] md:grid-cols-[110px_1.2fr_1fr_1fr_1fr_90px] md:items-center md:gap-3"
                >
                  <span
                    className={cn(
                      "inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-bold",
                      STATUS_STYLE[lead.status],
                    )}
                  >
                    {STATUS_LABEL[lead.status]}
                  </span>
                  <span className="text-sm font-semibold text-navy-ink">
                    {lead.name}
                  </span>
                  <span className="text-sm text-muted">{lead.company}</span>
                  <span className="text-sm text-muted">{lead.service}</span>
                  <span className="truncate text-sm text-muted">{lead.email}</span>
                  <span className="text-sm text-muted">
                    {formatWhen(lead.createdAt)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {active ? (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            aria-label="Close"
            onClick={() => setActiveId(null)}
          />
          <aside className="relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.12)]">
            <div className="flex items-start justify-between gap-3 border-b border-border-light px-5 py-4">
              <div>
                <p
                  className={cn(
                    "inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold",
                    STATUS_STYLE[active.status],
                  )}
                >
                  {STATUS_LABEL[active.status]}
                </p>
                <h2 className="mt-2 text-xl font-extrabold text-navy-ink">
                  {active.name}
                </h2>
                <p className="text-sm text-muted">{active.company}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="rounded-full border border-border-light px-3 py-1 text-sm font-semibold"
              >
                Close
              </button>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5 text-sm">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                  Contact
                </p>
                <a
                  href={`mailto:${active.email}`}
                  className="mt-1 block font-semibold text-brand hover:underline"
                >
                  {active.email}
                </a>
                <p className="mt-1 text-muted">{active.service}</p>
                <p className="text-muted">Budget: {active.budget || "—"}</p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                  Message
                </p>
                <p className="mt-2 whitespace-pre-wrap leading-relaxed text-body-light">
                  {active.message || "(No message)"}
                </p>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                  Status
                </label>
                <select
                  value={active.status}
                  disabled={saving}
                  onChange={(e) =>
                    patchLead(active.id, {
                      status: e.target.value as LeadStatus,
                    })
                  }
                  className="mt-2 w-full rounded-xl border border-border-light bg-[#f7faf9] px-3 py-2.5 outline-none"
                >
                  {(Object.keys(STATUS_LABEL) as LeadStatus[]).map((s) => (
                    <option key={s} value={s}>
                      {STATUS_LABEL[s]}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                  Internal notes
                </label>
                <textarea
                  defaultValue={active.notes}
                  key={active.id + active.updatedAt}
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-border-light bg-[#f7faf9] px-3 py-2.5 outline-none"
                  onBlur={(e) => {
                    if (e.target.value !== active.notes) {
                      patchLead(active.id, { notes: e.target.value });
                    }
                  }}
                />
              </div>
            </div>

            <div className="flex gap-2 border-t border-border-light p-4">
              <a
                href={`mailto:${active.email}?subject=${encodeURIComponent(`Re: your Onixs enquiry`)}`}
                className="btn-primary flex-1 justify-center text-sm"
              >
                Email
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Hi ${active.name}, thanks for your enquiry about ${active.service}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex-1 justify-center text-sm"
              >
                WhatsApp
              </a>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
