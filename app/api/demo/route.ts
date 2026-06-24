// app/api/demo/route.ts
// Demo booking handler — sends a team alert and a calendar-ready confirmation to the booker.
//
// Required env vars (same as contact route):
//   BREVO_API_KEY
//   CONTACT_TO_EMAIL
//   CONTACT_FROM_EMAIL

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

async function sendBrevoEmail(payload: {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  replyTo?: { email: string; name?: string };
}) {
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: "SocietyApp",
        email: process.env.CONTACT_FROM_EMAIL || "no-reply@societyapp.in",
      },
      ...payload,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Brevo API error ${res.status}: ${text}`);
  }
  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const body: DemoPayload = await req.json();

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

    // ── 1. Team alert ─────────────────────────────────────────────────────────
    const teamHtml = `
<!DOCTYPE html>
<html>
<body style="font-family:Inter,sans-serif;background:#F4F6F8;padding:32px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;border:1px solid #E5E7EB;">
    <div style="background:#0D7377;border-radius:12px;padding:20px 24px;margin-bottom:24px;">
      <h1 style="color:#fff;margin:0;font-size:20px;">📅 New Demo Request — SocietyApp</h1>
      <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;font-size:14px;">Someone wants a 15-minute walkthrough</p>
    </div>

    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:10px 0;color:#6B7280;width:160px;">Name</td><td style="padding:10px 0;font-weight:600;color:#0F2040;">${name}</td></tr>
      <tr style="border-top:1px solid #F3F4F6;"><td style="padding:10px 0;color:#6B7280;">Email</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#0D7377;">${email}</a></td></tr>
      ${body.phone ? `<tr style="border-top:1px solid #F3F4F6;"><td style="padding:10px 0;color:#6B7280;">Phone</td><td style="padding:10px 0;font-weight:600;color:#0F2040;">${body.phone}</td></tr>` : ""}
      ${body.society ? `<tr style="border-top:1px solid #F3F4F6;"><td style="padding:10px 0;color:#6B7280;">Society</td><td style="padding:10px 0;font-weight:600;color:#0F2040;">${body.society}</td></tr>` : ""}
      ${body.units ? `<tr style="border-top:1px solid #F3F4F6;"><td style="padding:10px 0;color:#6B7280;">Units</td><td style="padding:10px 0;font-weight:600;color:#0F2040;">${body.units}</td></tr>` : ""}
      ${body.preferredSlot ? `<tr style="border-top:1px solid #F3F4F6;"><td style="padding:10px 0;color:#6B7280;">Preferred Slot</td><td style="padding:10px 0;font-weight:700;color:#F59E0B;">${body.preferredSlot}</td></tr>` : ""}
    </table>

    ${body.notes ? `
    <div style="background:#F4F6F8;border-radius:12px;padding:16px 20px;margin-top:16px;">
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.08em;">Additional Notes</p>
      <p style="margin:0;color:#374151;font-size:14px;line-height:1.6;">${body.notes.replace(/\n/g, "<br>")}</p>
    </div>` : ""}

    <div style="background:#FEF3C7;border-radius:12px;padding:14px 18px;margin-top:16px;">
      <p style="margin:0;font-size:13px;color:#92400E;font-weight:600;">
        ⚡ Action required: Confirm this demo slot and send a calendar invite to ${email} within 2 hours.
      </p>
    </div>

    <div style="margin-top:24px;padding-top:20px;border-top:1px solid #E5E7EB;">
      <a href="mailto:${email}?subject=Your SocietyApp demo is confirmed&body=Hi ${name},%0D%0A%0D%0AGreat to hear from you! I'd love to show you SocietyApp.%0D%0A%0D%0APlease pick a time that works: calendly.com/societyapp" style="display:inline-block;background:#0D7377;color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-weight:700;font-size:14px;">
        Send Calendar Invite →
      </a>
    </div>
  </div>
</body>
</html>`;

    await sendBrevoEmail({
      to: [{ email: process.env.CONTACT_TO_EMAIL || "hello@societyapp.in", name: "SocietyApp Team" }],
      subject: `📅 Demo request from ${name}${body.society ? ` — ${body.society}` : ""}${body.preferredSlot ? ` [${body.preferredSlot}]` : ""}`,
      htmlContent: teamHtml,
      replyTo: { email, name },
    });

    // ── 2. Confirmation to booker ─────────────────────────────────────────────
    const userHtml = `
<!DOCTYPE html>
<html>
<body style="font-family:Inter,sans-serif;background:#F4F6F8;padding:32px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;border:1px solid #E5E7EB;">
    <div style="background:#0F2040;border-radius:12px;padding:24px;margin-bottom:24px;text-align:center;">
      <div style="font-size:48px;margin-bottom:10px;">📅</div>
      <h1 style="color:#fff;margin:0;font-size:22px;">Demo request received!</h1>
      <p style="color:rgba(255,255,255,0.6);margin:8px 0 0;font-size:14px;">We'll confirm your slot within 2 hours</p>
    </div>

    <p style="color:#374151;font-size:15px;line-height:1.7;margin-bottom:20px;">
      Hi ${name.split(" ")[0]}, thanks for your interest in SocietyApp! One of our product specialists will reach out
      ${body.preferredSlot ? `to confirm your <strong>${body.preferredSlot}</strong> slot` : "within 2 hours"} via email${body.phone ? " or phone" : ""}.
    </p>

    <div style="background:#F4F6F8;border-radius:12px;padding:20px;margin-bottom:24px;">
      <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.08em;">What to expect in the demo</p>
      <ul style="margin:0;padding-left:20px;color:#374151;font-size:14px;line-height:2;">
        <li>Live walkthrough of Visitor Management (OTP flow, trusted passes)</li>
        <li>Maintenance billing demo with defaulter reports</li>
        <li>Committee & resident approval flows</li>
        <li>Q&A — bring any questions about your society's specific needs</li>
      </ul>
    </div>

    <div style="background:#0D7377;border-radius:12px;padding:20px;margin-bottom:24px;text-align:center;">
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:0 0 12px;">Can't wait? Explore the app yourself right now</p>
      <a href="https://play.google.com/store/apps/details?id=com.societymanagementcompany.societyapp" style="display:inline-block;background:#fff;color:#0D7377;text-decoration:none;padding:12px 28px;border-radius:10px;font-weight:700;font-size:14px;">
        📱 Download Free →
      </a>
    </div>

    <div style="padding:16px 20px;background:#FEF3C7;border-radius:12px;margin-bottom:20px;">
      <p style="margin:0;font-size:13px;color:#92400E;">
        <strong>Need to reach us sooner?</strong> WhatsApp us at
        <a href="https://wa.me/919876543210" style="color:#B45309;">+91 98765 43210</a> — we respond within 2 hours on weekdays.
      </p>
    </div>

    <p style="color:#9CA3AF;font-size:12px;text-align:center;margin:0;">
      SocietyApp • hello@societyapp.in • societyapp.in
    </p>
  </div>
</body>
</html>`;

    await sendBrevoEmail({
      to: [{ email, name }],
      subject: `Your SocietyApp demo is confirmed — we'll be in touch soon`,
      htmlContent: userHtml,
    });

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