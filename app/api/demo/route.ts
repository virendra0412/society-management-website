// app/api/demo/route.ts
// Demo booking handler — proxies to the shared backend's public demo
// endpoint, which sends the team alert over the same SMTP setup the
// mobile app already uses. No email vendor config lives on the website
// anymore (previously called Brevo directly from here).
//
// Required env var (same as app/api/contact/route.ts):
//   BACKEND_API_URL — base URL of the shared backend, e.g. https://api.societyapp.in
//   (falls back to http://localhost:5000 for local dev against a local backend)

import { NextRequest, NextResponse } from "next/server";

interface DemoPayload {
  name: string;
  email: string;
  phone?: string;
  society?: string;
  units?: string;
  // preferred slot is a free-text string — user types "Tuesday 3 PM" etc.
  // A proper booking integration (Cal.com / Calendly) can replace this field
  preferredSlot?: string;
  notes?: string;
}

const BACKEND_API_URL = process.env.BACKEND_API_URL || "http://localhost:5000";

export async function POST(req: NextRequest) {
  try {
    const body: DemoPayload = await req.json();

    // ── Fast client-facing validation (backend re-validates too) ─────────────
    const { name, email } = body;
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ── Hand off to the backend, which sends the email via SMTP ──────────────
    const backendRes = await fetch(`${BACKEND_API_URL}/api/v1/public/demo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await backendRes.json().catch(() => null);

    if (!backendRes.ok) {
      console.error("[demo/route] Backend error:", backendRes.status, data);
      return NextResponse.json(
        { error: data?.message || "Failed to book demo. Please try emailing us directly at hello@societyapp.in" },
        { status: backendRes.status === 429 ? 429 : 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[demo/route] Error:", err);
    return NextResponse.json(
      { error: "Failed to book demo. Please try emailing us directly at hello@societyapp.in" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}