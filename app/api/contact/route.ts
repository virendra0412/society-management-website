// app/api/contact/route.ts
// Lead form handler — proxies to the shared backend's public contact
// endpoint, which sends the notification email over the same SMTP setup
// the mobile app already uses. No email vendor config lives on the website
// anymore (previously called Brevo directly from here).
//
// Required env var (set in Vercel dashboard):
//   BACKEND_API_URL — base URL of the shared backend, e.g. https://api.societyapp.in
//   (falls back to http://localhost:5000 for local dev against a local backend)

import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  society?: string;
  units?: string;
  message: string;
  type: "demo" | "pricing" | "support" | "partnership" | "press" | "other";
}

const BACKEND_API_URL = process.env.BACKEND_API_URL || "http://localhost:5000";

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // ── Fast client-facing validation (backend re-validates too) ─────────────
    const { name, email, message } = body;
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ── Hand off to the backend, which sends the email via SMTP ──────────────
    const backendRes = await fetch(`${BACKEND_API_URL}/api/v1/public/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await backendRes.json().catch(() => null);

    if (!backendRes.ok) {
      console.error("[contact/route] Backend error:", backendRes.status, data);
      return NextResponse.json(
        { error: data?.message || "Failed to send message. Please try again or email us directly." },
        { status: backendRes.status === 429 ? 429 : 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route] Error:", err);
    // Don't expose internal errors to client
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}