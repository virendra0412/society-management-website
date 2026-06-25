import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — SocietyApp",
  description:
    "SocietyApp's Privacy Policy. How we collect, use, store, and protect your personal data and your society's information.",
};

const lastUpdated = "1 January 2025";
const effectiveDate = "1 January 2025";

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    content: [
      {
        type: "para",
        text: "SocietyApp (\"we\", \"our\", or \"us\") is committed to protecting the privacy of every individual who uses our platform — whether you are a society secretary, a resident, a security guard, or a committee member. This Privacy Policy explains what data we collect, why we collect it, how we use it, and what rights you have over it.",
      },
      {
        type: "para",
        text: "This policy applies to the SocietyApp mobile application (iOS and Android), the website at societyapp.in, and all related APIs and services. By registering or using SocietyApp, you agree to the practices described in this policy.",
      },
      {
        type: "highlight",
        text: "We do not sell your personal data. We do not share your society's data with other societies. Resident data stays within the society's account.",
      },
    ],
  },
  {
    id: "data-we-collect",
    title: "2. Data We Collect",
    content: [
      {
        type: "para",
        text: "We collect only the data we need to run the platform. Below is a breakdown by category:",
      },
      {
        type: "table",
        rows: [
          ["Category", "Examples", "Why We Collect It"],
          ["Account Data", "Name, email, phone number, password (hashed)", "To create and authenticate your account"],
          ["Society Data", "Society name, address, city, unit count, wing names", "To set up and identify your society's workspace"],
          ["Residential Data", "Flat number, wing, vehicle number", "To map you to your flat and enable features like parking and billing"],
          ["Visitor Data", "Visitor name, phone, OTP, entry/exit times, purpose", "To operate the gate management feature"],
          ["Maintenance Data", "Bill amounts, payment records, payment method", "To generate bills and track collection"],
          ["Device Data", "Device model, OS version, push notification token (FCM)", "To send push notifications and improve app performance"],
          ["Usage Data", "Screens visited, features used, error logs", "To fix bugs and improve the product"],
          ["Communication Data", "Messages in Community Help posts, notice content", "To provide notice board and community features"],
        ],
      },
      {
        type: "para",
        text: "We do not collect biometric data, financial account numbers, Aadhaar numbers, or PAN numbers. We do not require identity documents to sign up.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Data",
    content: [
      {
        type: "list",
        items: [
          "To provide and operate the SocietyApp platform and all 22 modules",
          "To authenticate your identity when you log in",
          "To send push notifications for visitor arrivals, maintenance bills, notices, and complaint updates",
          "To generate maintenance bills, payment receipts, and defaulter reports",
          "To create and maintain visitor entry logs",
          "To send transactional emails (account approval, password reset, bill reminders)",
          "To monitor platform health, fix bugs, and prevent fraud",
          "To comply with legal obligations (tax records, law enforcement requests with valid court orders)",
          "To improve our product based on anonymised, aggregated usage patterns",
        ],
      },
      {
        type: "para",
        text: "We do not use your data for advertising. SocietyApp does not display ads and does not share data with advertising platforms.",
      },
    ],
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing & Third Parties",
    content: [
      {
        type: "para",
        text: "We share data only with the following trusted service providers who help us operate the platform. All providers are contractually bound to handle data securely and only as instructed by us:",
      },
      {
        type: "list",
        items: [
          "Cloud Hosting (MongoDB Atlas, AWS / Railway.app): to store your data securely",
          "Email Service (Brevo / Sendinblue): to send transactional emails",
          "Push Notifications (Firebase Cloud Messaging / Expo): to deliver real-time alerts to your device",
          "Error Monitoring (Sentry): to capture and fix application crashes",
          "Analytics (Google Analytics, Microsoft Clarity): anonymised, aggregated usage data only",
          "Payment Gateway (if and when integrated): payment processing only — we do not store card details",
        ],
      },
      {
        type: "para",
        text: "We do not share your personal data with other societies, landlords, property managers, or any third party not listed above. We will never sell your data.",
      },
      {
        type: "para",
        text: "If we are required by law, court order, or government authority to disclose data, we will do so only to the minimum extent required and will notify you where legally permitted.",
      },
    ],
  },
  {
    id: "data-storage",
    title: "5. Data Storage & Security",
    content: [
      {
        type: "list",
        items: [
          "All data is stored on encrypted servers. Data in transit is protected by TLS 1.2 / 1.3",
          "Passwords are hashed using bcrypt — we never store plain-text passwords",
          "FCM/push tokens are stored with select:false, meaning they are never included in general API responses",
          "Refresh tokens are stored as hashed values, not plain tokens",
          "MongoDB Atlas clusters are configured with IP allowlisting and TLS encryption at rest",
          "We maintain an audit log of all admin actions (approve, reject, publish, delete) which cannot be altered",
          "Backups are taken daily and retained for 30 days",
        ],
      },
      {
        type: "para",
        text: "While we take strong measures to protect your data, no system is 100% secure. If you suspect unauthorized access to your account, contact us immediately at security@societyapp.in.",
      },
    ],
  },
  {
    id: "retention",
    title: "6. Data Retention",
    content: [
      {
        type: "table",
        rows: [
          ["Data Type", "Retention Period"],
          ["Active account data", "Until account deletion is requested"],
          ["Visitor entry logs", "12 months from the date of entry"],
          ["Maintenance payment records", "7 years (financial record requirement)"],
          ["Push notification logs", "30 days"],
          ["Error and crash logs", "90 days"],
          ["Deleted user accounts", "30 days (then permanently purged)"],
        ],
      },
    ],
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: [
      {
        type: "para",
        text: "You have the following rights over your data. To exercise any of these rights, contact us at privacy@societyapp.in from your registered email address:",
      },
      {
        type: "list",
        items: [
          "Right to Access: Request a copy of all personal data we hold about you",
          "Right to Correction: Request correction of inaccurate or incomplete data",
          "Right to Deletion: Request deletion of your account and personal data (subject to legal retention requirements)",
          "Right to Portability: Request your data in a machine-readable format (JSON or CSV)",
          "Right to Withdraw Consent: For optional features (e.g., marketing emails), you can opt out at any time via your profile settings",
          "Right to Object: Object to our processing your data for analytics purposes",
        ],
      },
      {
        type: "para",
        text: "We will respond to all requests within 15 working days. Some requests may require identity verification before we can act.",
      },
    ],
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: [
      {
        type: "para",
        text: "SocietyApp is not intended for use by persons under the age of 18. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us at privacy@societyapp.in and we will delete it promptly.",
      },
    ],
  },
  {
    id: "cookies",
    title: "9. Cookies on Our Website",
    content: [
      {
        type: "para",
        text: "Our website (societyapp.in) uses cookies as described in our Cookie Policy. The SocietyApp mobile application does not use browser cookies. See our full Cookie Policy for details.",
      },
      {
        type: "link",
        text: "Read the full Cookie Policy →",
        href: "/cookies",
      },
    ],
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    content: [
      {
        type: "para",
        text: "We may update this Privacy Policy from time to time. When we make material changes, we will notify society admins by email and display a notice in the app for 7 days. The 'Last Updated' date at the top of this page will reflect the most recent revision.",
      },
      {
        type: "para",
        text: "Continuing to use SocietyApp after the effective date of a revised policy means you accept the updated terms.",
      },
    ],
  },
  {
    id: "contact",
    title: "11. Contact Us",
    content: [
      {
        type: "para",
        text: "For any privacy-related questions, requests, or concerns, please contact our Privacy team:",
      },
      {
        type: "list",
        items: [
          "Email: privacy@societyapp.in",
          "Response time: within 15 working days",
          "Postal: SocietyApp Technologies Pvt. Ltd., Ahmedabad, Gujarat, India",
        ],
      },
    ],
  },
];

function renderContent(item: (typeof sections)[0]["content"][0], idx: number) {
  switch (item.type) {
    case "para":
      return (
        <p key={idx} className="text-gray-600 leading-relaxed text-[15px]">
          {"text" in item ? item.text : ""}
        </p>
      );
    case "highlight":
      return (
        <div
          key={idx}
          className="bg-teal/8 border border-teal/20 rounded-xl px-5 py-4 flex items-start gap-3"
          style={{ backgroundColor: "rgba(13,115,119,0.06)" }}
        >
          <span className="text-teal text-lg mt-0.5 flex-shrink-0">✓</span>
          <p className="text-teal font-semibold text-[15px] leading-relaxed">
            {"text" in item ? item.text : ""}
          </p>
        </div>
      );
    case "list":
      return (
        <ul key={idx} className="space-y-2.5">
          {"items" in item &&
            item.items?.map((li: string, j: number) => (
              <li key={j} className="flex items-start gap-2.5 text-gray-600 text-[15px] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-2" />
                {li}
              </li>
            ))}
        </ul>
      );
    case "table":
      return (
        <div key={idx} className="overflow-x-auto -mx-1">
          <table className="w-full text-sm border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-navy text-white">
                {"rows" in item &&
                  item.rows?.[0]?.map((cell: string, j: number) => (
                    <th key={j} className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide first:rounded-tl-xl last:rounded-tr-xl">
                      {cell}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {"rows" in item &&
                item.rows?.slice(1).map((row: string[], ri: number) => (
                  <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {row.map((cell: string, j: number) => (
                      <td key={j} className="px-4 py-3 text-gray-600 border-b border-gray-100 align-top leading-relaxed">
                        {j === 0 ? <strong className="text-navy font-semibold">{cell}</strong> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      );
    case "link":
      return (
        <Link
          key={idx}
          href={"href" in item ? (item.href ?? "#") : "#"}
          className="inline-flex items-center gap-1 text-teal font-semibold text-sm hover:underline"
        >
          {"text" in item ? item.text : ""}
        </Link>
      );
    default:
      return null;
  }
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-light">
        {/* Hero */}
        <div className="bg-navy pt-24 pb-12">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-3.5 py-1.5 mb-5">
              <span className="text-teal text-xs font-bold uppercase tracking-widest">Legal</span>
            </div>
            <h1 className="font-display text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-white/50 text-base leading-relaxed max-w-lg mx-auto">
              Your data, your rights, our responsibilities — explained clearly.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-white/30 text-xs">
              <span>Last updated: <strong className="text-white/50">{lastUpdated}</strong></span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Effective: <strong className="text-white/50">{effectiveDate}</strong></span>
            </div>
          </div>
        </div>

        {/* Table of contents + content */}
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start">

            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Contents</p>
                <ul className="space-y-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-sm text-gray-500 hover:text-teal transition-colors py-1 leading-snug"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-2">Questions?</p>
                  <a
                    href="mailto:privacy@societyapp.in"
                    className="text-xs text-teal font-semibold hover:underline"
                  >
                    privacy@societyapp.in
                  </a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-28 bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
                  <h2 className="font-display text-xl font-bold text-navy mb-5 pb-4 border-b border-gray-100">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((item, idx) => renderContent(item, idx))}
                  </div>
                </div>
              ))}

              {/* Related legal links */}
              <div className="bg-navy rounded-2xl p-7 text-white">
                <h3 className="font-display font-bold text-lg mb-2">Related Legal Documents</h3>
                <p className="text-white/50 text-sm mb-5">Other policies that govern your use of SocietyApp.</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "Terms of Service", href: "/terms" },
                    { label: "Cookie Policy", href: "/cookies" },
                    { label: "Contact Us", href: "/contact" },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="px-4 py-2 rounded-xl border border-white/20 text-white/70 hover:border-teal hover:text-white text-sm font-medium transition-colors"
                    >
                      {l.label} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}