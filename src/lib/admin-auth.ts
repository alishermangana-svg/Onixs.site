import { cookies } from "next/headers";
import {
  ADMIN_COOKIE,
  createSessionToken,
  verifySessionToken,
} from "@/lib/admin-session";

export {
  ADMIN_COOKIE,
  adminEmail,
  adminPassword,
  createSessionToken,
  verifySessionToken,
} from "@/lib/admin-session";

export async function isAdminAuthenticated() {
  const jar = await cookies();
  return verifySessionToken(jar.get(ADMIN_COOKIE)?.value);
}

export async function setAdminSession() {
  const jar = await cookies();
  jar.set(ADMIN_COOKIE, await createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAdminSession() {
  const jar = await cookies();
  jar.delete(ADMIN_COOKIE);
}
