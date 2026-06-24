const problems = [
  {
    emoji: "😤",
    title: "Security chaos at the gate",
    desc: "Guards with paper registers, residents complaining about unknown visitors, no OTP flow, no accountability.",
    fix: "Visitor Management with OTP entry, pre-approved passes, and a full log.",
  },
  {
    emoji: "📱",
    title: "WhatsApp maintenance fights",
    desc: "300 people in one group, fee disputes, no receipts, chasing defaulters every month manually.",
    fix: "Automated bills, UPI payment links, defaulter list at a glance.",
  },
  {
    emoji: "🗂️",
    title: "Complaints go nowhere",
    desc: "Issues raised on WhatsApp get buried. No tracking, no resolution timeline, no accountability.",
    fix: "Complaint ticketing with assigned owners, status updates, and closure photos.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Label */}
        <p className="text-teal text-xs font-bold uppercase tracking-widest text-center mb-3">
          Sound familiar?
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Society management is broken.
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-14 leading-relaxed">
          Most societies still rely on WhatsApp groups, paper registers, and
          Excel sheets. SocietyApp fixes all of it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="group rounded-2xl border border-gray-100 p-6 hover:border-teal/30 hover:shadow-lg transition-all">
              <div className="text-3xl mb-4">{p.emoji}</div>
              <h3 className="font-display font-bold text-navy text-lg mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold text-teal uppercase tracking-wide mb-1">SocietyApp fixes this</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
