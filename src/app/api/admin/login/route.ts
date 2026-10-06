import { NextResponse } from "next/server";
import {
  adminEmail,
  adminPassword,
  setAdminSession,
} from "@/lib/admin-auth";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as {
    email?: string;
    password?: string;
  };

  const email = body.email?.trim().toLowerCase() || "";
  const password = body.password || "";

  if (!email || !password) {
    return NextResponse.json(
      { error: "Enter email and password" },
      { status: 400 },
    );
  }

  if (email !== adminEmail() || password !== adminPassword()) {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 },
    );
  }

  await setAdminSession();
  return NextResponse.json({ ok: true });
}
