"use client";
import { useTranslation } from "../lib/i18n/LanguageContext";

const cities = [
  "Ahmedabad", "Bengaluru", "Pune", "Mumbai", "Delhi", "Hyderabad",
  "Surat", "Jaipur", "Chennai", "Lucknow", "Vadodara", "Nagpur",
  "Ahmedabad", "Bengaluru", "Pune", "Mumbai", "Delhi", "Hyderabad",
  "Surat", "Jaipur", "Chennai", "Lucknow", "Vadodara", "Nagpur",
];

export default function SocialProofBar() {
  const {tr} = useTranslation();

  return (
    <section className="bg-white border-b border-gray-100 py-4 overflow-hidden">
      <div className="flex items-center gap-4 w-max animate-marquee">
        {cities.map((city, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-light text-navy text-xs font-medium whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            {city}
          </span>
        ))}
      </div>
      <p className="text-center text-gray-400 text-xs mt-2">
        {tr.home_social_proof_sub}
      </p>
    </section>
  );
}
