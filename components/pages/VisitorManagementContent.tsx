"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const flows = [
  {
    id: "A",
    title: "Pre-Approved Invite",
    subtitle: "Resident sends OTP before visitor arrives",
    emoji: "📨",
    color: "teal",
    steps: [
      { icon: "📱", label: "Resident creates invite", detail: "Opens app → Visitors → Invite. Fills visitor name, phone, purpose & expected arrival time." },
      { icon: "🔢", label: "OTP generated", detail: "Backend generates a 6-digit OTP valid for 24 hours or 2 hours after expected arrival." },
      { icon: "💬", label: "OTP shared with visitor", detail: "Resident shares OTP via WhatsApp or SMS. Visitor arrives and quotes OTP at the gate." },
      { icon: "✅", label: "Guard verifies & logs entry", detail: "Guard enters OTP in app → backend validates → entry timestamp recorded automatically." },
      { icon: "🚶", label: "Guard marks exit", detail: "When visitor leaves, guard taps Exit. Full audit trail stored in the cloud." },
    ],
  },
  {
    id: "B",
    title: "Walk-In",
    subtitle: "Guard logs an unannounced visitor",
    emoji: "🚶",
    color: "amber",
    steps: [
      { icon: "🛡️", label: "Guard logs walk-in", detail: "Guard opens app → Log Walk-In → enters visitor name and host flat number." },
      { icon: "🔔", label: "Push notification fires", detail: "Resident gets an instant push: 'Someone is at the gate asking for you.'" },
      { icon: "👍", label: "Resident approves or rejects", detail: "Resident taps Approve or Reject from their phone — no need to go to the gate." },
      { icon: "📋", label: "Entry or denial recorded", detail: "Decision is logged with timestamp. Rejected visitors are recorded for security review." },
      { icon: "🚶", label: "Guard marks exit", detail: "Exit logged when visitor leaves. Complete visitor lifecycle captured." },
    ],
  },
  {
    id: "C",
    title: "Trusted Visitors",
    subtitle: "Maids, cooks & drivers with standing passes",
    emoji: "🏠",
    color: "green",
    steps: [
      { icon: "📝", label: "Resident registers trusted visitor", detail: "Adds name, category (maid/cook/driver), and pass type: daily, monthly, or permanent." },
      { icon: "🗓️", label: "Optional schedule set", detail: "Resident can restrict access to specific days and time windows — e.g. Mon–Fri, 8–10 AM." },
      { icon: "✅", label: "Guard auto-approves", detail: "Guard looks up visitor by name or phone. Backend checks schedule and auto-approves silently." },
      { icon: "📊", label: "Daily digest sent", detail: "Resident gets one push at 9 PM with all trusted visitor entries that day — not per-visit noise." },
      { icon: "🚫", label: "Resident can revoke anytime", detail: "One tap to expire the pass. Auto-expiry reminder sent 3 days before monthly passes end." },
    ],
  },
  {
    id: "D",
    title: "Delivery",
    subtitle: "Auto-exit timer for couriers & parcels",
    emoji: "📦",
    color: "navy",
    steps: [
      { icon: "📦", label: "Guard logs delivery walk-in", detail: "Same as Walk-In flow but purpose is set to 'Delivery'. Resident notified immediately." },
      { icon: "⏱️", label: "Auto-exit timer starts", detail: "On approval, a 15-minute countdown begins automatically. No manual exit needed." },
      { icon: "🤖", label: "System auto-exits", detail: "A cron job runs every 5 minutes and exits delivery visitors past their timer." },
      { icon: "🚪", label: "Guard can exit early", detail: "If courier leaves before 15 minutes, guard can tap early exit at any time." },
    ],
  },
];

const guardFeatures = [
  { icon: "📲", label: "No separate device", detail: "Guard uses the same SocietyApp — no QR scanners or hardware terminals needed." },
  { icon: "🔢", label: "OTP verify screen", detail: "Tap Verify OTP, enter 6 digits, see visitor details and approve in one tap." },
  { icon: "📋", label: "Walk-in form", detail: "Name + host flat — takes under 15 seconds. Autocomplete on known flats." },
  { icon: "🏷️", label: "Trusted pass check-in", detail: "Search by name or phone. Pass validity shown instantly with schedule." },
];

