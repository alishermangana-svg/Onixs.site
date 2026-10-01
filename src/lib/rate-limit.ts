const hits = new Map<string, { count: number; resetAt: number }>();

/** Simple in-memory rate limit (per serverless instance). */
export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 60_000,
): { ok: boolean; retryAfterSec?: number } {
  const now = Date.now();
  const row = hits.get(key);
  if (!row || now > row.resetAt) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }
  if (row.count >= limit) {
    return {
      ok: false,
      retryAfterSec: Math.ceil((row.resetAt - now) / 1000),
    };
  }
  row.count += 1;
  return { ok: true };
}
