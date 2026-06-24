import Link from "next/link";

const links = {
  Product: ["Features", "Pricing", "Modules", "Security"],
  Company:  ["About", "Blog", "Careers", "Press"],
  Support:  ["Help Centre", "Contact", "FAQ", "Status"],
  Legal:    ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-5 pt-14 pb-8">
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
            <p className="text-white/40 text-sm leading-relaxed">
              Society management made simple for residential communities across India.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-4">{group}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© 2025 SocietyApp. All rights reserved.</p>
          <p className="text-white/30 text-xs">Made with ❤️ for Indian societies</p>
        </div>
      </div>
    </footer>
  );
}
