// app/api/contact/route.ts
// Lead form handler — sends notification email to team via Brevo (SendinBlue) SMTP API
// and a confirmation email to the user.
//
// Required env vars (set in Vercel dashboard):
//   BREVO_API_KEY   — from app.brevo.com → SMTP & API → API Keys
//   CONTACT_TO_EMAIL — e.g. hello@societyapp.in  (where leads land)
//   CONTACT_FROM_EMAIL — verified sender in Brevo, e.g. no-reply@societyapp.in

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

const TYPE_LABEL: Record<string, string> = {
  demo:        "Book a product demo",
  pricing:     "Pricing & plan query",
  support:     "Technical support",
  partnership: "Partnership / reseller",
  press:       "Press / media enquiry",
  other:       "Other",
};

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
    const err = await res.text();
    throw new Error(`Brevo API error ${res.status}: ${err}`);
  }
  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // ── Validate required fields ─────────────────────────────────────────────
    const { name, email, message, type } = body;
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ── 1. Notify the team ────────────────────────────────────────────────────
    const teamEmailHtml = `
<!DOCTYPE html>
<html>
<body style="font-family:Inter,sans-serif;background:#F4F6F8;padding:32px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;border:1px solid #E5E7EB;">
    <div style="background:#0F2040;border-radius:12px;padding:20px 24px;margin-bottom:24px;">
      <h1 style="color:#fff;margin:0;font-size:20px;">📬 New Lead — SocietyApp</h1>
      <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:14px;">${TYPE_LABEL[type] || type}</p>
    </div>

    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:10px 0;color:#6B7280;width:140px;">Name</td><td style="padding:10px 0;font-weight:600;color:#0F2040;">${name}</td></tr>
      <tr style="border-top:1px solid #F3F4F6;"><td style="padding:10px 0;color:#6B7280;">Email</td><td style="padding:10px 0;color:#0D7377;"><a href="mailto:${email}" style="color:#0D7377;">${email}</a></td></tr>
      ${body.phone ? `<tr style="border-top:1px solid #F3F4F6;"><td style="padding:10px 0;color:#6B7280;">Phone</td><td style="padding:10px 0;font-weight:600;color:#0F2040;">${body.phone}</td></tr>` : ""}
      ${body.society ? `<tr style="border-top:1px solid #F3F4F6;"><td style="padding:10px 0;color:#6B7280;">Society</td><td style="padding:10px 0;font-weight:600;color:#0F2040;">${body.society}</td></tr>` : ""}
      ${body.units ? `<tr style="border-top:1px solid #F3F4F6;"><td style="padding:10px 0;color:#6B7280;">Units</td><td style="padding:10px 0;font-weight:600;color:#0F2040;">${body.units}</td></tr>` : ""}
      <tr style="border-top:1px solid #F3F4F6;"><td style="padding:10px 0;color:#6B7280;">Type</td><td style="padding:10px 0;font-weight:600;color:#0F2040;">${TYPE_LABEL[type] || type}</td></tr>
    </table>

    <div style="background:#F4F6F8;border-radius:12px;padding:16px 20px;margin-top:16px;">
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
      <p style="margin:0;color:#374151;font-size:14px;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
    </div>

    <div style="margin-top:24px;padding-top:20px;border-top:1px solid #E5E7EB;">
      <a href="mailto:${email}?subject=Re: Your SocietyApp enquiry" style="display:inline-block;background:#0D7377;color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-weight:700;font-size:14px;">
        Reply to ${name} →
      </a>
    </div>
  </div>
</body>
</html>`;

    await sendBrevoEmail({
      to: [{ email: process.env.CONTACT_TO_EMAIL || "hello@societyapp.in", name: "SocietyApp Team" }],
      subject: `[${TYPE_LABEL[type] || type}] New lead from ${name}${body.society ? ` — ${body.society}` : ""}`,
      htmlContent: teamEmailHtml,
      replyTo: { email, name },
    });

    // ── 2. Confirmation to the user ───────────────────────────────────────────
    const userEmailHtml = `
<!DOCTYPE html>
<html>
<body style="font-family:Inter,sans-serif;background:#F4F6F8;padding:32px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;border:1px solid #E5E7EB;">
    <div style="background:#0F2040;border-radius:12px;padding:20px 24px;margin-bottom:24px;text-align:center;">
      <div style="font-size:40px;margin-bottom:8px;">🏘️</div>
      <h1 style="color:#fff;margin:0;font-size:22px;">Thanks, ${name.split(" ")[0]}!</h1>
      <p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:14px;">We've received your message</p>
    </div>

    <p style="color:#374151;font-size:15px;line-height:1.7;margin-bottom:16px;">
      Our team will get back to you within <strong>2–4 hours</strong> on weekdays (Mon–Sat, 9 AM – 7 PM IST).
      For urgent queries, WhatsApp us at <a href="https://wa.me/9537495474" style="color:#0D7377;">+91 9537495474</a>.
    </p>

    <div style="background:#F4F6F8;border-radius:12px;padding:16px 20px;margin-bottom:24px;">
      <p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.08em;">While you wait</p>
      <ul style="margin:0;padding-left:20px;color:#374151;font-size:14px;line-height:1.9;">
        <li><a href="https://societyapp.in/features" style="color:#0D7377;">Explore all 22 features →</a></li>
        <li><a href="https://societyapp.in/pricing" style="color:#0D7377;">Compare pricing plans →</a></li>
        <li><a href="https://societyapp.in/blog" style="color:#0D7377;">Read our setup guides →</a></li>
      </ul>
    </div>

    <div style="text-align:center;padding:20px 0;border-top:1px solid #E5E7EB;">
      <p style="margin:0 0 12px;color:#6B7280;font-size:13px;">Download the app and explore on your own</p>
      <a href="https://play.google.com/store/apps/details?id=com.societymanagementcompany.societyapp" style="display:inline-block;background:#0F2040;color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-weight:700;font-size:14px;">
        📱 Download SocietyApp →
      </a>
    </div>

    <p style="color:#9CA3AF;font-size:12px;text-align:center;margin-top:20px;">
      SocietyApp • hello@societyapp.in • societyapp.in<br>
      You received this because you submitted our contact form.
    </p>
  </div>
</body>
</html>`;

    await sendBrevoEmail({
      to: [{ email, name }],
      subject: `We've received your message — SocietyApp`,
      htmlContent: userEmailHtml,
    });

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