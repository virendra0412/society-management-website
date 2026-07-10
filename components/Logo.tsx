// components/Logo.tsx
//
// Website counterpart to the mobile app's src/components/ui/AppLogo.jsx —
// same icon asset, same "my" (teal) + "Society" wordmark, same amber
// accent bar. Keep these two in sync if the brand mark ever changes.

import Image from "next/image";
import Link from "next/link";

const SIZES = {
  sm: { icon: 32, name: "text-lg", gap: "gap-2", bar: "w-9" },
  md: { icon: 40, name: "text-xl", gap: "gap-2.5", bar: "w-11" },
} as const;

interface LogoProps {
  size?: keyof typeof SIZES;
  href?: string | null; // pass null to render as a non-link (e.g. footer variants that already wrap in a link)
  className?: string;
}

export default function Logo({ size = "sm", href = "/", className = "" }: LogoProps) {
  const sz = SIZES[size];

  const content = (
    <span className={`inline-flex items-center ${sz.gap}`}>
      <Image
        src="/logo-icon.png"
        alt="mySociety"
        width={sz.icon}
        height={sz.icon}
        className="rounded-[22%] flex-shrink-0"
        priority
      />
      <span className={`font-display font-bold ${sz.name} tracking-tight leading-none`}>
        <span className="text-teal font-normal">my</span>
        <span className="text-white">Society</span>
      </span>
    </span>
  );

  if (href === null) {
    return <span className={`inline-flex items-center ${className}`}>{content}</span>;
  }

  return (
    <Link href={href} className={`flex items-center flex-shrink-0 ${className}`}>
      {content}
    </Link>
  );
}
