import Link from "next/link";
import { readLeads } from "@/lib/leads-store";

export default async function AdminOverviewPage() {
  const leads = await readLeads();
  const newest = leads.slice(0, 5);
  const counts = {
    total: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    won: leads.filter((l) => l.status === "won").length,
  };

  return (
    <div>
      <h1 className="text-2xl font-extrabold tracking-tight text-navy-ink md:text-3xl">
        Overview
      </h1>
      <p className="mt-1 text-sm text-muted">
        Your Onixs studio desk — leads first.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total leads", value: counts.total },
          { label: "New", value: counts.new },
          { label: "Contacted", value: counts.contacted },
          { label: "Won", value: counts.won },
        ].map((c) => (
          <div
            key={c.label}
            className="rounded-[18px] border border-border-light bg-white p-5"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
              {c.label}
            </p>
            <p className="mt-2 text-3xl font-extrabold text-navy-ink">{c.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[20px] border border-border-light bg-white p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-navy-ink">Recent enquiries</h2>
          <Link href="/admin/leads" className="text-sm font-semibold text-brand hover:underline">
            View all →
          </Link>
        </div>
        <ul className="mt-4 divide-y divide-border-light">
          {newest.map((l) => (
            <li key={l.id} className="flex items-center justify-between gap-3 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-navy-ink">
                  {l.name} · {l.company}
                </p>
                <p className="truncate text-xs text-muted">
                  {l.service} · {l.email}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-bold capitalize text-brand">
                {l.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
