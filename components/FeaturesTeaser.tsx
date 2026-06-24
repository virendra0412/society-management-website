import Link from "next/link";
import { ArrowRight } from "lucide-react";

const modules = [
  { icon: "🚪", title: "Visitor Management", desc: "OTP entry, pre-approved passes, trusted visitor list, full gate log.", tag: "Most loved", tagColor: "bg-green/10 text-green" },
  { icon: "💸", title: "Maintenance & Billing", desc: "Auto bill generation, UPI payments, receipts, defaulter tracking.", tag: "Free tier", tagColor: "bg-teal/10 text-teal" },
  { icon: "📢", title: "Notice Board", desc: "Pinned notices, push notifications, category tags, delivery confirmation.", tag: "", tagColor: "" },
  { icon: "🛠️", title: "Issues & Complaints", desc: "Raise, assign, track and close complaints with photos and timelines.", tag: "", tagColor: "" },
  { icon: "🏊", title: "Amenity Booking", desc: "Book clubhouse, gym, pool with slots, deposits and committee approval.", tag: "Pro", tagColor: "bg-navy/10 text-navy" },
  { icon: "🅿️", title: "Parking Management", desc: "Slot registry, guest parking permits, two-wheeler and vehicle records.", tag: "", tagColor: "" },
];

export default function FeaturesTeaser() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-teal text-xs font-bold uppercase tracking-widest text-center mb-3">
          22 modules · one app
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Everything your society needs.
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-14 leading-relaxed">
          From security to maintenance to community events — every feature
          your RWA actually needs, built into one mobile-first platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{m.icon}</span>
                {m.tag && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${m.tagColor}`}>
                    {m.tag}
                  </span>
                )}
              </div>
              <h3 className="font-display font-bold text-navy text-base mb-1.5">{m.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all"
          >
            View all 22 modules <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
