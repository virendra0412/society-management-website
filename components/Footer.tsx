import Link from "next/link";

const links: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Features",         href: "/features" },
    { label: "Pricing",          href: "/pricing" },
    { label: "All 22 Modules",   href: "/features" },
    { label: "Security & Trust", href: "/features/visitor-management" },
  ],
  Company: [
    { label: "About Us",  href: "/about" },
    { label: "Blog",      href: "/blog" },
    // { label: "Careers",   href: "/about#careers" },
    { label: "Contact",   href: "/contact" },
  ],
  Support: [
    { label: "Help Centre", href: "/support" },
    { label: "Contact Us",  href: "/contact" },
    { label: "FAQ",         href: "/faq" },
    { label: "System Status", href: "/support#status" },
  ],
  Legal: [
    { label: "Privacy Policy",   href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy",    href: "/privacy#cookies" },
  ],
};

const featureLinks = [
  { label: "Visitor Management",   href: "/features/visitor-management" },
  { label: "Maintenance & Bills",  href: "/features/maintenance" },
  { label: "Notice Board",         href: "/features/notices" },
  { label: "Issues & Complaints",  href: "/features/issues" },
  { label: "Events & Polls",       href: "/features/events" },
  { label: "Amenity Booking",      href: "/features/amenities" },
  { label: "Community Help",       href: "/features/community-help" },
  { label: "Parking",              href: "/features/parking" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-5 pt-14 pb-8">

        {/* Feature quick links strip */}
        <div className="mb-10 pb-10 border-b border-white/10">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-4">
            Popular Features
          </p>
          <div className="flex flex-wrap gap-2">
            {featureLinks.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="px-3 py-1.5 rounded-full border border-white/10 text-white/50 hover:border-teal/50 hover:text-teal text-xs font-medium transition-colors"
              >
                {f.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center text-white font-display font-bold text-sm">
                S
              </span>
              <span className="font-display font-bold text-white text-lg">
                Society<span className="text-teal">App</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Society management made simple for residential communities across India.
            </p>
            {/* App store badges */}
            <div className="flex flex-col gap-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-colors"
              >
                <span className="text-base">📱</span> Google Play
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-colors"
              >
                <span className="text-base">🍎</span> App Store
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-4">{group}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© 2025 SocietyApp. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy</Link>
            <Link href="/terms"   className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms</Link>
            <Link href="/contact" className="text-white/30 hover:text-white/60 text-xs transition-colors">Contact</Link>
          </div>
          <p className="text-white/30 text-xs">Made with ❤️ for Indian societies</p>
        </div>
      </div>
    </footer>
  );
}