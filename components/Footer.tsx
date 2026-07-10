"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import LangSwitcher from "./LangSwitcher";

export default function Footer() {
  const { tr } = useTranslation();

  const links = {
    [tr.nav_features]: [
      { label: tr.footer_link_vm, href: "/features/visitor-management" },
      { label: tr.footer_link_maintenance, href: "/features/maintenance" },
      { label: tr.footer_link_notices, href: "/features/notices" },
      { label: tr.footer_link_issues, href: "/features/issues" },
      { label: tr.nav_pricing, href: "/pricing" },
    ],
    [tr.nav_about]: [
      { label: tr.nav_about, href: "/about" },
      { label: tr.nav_blog, href: "/blog" },
      { label: tr.footer_link_contact, href: "/contact" },
      { label: tr.footer_link_faq, href: "/faq" },
      { label: tr.footer_link_support, href: "/support" },
    ],
    [tr.footer_group_more_features]: [
      { label: tr.footer_link_events, href: "/features/events" },
      { label: tr.footer_link_amenities, href: "/features/amenities" },
      { label: tr.footer_link_parking, href: "/features/parking" },
      { label: tr.footer_link_community_help, href: "/features/community-help" },
    ],
    [tr.footer_group_legal]: [
      { label: tr.footer_link_privacy, href: "/privacy" },
      { label: tr.footer_link_terms, href: "/terms" },
    ],
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-5 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo size="md" className="mb-4" />
            <p className="text-white/40 text-sm leading-relaxed mb-4">{tr.footer_brand_desc}</p>
            <div className="flex flex-col gap-2">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-3 py-2 text-xs font-semibold text-white w-fit">
                ▶ Google Play
              </a>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-3 py-2 text-xs font-semibold text-white w-fit">
                🍎 App Store
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-4">{group}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* WhatsApp strip */}
        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-white font-semibold text-sm">{tr.footer_questions}</p>
            <p className="text-white/40 text-xs">{tr.footer_questions_sub}</p>
          </div>
          <a href="https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20SocietyApp"
            target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-teal text-white text-sm font-bold hover:bg-teal/90 transition-colors">
            {tr.footer_cta}
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">{tr.footer_copyright}</p>
          <div className="flex items-center gap-4">
            <span className="text-white/30 text-xs">{tr.footer_made_with}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}