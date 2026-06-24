"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const features = [
  { label: "Visitor Management", href: "/features/visitor-management", icon: "🚪" },
  { label: "Maintenance & Billing", href: "/features/maintenance", icon: "💸" },
  { label: "Notice Board", href: "/features/notices", icon: "📢" },
  { label: "Issues & Complaints", href: "/features/issues", icon: "🛠️" },
  { label: "Events & Polls", href: "/features/events", icon: "🎉" },
  { label: "Amenity Booking", href: "/features/amenities", icon: "🏊" },
  { label: "Community Help", href: "/features/community-help", icon: "🤝" },
  { label: "Parking", href: "/features/parking", icon: "🅿️" },
];

const navLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "About",   href: "/about"   },
  { label: "Blog",    href: "/blog"    },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <span className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center text-white font-display font-bold text-sm">S</span>
          <span className="font-display font-bold text-white text-lg tracking-tight">
            Society<span className="text-teal">App</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">

          {/* Features mega-dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${
              isActive("/features") ? "text-teal" : "text-white/70 hover:text-white"
            }`}>
              Features <ChevronDown size={14} className={`transition-transform ${featuresOpen ? "rotate-180" : ""}`} />
            </button>

            {featuresOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#0a1628] border border-white/10 rounded-2xl shadow-2xl p-3">
                <Link
                  href="/features"
                  className="block px-3 py-2 rounded-lg text-white/50 text-xs font-semibold uppercase tracking-widest hover:text-white mb-1"
                >
                  All 22 modules →
                </Link>
                <div className="grid grid-cols-2 gap-1">
                  {features.map((f) => (
                    <Link
                      key={f.href}
                      href={f.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-colors ${
                        isActive(f.href)
                          ? "bg-teal/20 text-teal"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{f.icon}</span>
                      <span className="text-xs leading-tight">{f.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                isActive(l.href) ? "text-teal" : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm text-white/60 hover:text-white font-medium transition-colors">
            Sign in
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 rounded-lg bg-teal text-white text-sm font-semibold hover:bg-teal/90 transition-colors shadow-lg shadow-teal/20"
          >
            Register Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-5 pb-6 pt-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest px-2 py-1">Features</p>
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              <span>{f.icon}</span> {f.label}
            </Link>
          ))}
          <hr className="border-white/10 my-2" />
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-white/70 hover:text-white text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <hr className="border-white/10 my-2" />
          <Link
            href="/register"
            className="block text-center py-3 rounded-xl bg-teal text-white text-sm font-semibold mt-1"
            onClick={() => setMobileOpen(false)}
          >
            Register Free →
          </Link>
        </div>
      )}
    </header>
  );
}
