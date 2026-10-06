import { NextResponse } from "next/server";
import { z } from "zod";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { readSettings, writeSettings } from "@/lib/settings-store";

const settingsSchema = z.object({
  name: z.string().min(1).max(80),
  email: z.string().email(),
  phone: z.string().min(5).max(40),
  whatsapp: z.string().url(),
  address: z.string().min(5).max(200),
  studioLabel: z.string().min(2).max(80),
  hours: z.string().min(2).max(80),
  tagline: z.string().min(2).max(160),
  notifyEmail: z.string().email(),
  socials: z.array(
    z.object({
      label: z.string().min(1).max(40),
      href: z.string().min(1).max(300),
    }),
  ),
});

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const settings = await readSettings();
  return NextResponse.json({ settings });
}

export async function PUT(req: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const parsed = settingsSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Invalid input" },
      { status: 400 },
    );
  }
  const ok = await writeSettings(parsed.data);
  return NextResponse.json({ ok, settings: parsed.data });
}
