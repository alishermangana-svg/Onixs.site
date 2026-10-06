import { Resend } from "resend";
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact";
import { rateLimit } from "@/lib/rate-limit";
import { site } from "@/content/site";
import { createLead } from "@/lib/leads-store";

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "anonymous";

    const limited = rateLimit(`contact:${ip}`, 5, 60_000);
    if (!limited.ok) {
      return NextResponse.json(
        { error: "Too many requests. Try again shortly." },
        {
          status: 429,
          headers: limited.retryAfterSec
            ? { "Retry-After": String(limited.retryAfterSec) }
            : undefined,
        },
      );
    }

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Invalid input" },
        { status: 400 },
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    await createLead({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      service: parsed.data.service,
      budget: parsed.data.budget || "",
      message: parsed.data.message || "",
    });

    const to = process.env.CONTACT_TO_EMAIL || site.email;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.info("[contact] RESEND_API_KEY missing — enquiry saved to admin", {
        name: parsed.data.name,
        email: parsed.data.email,
        service: parsed.data.service,
        company: parsed.data.company,
      });
      return NextResponse.json({
        ok: true,
        note: "Enquiry saved to admin inbox.",
      });
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Onixs Website <onboarding@resend.dev>",
      to: [to],
      replyTo: parsed.data.email,
      subject: `New enquiry from ${parsed.data.name}`,
      text: [
        `Name: ${parsed.data.name}`,
        `Email: ${parsed.data.email}`,
        `Company: ${parsed.data.company || "—"}`,
        `Service: ${parsed.data.service}`,
        `Budget: ${parsed.data.budget || "—"}`,
        "",
        parsed.data.message || "(No message provided)",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json(
      { error: `Could not send message. Please email ${site.email}.` },
      { status: 500 },
    );
  }
}
