"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import LangSwitcher from "./LangSwitcher"

const featureLinks = [
  { labelKey: "Visitor Management", href: "/features/visitor-management", icon: "🚪" },
  { labelKey: "Maintenance & Billing", href: "/features/maintenance", icon: "💸" },
  { labelKey: "Notice Board", href: "/features/notices", icon: "📢" },
  { labelKey: "Issues & Complaints", href: "/features/issues", icon: "🛠️" },
  { labelKey: "Events & Polls", href: "/features/events", icon: "🎉" },
  { labelKey: "Amenity Booking", href: "/features/amenities", icon: "🏊" },
  { labelKey: "Community Help", href: "/features/community-help", icon: "🤝" },
  { labelKey: "Parking", href: "/features/parking", icon: "🅿️" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const pathname = usePathname();
  const { tr } = useTranslation();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

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

        {/* Desktop nav + lang switcher — grouped as one right-aligned cluster.
            (Sign In / Register are hidden until the standalone web app ships;
            this single group avoids the empty gap that hiding them would
            otherwise leave under the old 3-column layout.) */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-5">
            {/* Features mega-dropdown */}
            <div className="relative" onMouseEnter={() => setFeaturesOpen(true)} onMouseLeave={() => setFeaturesOpen(false)}>
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${isActive("/features") ? "text-teal" : "text-white/70 hover:text-white"}`}>
                {tr.nav_features} <ChevronDown size={14} className={`transition-transform ${featuresOpen ? "rotate-180" : ""}`} />
              </button>
              {featuresOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#0a1628] border border-white/10 rounded-2xl shadow-2xl p-3">
                  <Link href="/features" className="block px-3 py-2 rounded-lg text-white/50 text-xs font-semibold uppercase tracking-widest hover:text-white mb-1">
                    {tr.nav_all_modules}
                  </Link>
                  <div className="grid grid-cols-2 gap-1">
                    {featureLinks.map((f) => (
                      <Link key={f.href} href={f.href} className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-colors ${isActive(f.href) ? "bg-teal/20 text-teal" : "text-white/70 hover:bg-white/5 hover:text-white"}`}>
                        <span>{f.icon}</span>
                        <span className="text-xs leading-tight">{f.labelKey}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className={`text-sm font-medium transition-colors ${isActive("/pricing") ? "text-teal" : "text-white/70 hover:text-white"}`}>{tr.nav_pricing}</Link>
            <Link href="/about" className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-teal" : "text-white/70 hover:text-white"}`}>{tr.nav_about}</Link>
            <Link href="/blog" className={`text-sm font-medium transition-colors ${isActive("/blog") ? "text-teal" : "text-white/70 hover:text-white"}`}>{tr.nav_blog}</Link>
          </div>

          <div className="flex items-center pl-6 border-l border-white/10">
            <LangSwitcher dark />
          </div>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-5 pb-6 pt-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest px-2 py-1">{tr.nav_features}</p>
          {featureLinks.map((f) => (
            <Link key={f.href} href={f.href} className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 text-sm" onClick={() => setMobileOpen(false)}>
              <span>{f.icon}</span> {f.labelKey}
            </Link>
          ))}
          <hr className="border-white/10 my-2" />
          <Link href="/pricing" className="px-3 py-2 text-white/70 hover:text-white text-sm font-medium" onClick={() => setMobileOpen(false)}>{tr.nav_pricing}</Link>
          <Link href="/about" className="px-3 py-2 text-white/70 hover:text-white text-sm font-medium" onClick={() => setMobileOpen(false)}>{tr.nav_about}</Link>
          <Link href="/blog" className="px-3 py-2 text-white/70 hover:text-white text-sm font-medium" onClick={() => setMobileOpen(false)}>{tr.nav_blog}</Link>
          <hr className="border-white/10 my-2" />
          {/* Language switcher in mobile drawer */}
          <div className="px-3 py-2 pb-1">
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-2">{tr.nav_language}</p>
            <LangSwitcher dark />
          </div>
        </div>
      )}
    </header>
  );
}