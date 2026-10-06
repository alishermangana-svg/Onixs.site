"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { OnixsLogo } from "@/components/OnixsLogo";

export function AdminLoginForm() {
  const router = useRouter();
  const search = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        setError(data.error || "Login failed");
        return;
      }
      const next = search.get("next") || "/admin";
      router.replace(next);
      router.refresh();
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-[#f4f7f6] px-4">
      <div className="w-full max-w-md rounded-[24px] border border-border-light bg-white p-8 shadow-[0_20px_50px_rgba(11,59,54,0.08)]">
        <OnixsLogo href="/" quiet />
        <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-navy-ink">
          Studio desk
        </h1>
        <p className="mt-2 text-sm text-muted">
          Sign in to manage leads and studio settings.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="admin-email"
              className="text-xs font-bold uppercase tracking-[0.12em] text-muted"
            >
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-full border border-border-light bg-[#f7faf9] px-4 py-3 text-sm outline-none ring-brand/30 focus:ring-2"
              placeholder="admin@onixs.ai"
              autoComplete="username"
            />
          </div>
          <div>
            <label
              htmlFor="admin-password"
              className="text-xs font-bold uppercase tracking-[0.12em] text-muted"
            >
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-full border border-border-light bg-[#f7faf9] px-4 py-3 text-sm outline-none ring-brand/30 focus:ring-2"
              placeholder="Admin password"
              autoComplete="current-password"
            />
          </div>
          {error ? (
            <p className="text-sm font-medium text-navy-ink">{error}</p>
          ) : null}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
        <p className="mt-6 text-center text-[11px] leading-relaxed text-muted">
          Local defaults:{" "}
          <code className="font-semibold">admin@onixs.ai</code> /{" "}
          <code className="font-semibold">onixs-admin</code>
        </p>
      </div>
    </div>
  );
}
