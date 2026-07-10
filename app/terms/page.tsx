import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service — SocietyApp",
  description:
    "The terms and conditions that govern your use of SocietyApp — the society management platform for Indian residential communities.",
};

const lastUpdated = "1 January 2026";
const effectiveDate = "1 January 2026";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      {
        type: "para",
        text: "By registering a society, creating an account, downloading the SocietyApp mobile application, or using any part of the SocietyApp platform (including the website at societyapp.in), you agree to be legally bound by these Terms of Service ('Terms'). If you do not agree, you must not use SocietyApp.",
      },
      {
        type: "para",
        text: "These Terms constitute a binding agreement between you and SocietyApp Technologies Pvt. Ltd. ('SocietyApp', 'we', 'our', 'us'). Where you register a society on behalf of an RWA, housing society, or other organisation, you represent that you have the authority to bind that organisation to these Terms.",
      },
      {
        type: "highlight",
        icon: "📋",
        text: "By clicking 'Register Free' or 'Accept', you confirm you have read, understood, and agreed to these Terms and our Privacy Policy.",
      },
    ],
  },
  {
    id: "definitions",
    title: "2. Key Definitions",
    content: [
      {
        type: "table",
        rows: [
          ["Term", "Meaning"],
          ["Platform", "The SocietyApp mobile app (iOS and Android), website, APIs, and all related services"],
          ["Society Admin / Admin", "The person who registers a society and holds the 'admin' role — typically the secretary or chairperson"],
          ["Resident", "A member of a registered society with the 'resident' role"],
          ["Security Guard", "A member with the 'security' role, responsible for gate management"],
          ["Committee Member", "A member with a custom 'committee' role and specific module permissions"],
          ["Society Account", "The workspace created for a single registered residential society"],
          ["Content", "Any data, text, photos, notices, or other information posted on the platform by users"],
          ["Subscription", "A paid or free plan that determines which modules are available to a society"],
        ],
      },
    ],
  },
  {
    id: "eligibility",
    title: "3. Eligibility & Account Registration",
    content: [
      {
        type: "list",
        items: [
          "You must be at least 18 years old to register or use SocietyApp",
          "You must provide accurate, complete, and current information during registration",
          "Each residential society may register only one Society Account. Creating duplicate accounts for the same society is prohibited",
          "The Society Admin is responsible for the accuracy of society details — society name, address, unit count, and contact information",
          "You are responsible for maintaining the confidentiality of your password. SocietyApp will not be liable for any loss caused by unauthorized use of your credentials",
          "Upon registration, a temporary password is issued by email. You must change it on first login. Never share your admin credentials",
        ],
      },
      {
        type: "para",
        text: "SocietyApp reserves the right to reject or disable any account that violates these Terms, provides false information, or is deemed fraudulent.",
      },
    ],
  },
  {
    id: "platform-use",
    title: "4. Acceptable Use of the Platform",
    content: [
      {
        type: "para",
        text: "You agree to use SocietyApp only for its intended purpose — managing the operations of a registered residential society. The following are strictly prohibited:",
      },
      {
        type: "list",
        items: [
          "Using the platform to harass, threaten, or defame any resident, guard, or committee member",
          "Posting false visitor entries, fabricating maintenance payment records, or manipulating gate logs",
          "Uploading, sharing, or storing obscene, illegal, or harmful content on notice boards or community help sections",
          "Attempting to access another society's data, accounts, or administrative panel",
          "Reverse-engineering, decompiling, or attempting to extract source code from the app",
          "Using automated bots, scrapers, or scripts to access the platform without written permission",
          "Creating fake societies or fake resident accounts",
          "Using the platform for commercial solicitation, spam, or multi-level marketing",
          "Sharing login credentials with persons who are not members of your society",
        ],
      },
      {
        type: "para",
        text: "Violation of acceptable use policies may result in immediate account suspension, data deletion, and where applicable, legal action.",
      },
    ],
  },
  {
    id: "content",
    title: "5. User Content & Responsibility",
    content: [
      {
        type: "para",
        text: "SocietyApp is a tool — you are responsible for the content your society creates on the platform. This includes notices, complaint descriptions, community posts, visitor records, and maintenance amounts.",
      },
      {
        type: "list",
        items: [
          "You retain ownership of all content you upload or create on the platform",
          "You grant SocietyApp a limited licence to store, process, and display your content solely to provide the service",
          "SocietyApp does not edit, review, or endorse user content",
          "You are solely responsible for the accuracy of visitor logs, maintenance bills, and financial records entered into the platform",
          "Society Admins are responsible for ensuring residents' personal data is collected lawfully and used only for society management purposes",
          "Do not post anyone else's personal information (Aadhaar, PAN, bank account details) in notices or community posts",
        ],
      },
    ],
  },
  {
    id: "subscriptions",
    title: "6. Subscriptions, Plans & Payments",
    content: [
      {
        type: "para",
        text: "SocietyApp offers a free plan and paid subscription plans. Plan details and pricing are published at societyapp.in/pricing.",
      },
      {
        type: "list",
        items: [
          "Free Plan: Available indefinitely to societies with up to 50 units. Includes Visitor Management, Notice Board, Basic Maintenance, and Community Help. No credit card required",
          "Paid Plans (Standard, Pro, Enterprise): Billed monthly or annually as selected. Features unlock immediately upon payment confirmation",
          "Upgrades: Take effect immediately. Downgrading takes effect at the next billing cycle",
          "Cancellation: You may cancel a paid subscription at any time. Access continues until the end of the current billing period. No partial refunds for unused months",
          "Refund Policy: We offer a 30-day money-back guarantee on first-time paid subscriptions. Contact billing@societyapp.in within 30 days of your first payment",
          "Failed Payments: If a payment fails, we will retry twice over 5 days. If all retries fail, your account will revert to the Free plan. Your data is not deleted",
          "Price Changes: We will give 30 days notice before changing subscription prices to existing paid subscribers",
        ],
      },
    ],
  },
  {
    id: "data-security",
    title: "7. Data, Privacy & Security",
    content: [
      {
        type: "para",
        text: "Our Privacy Policy, which is incorporated into these Terms by reference, describes how we handle your data. Key points:",
      },
      {
        type: "list",
        items: [
          "All society data is isolated — one society cannot see or access another's data",
          "We use encryption at rest and in transit (TLS 1.3) for all data",
          "You are responsible for the security of your admin credentials. Enable a strong password and do not share it",
          "If you suspect a security breach or unauthorized access, notify us immediately at security@societyapp.in",
          "We maintain audit logs of all admin actions which cannot be altered or deleted by society admins",
        ],
      },
      {
        type: "link",
        text: "Read our full Privacy Policy →",
        href: "/privacy",
      },
    ],
  },
  {
    id: "ip",
    title: "8. Intellectual Property",
    content: [
      {
        type: "para",
        text: "The SocietyApp platform — including its source code, design, trademarks, logo, content, and documentation — is owned by SocietyApp Technologies Pvt. Ltd. and is protected under Indian copyright and intellectual property laws.",
      },
      {
        type: "list",
        items: [
          "You may not reproduce, copy, distribute, or create derivative works from any part of the platform without written permission",
          "The SocietyApp name, logo, and 'S' mark are registered trademarks. Do not use them without authorisation",
          "Feedback, suggestions, or ideas you share with us may be used by us freely without compensation to you",
        ],
      },
    ],
  },
  {
    id: "availability",
    title: "9. Service Availability & Maintenance",
    content: [
      {
        type: "para",
        text: "We aim to maintain 99.5% uptime for the SocietyApp platform. However, we do not guarantee uninterrupted availability. The platform may be unavailable during:",
      },
      {
        type: "list",
        items: [
          "Scheduled maintenance windows (notified at least 48 hours in advance via email)",
          "Emergency maintenance for security patches (no advance notice may be possible)",
          "Periods of exceptional demand or third-party infrastructure failures (AWS, MongoDB Atlas, FCM)",
          "Force majeure events including natural disasters, power outages, or cyber attacks",
        ],
      },
      {
        type: "para",
        text: "SocietyApp is not liable for any losses resulting from temporary service unavailability. We will work to restore service as quickly as possible and communicate status updates at status.societyapp.in.",
      },
    ],
  },
  {
    id: "limitation",
    title: "10. Limitation of Liability",
    content: [
      {
        type: "highlight",
        icon: "⚠️",
        text: "SocietyApp is a software tool. We are not responsible for the actions of society admins, guards, residents, or committee members. We are not liable for decisions made based on data recorded in the platform.",
      },
      {
        type: "para",
        text: "To the maximum extent permitted by applicable law, SocietyApp Technologies Pvt. Ltd. shall not be liable for:",
      },
      {
        type: "list",
        items: [
          "Any direct, indirect, incidental, or consequential damages arising from your use of or inability to use the platform",
          "Security incidents resulting from your failure to protect your credentials",
          "Errors in visitor records, maintenance bills, or financial records entered by society admins or guards",
          "Physical security incidents at your society's premises",
          "Disputes between society admins and residents regarding dues, complaints, or decisions",
          "Loss of data due to incorrect use, deletion of accounts, or hardware failure on your end",
        ],
      },
      {
        type: "para",
        text: "Our total liability to you for any claim arising out of these Terms shall not exceed the total subscription fees paid by your society in the 3 months preceding the claim.",
      },
    ],
  },
  {
    id: "termination",
    title: "11. Termination",
    content: [
      {
        type: "para",
        text: "Either party may terminate the relationship under these Terms:",
      },
      {
        type: "list",
        items: [
          "By You: Cancel your subscription and request account deletion at any time by emailing support@societyapp.in. Data deletion takes 30 days",
          "By Us (for cause): We may immediately suspend or terminate accounts that violate these Terms, engage in fraud, or pose a security risk to other users",
          "By Us (without cause): We may terminate free accounts with 30 days notice. Paid subscribers receive a pro-rated refund if we terminate without cause",
          "Upon termination: Your right to use the platform ceases. We will retain data for the periods specified in the Privacy Policy before permanent deletion",
        ],
      },
    ],
  },
  {
    id: "governing-law",
    title: "12. Governing Law & Disputes",
    content: [
      {
        type: "para",
        text: "These Terms are governed by the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.",
      },
      {
        type: "para",
        text: "Before initiating legal proceedings, you agree to attempt to resolve the dispute informally by contacting us at legal@societyapp.in and giving us 30 days to respond.",
      },
    ],
  },
  {
    id: "changes",
    title: "13. Changes to These Terms",
    content: [
      {
        type: "para",
        text: "We reserve the right to modify these Terms at any time. When we make material changes, we will notify Society Admins via email and display a prominent notice in the app at least 7 days before the new Terms take effect.",
      },
      {
        type: "para",
        text: "Continued use of SocietyApp after the effective date of updated Terms constitutes acceptance. If you disagree with changes, you must stop using the platform and cancel your subscription before the effective date.",
      },
    ],
  },
  {
    id: "contact-legal",
    title: "14. Contact",
    content: [
      {
        type: "list",
        items: [
          "General: support@societyapp.in",
          "Legal & Terms: legal@societyapp.in",
          "Billing disputes: billing@societyapp.in",
          "Security: security@societyapp.in",
          "Postal: SocietyApp Technologies Pvt. Ltd., Ahmedabad, Gujarat, India — 380001",
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
          className="border border-amber/30 rounded-xl px-5 py-4 flex items-start gap-3"
          style={{ backgroundColor: "rgba(245,158,11,0.06)" }}
        >
          <span className="text-amber text-xl flex-shrink-0">
            {"icon" in item ? item.icon : "⚠️"}
          </span>
          <p className="text-amber-800 font-medium text-[15px] leading-relaxed" style={{ color: "#92400e" }}>
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
          <table className="w-full text-sm border-collapse min-w-[400px]">
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

export default function TermsPage() {
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
            <h1 className="font-display text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-white/50 text-base leading-relaxed max-w-lg mx-auto">
              The rules that govern your use of SocietyApp — written in plain language.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-white/30 text-xs">
              <span>Last updated: <strong className="text-white/50">{lastUpdated}</strong></span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Effective: <strong className="text-white/50">{effectiveDate}</strong></span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start">

            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Contents</p>
                <ul className="space-y-1 max-h-[60vh] overflow-y-auto">
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
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-2">Legal questions?</p>
                  <a href="mailto:legal@societyapp.in" className="text-xs text-teal font-semibold hover:underline">
                    legal@societyapp.in
                  </a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="space-y-10">
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
                    { label: "Privacy Policy", href: "/privacy" },
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