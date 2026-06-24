// app/features/maintenance/page.tsx
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata = {
  title: "Maintenance & Billing — SocietyApp",
  description: "Auto-generate monthly maintenance bills, track payments, identify defaulters, and send receipts — all without a single WhatsApp screenshot.",
};

export default function Page() {
  return (
    <FeaturePageTemplate
      badge="Maintenance & Billing"
      emoji="💸"
      headline="End the WhatsApp payment chase."
      headlineAccent="Maintenance billing, finally sorted."
      subline="Auto-generate monthly bills, track every payment, and give residents a proper digital receipt — without Excel sheets or UPI screenshot chaos."
      problems={[
        { icon: "📱", title: "UPI screenshots in WhatsApp groups", desc: "Residents send payment screenshots in group chats. No receipt, no audit trail, impossible to reconcile at month end." },
        { icon: "📊", title: "Defaulter list on a spreadsheet", desc: "The secretary maintains a manual Excel sheet of who paid and who didn't. It's always out of date." },
        { icon: "❓", title: "Residents don't know what they're paying for", desc: "No bill breakdown, no due date notifications, no history. Disputes happen because of zero transparency." },
      ]}
      flows={[
        { icon: "📋", label: "Admin creates a bill", detail: "Enter bill name (e.g., 'August Maintenance'), amount, and due date. Optionally set flat-specific amounts for different unit sizes." },
        { icon: "📤", label: "Bill published to all residents", detail: "One tap to publish. All residents instantly see the bill in their app with full breakdown and due date." },
        { icon: "💰", label: "Resident makes payment", detail: "Resident pays via UPI, NEFT, cash, or cheque as usual, then marks the payment method in the app." },
        { icon: "✅", label: "Admin confirms & receipt generated", detail: "Admin marks payment received. A digital receipt with bill details, payment date, and amount is auto-generated and saved." },
        { icon: "📊", label: "Defaulter report updated live", detail: "Any unpaid bills automatically appear on the Defaulter Report with flat number, resident name, and overdue days." },
      ]}
      adminView={{
        title: "⚙️ Admin / Secretary View",
        points: [
          "Create one-time or recurring monthly bills",
          "Set flat-specific amounts for 1BHK, 2BHK, 3BHK",
          "View defaulter report with contact details",
          "Send automated payment reminders to all defaulters",
          "Mark payments received and generate receipts",
          "Export full payment history as CSV for annual audit",
        ],
      }}
      residentView={{
        title: "👤 Resident View",
        points: [
          "See all outstanding and paid bills in one screen",
          "View itemised bill breakdown (maintenance, sinking fund, etc.)",
          "Get push notification 7 days before due date",
          "Receive digital receipt immediately after admin confirmation",
          "View full 12-month payment history",
          "Raise dispute or query on a specific bill",
        ],
      }}
      features={[
        { icon: "🔄", title: "Recurring billing", desc: "Set up monthly bills once. They auto-generate on the 1st of each month." },
        { icon: "📊", title: "Defaulter report", desc: "Real-time list of unpaid bills. Filter by overdue days, flat, or amount." },
        { icon: "🧾", title: "Digital receipts", desc: "Auto-generated PDF receipts with society header, bill details, and payment date." },
        { icon: "🏠", title: "Flat-specific amounts", desc: "Different rates for 1BHK, 2BHK, corner units, or any custom grouping." },
        { icon: "🔔", title: "Due date reminders", desc: "Automated push notifications 7 days, 3 days, and 1 day before due date." },
        { icon: "📁", title: "Annual statement", desc: "Residents can export their full year's payment history for tax or verification." },
      ]}
      faqs={[
        { q: "Can I create different bill amounts for different flat sizes?", a: "Yes. When creating a bill, you can set flat-specific amounts. For example, 1BHK flats get charged ₹1,500 and 3BHK flats ₹3,000 from the same bill creation screen." },
        { q: "Does SocietyApp collect payments on our behalf?", a: "No. SocietyApp is a records and communication tool, not a payment processor. Residents pay via their usual UPI, NEFT, or cash methods, and the admin marks the payment as received." },
        { q: "How do I handle special levy collections (e.g., lift repair fund)?", a: "You can create one-time bills with a custom name, amount, and due date at any time. These appear alongside regular maintenance bills in residents' apps." },
        { q: "What happens when a bill is disputed by a resident?", a: "Residents can raise a query on any bill. The admin sees it on the bill management screen and can respond with a note. All communication is logged in the app." },
      ]}
      related={[
        { icon: "🚪", title: "Visitor Management", href: "/features/visitor-management", desc: "Gate security with 4 flows — no hardware needed." },
        { icon: "🛠️", title: "Issues & Complaints", href: "/features/issues", desc: "Resident complaints tracked from report to resolution." },
        { icon: "📊", title: "Audit Log", href: "/features", desc: "Tamper-evident activity log for all admin actions." },
      ]}
      ctaHeadline="Replace WhatsApp screenshots with proper billing."
      ctaSub="Basic Maintenance billing is included in the Free plan. No credit card required."
    />
  );
}