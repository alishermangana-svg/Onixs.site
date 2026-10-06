"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { OnixsLogo } from "@/components/OnixsLogo";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/admin", label: "Overview", exact: true },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/settings", label: "Settings" },
] as const;

export function AdminShell({
  children,
  newCount = 0,
}: {
  children: React.ReactNode;
  newCount?: number;
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-svh bg-[#f4f7f6] text-navy-ink">
      <div className="mx-auto flex min-h-svh max-w-[1400px]">
        <aside className="hidden w-56 shrink-0 flex-col border-r border-border-light bg-white px-4 py-6 md:flex">
          <OnixsLogo href="/admin" quiet size="sm" />
          <p className="mt-2 px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            Studio desk
          </p>
          <nav className="mt-8 flex flex-1 flex-col gap-1">
            {nav.map((item) => {
              const exact = "exact" in item && item.exact;
              const active = exact
                ? pathname === item.href
                : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold transition",
                    active
                      ? "bg-brand/10 text-brand"
                      : "text-muted hover:bg-mist hover:text-navy-ink",
                  )}
                >
                  <span>{item.label}</span>
                  {item.href === "/admin/leads" && newCount > 0 ? (
                    <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-white">
                      {newCount}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto space-y-2 border-t border-border-light pt-4">
            <Link
              href="/"
              className="block rounded-xl px-3 py-2 text-sm font-semibold text-muted hover:text-brand"
            >
              ← View site
            </Link>
            <button
              type="button"
              onClick={logout}
              className="w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-muted hover:bg-mist hover:text-navy-ink"
            >
              Log out
            </button>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between gap-3 border-b border-border-light bg-white px-4 py-3 md:hidden">
            <OnixsLogo href="/admin" quiet size="sm" />
            <div className="flex gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-border-light px-3 py-1.5 text-xs font-semibold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </header>
          <main className="flex-1 px-4 py-6 sm:px-6 md:px-8 md:py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