const relatedModules = [
  { icon: "🛡️", title: "Security Guard Portal", href: "/features", desc: "Dedicated UX for guard shift management and handover." },
  { icon: "💸", title: "Maintenance & Billing", href: "/features/maintenance", desc: "Auto-generate monthly bills and track payment status." },
  { icon: "📢", title: "Notice Board", href: "/features/notices", desc: "Push tagged notices to all residents in seconds." },
];

export default function VisitorManagementContent() {
  const { tr } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16">
        <section className="bg-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[100px] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-5 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-3 py-1.5 mb-6">
                <span className="text-teal text-xs font-bold uppercase tracking-widest">🚪 Visitor Management</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Know exactly who enters your society —<br />
                <span className="text-teal">before they walk in.</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-4">
                4 smart flows covering every visitor scenario. Works entirely on smartphones —
                <strong className="text-white/80"> no hardware, no QR scanners, no installation costs.</strong>
              </p>
              <p className="text-white/40 text-sm mb-8">Every entry logged with timestamp · Cloud audit trail · Zero per-unit hardware cost</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/register" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/25">
                  {tr.vm_cta_setup}
                </Link>
                <Link href="/pricing" className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/20 text-white/80 font-semibold text-sm hover:border-white/40 hover:text-white transition-colors">
                  {tr.common_view_pricing} →
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
                  <div className="text-center mb-5">
                    <div className="text-5xl mb-2">🏠</div>
                    <p className="text-white font-display font-bold text-lg">Gate Entry Log</p>
                    <p className="text-white/40 text-xs">Live · Today</p>
                  </div>
                  {[
                    { name: "Ravi Kumar", type: "Pre-Approved", time: "10:32 AM", status: "green", badge: "OTP ✓" },
                    { name: "Swiggy Delivery", type: "Delivery", time: "11:05 AM", status: "amber", badge: "Auto-exit" },
                    { name: "Sunita (Maid)", type: "Trusted", time: "08:15 AM", status: "teal", badge: "Pass ✓" },
                    { name: "Anand Shah", type: "Walk-In", time: "02:18 PM", status: "green", badge: "Approved" },
                  ].map((v, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-3 py-2.5 mb-2">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${v.status === "green" ? "bg-green" : v.status === "amber" ? "bg-amber" : "bg-teal"}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-semibold truncate">{v.name}</p>
                        <p className="text-white/40 text-[10px]">{v.type} · {v.time}</p>
                      </div>
                      <span className="text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded-full">{v.badge}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute -top-4 -right-4 bg-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  No Hardware Needed
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 40L1440 40L1440 10C1200 40 720 0 0 20L0 40Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 py-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-navy mb-3">The problem with today's gate entry</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Most Indian societies still rely on paper registers, WhatsApp calls, or no process at all.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📓", title: "Paper registers at gate", desc: "No searchability, no timestamps, easy to fake. Lost during guard handovers." },
              { icon: "📱", title: "WhatsApp chaos", desc: "Guard calls resident, resident misses call, visitor waits. No audit trail at all." },
              { icon: "🖥️", title: "Hardware is expensive", desc: "QR scanners and RFID readers cost ₹15,000–₹50,000 per gate plus annual maintenance." },
            ].map((p, i) => (
              <div key={i} className="bg-white border border-red-100 border-l-4 border-l-red-400 rounded-2xl p-6">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-block bg-teal/10 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">4 Visitor Flows</div>
              <h2 className="font-display text-3xl font-bold text-navy mb-3">Every visitor scenario, covered</h2>
              <p className="text-gray-500 max-w-xl mx-auto">From pre-planned visits to unannounced deliveries — SocietyApp handles every case with a purpose-built flow.</p>
            </div>

            <div className="space-y-16">
              {flows.map((flow, fi) => (
                <div key={flow.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${fi % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={fi % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-teal/10 flex items-center justify-center text-xl">{flow.emoji}</div>
                      <div>
                        <div className="text-teal text-xs font-bold uppercase tracking-widest">Flow {flow.id}</div>
                        <h3 className="font-display text-2xl font-bold text-navy">{flow.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-500 mb-6">{flow.subtitle}</p>
                    <div className="space-y-3">
                      {flow.steps.map((step, si) => (
                        <div key={si} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-9 h-9 rounded-xl bg-teal/10 flex items-center justify-center text-lg flex-shrink-0">{step.icon}</div>
                            {si < flow.steps.length - 1 && <div className="w-0.5 h-full bg-teal/20 mt-1" />}
                          </div>
                          <div className="pb-4">
                            <p className="font-semibold text-navy text-sm mb-0.5">{step.label}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`${fi % 2 === 1 ? "lg:order-1" : ""} flex justify-center`}>
                    <div className="bg-light rounded-3xl p-6 w-full max-w-sm">
                      <p className="text-navy font-display font-bold text-sm mb-4 flex items-center gap-2">
                        <span>{flow.emoji}</span> Flow {flow.id} — {flow.title}
                      </p>
                      <div className="space-y-2">
                        {flow.steps.map((step, si) => (
                          <div key={si} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                            <div className="w-6 h-6 rounded-full bg-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{si + 1}</div>
                            <span className="text-navy text-sm font-medium">{step.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <div className="inline-block bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">Security Guard View</div>
              <h2 className="font-display text-3xl font-bold text-white mb-3">One app for the guard, too</h2>
              <p className="text-white/50 max-w-xl mx-auto">The guard uses the exact same SocietyApp. No separate device, no training cost, no hardware install.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {guardFeatures.map((f, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <p className="text-white font-semibold mb-1">{f.label}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 py-16">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-10">What makes it powerful</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "☁️", title: "Cloud audit trail", desc: "Every entry with timestamp, guard name, resident approval, and visitor photo (optional). Tamper-evident." },
              { icon: "📵", title: "Zero hardware", desc: "No QR scanners. No RFID cards. No installation. Guard uses the same phone they already carry." },
              { icon: "🔒", title: "OTP expiry control", desc: "OTPs expire after 24h or 2h post-expected arrival. Residents can cancel invites anytime." },
              { icon: "📅", title: "Schedule-based passes", desc: "Trusted visitors auto-approved only on allowed days and time windows." },
              { icon: "🔔", title: "Instant push alerts", desc: "Resident notified in under 2 seconds when a visitor is logged at the gate." },
              { icon: "📊", title: "Full gate reports", desc: "Export daily, weekly, or monthly gate logs. Filter by visitor type, guard, or flat." },
            ].map((f, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-display font-bold text-navy mb-1">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-10">{tr.vm_faq_title}</h2>
            <div className="space-y-4">
              {[
                { q: "Does the security guard need a separate app or device?", a: "No. The guard uses the same SocietyApp as residents and admins. Any Android or iOS smartphone works. No additional hardware, QR scanner, or installation required." },
                { q: "What happens if a visitor's OTP expires?", a: "The guard will see an 'OTP expired' message. The resident simply needs to generate a new invite. Expired OTPs are automatically logged for the audit trail." },
                { q: "Can I set specific timings for my maid's entry?", a: "Yes. When registering a trusted visitor, you can set allowed days (e.g., Monday to Friday) and time windows (e.g., 08:00 AM to 10:00 AM). Outside these hours, the guard's check-in is blocked." },
                { q: "Is visitor data stored securely?", a: "All visitor logs are stored in encrypted cloud storage. Only society admins and the relevant resident can view their visitor history. Data is never shared with third parties." },
                { q: "Can I see who approved and who rejected entries?", a: "Yes. The gate log shows the resident's name who approved/rejected, the guard who logged the entry, timestamps, and the visitor's purpose — a complete audit trail." },
              ].map((faq, i) => (
                <details key={i} className="group border border-gray-100 rounded-2xl bg-light overflow-hidden">
                  <summary className="px-5 py-4 font-semibold text-navy cursor-pointer list-none flex items-center justify-between gap-3">
                    <span>{faq.q}</span>
                    <span className="text-teal text-lg group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 py-12">
          <h2 className="font-display text-xl font-bold text-navy mb-6">Related Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedModules.map((m, i) => (
              <Link key={i} href={m.href} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-teal/30 hover:shadow-md transition-all group">
                <div className="text-3xl mb-3">{m.icon}</div>
                <h3 className="font-display font-bold text-navy mb-1 group-hover:text-teal transition-colors">{m.title}</h3>
                <p className="text-gray-500 text-sm">{m.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-teal py-16">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{tr.vm_cta_headline}</h2>
            <p className="text-white/70 mb-8">{tr.vm_cta_sub}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/register" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-teal font-bold text-sm hover:bg-white/90 transition-colors shadow-lg">
                Register Your Society Free →
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/40 text-white font-semibold text-sm hover:border-white/80 transition-colors">
                {tr.vm_cta_compare}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
