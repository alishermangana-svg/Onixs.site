/**
 * Edge-safe session helpers (Web Crypto — works in middleware).
 */

export const ADMIN_COOKIE = "onixs_admin_session";

function secret() {
  return (
    process.env.ADMIN_SECRET ||
    process.env.ADMIN_PASSWORD ||
    "onixs-local-dev-secret"
  );
}

export function adminPassword() {
  return process.env.ADMIN_PASSWORD || "onixs-admin";
}

export function adminEmail() {
  return (process.env.ADMIN_EMAIL || "admin@onixs.ai").trim().toLowerCase();
}

function toHex(buffer: ArrayBuffer) {
  return [...new Uint8Array(buffer)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function sign(value: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(value),
  );
  return toHex(sig);
}

export async function createSessionToken() {
  const payload = `ok:${Date.now()}`;
  const sig = await sign(payload);
  return `${payload}.${sig}`;
}

export async function verifySessionToken(token: string | undefined | null) {
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  if (!payload.startsWith("ok:")) return false;
  const expected = await sign(payload);
  if (expected.length !== sig.length) return false;
  let mismatch = 0;
  for (let i = 0; i < expected.length; i += 1) {
    mismatch |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  }
  return mismatch === 0;
}
