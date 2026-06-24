import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  title: string;
  description: string;
  icon?: string;
}

export default function ComingSoon({ title, description, icon = "🚧" }: Props) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-light flex items-center justify-center pt-16">
        <div className="text-center max-w-md mx-auto px-5 py-20">
          <div className="text-6xl mb-6">{icon}</div>
          <div className="inline-block bg-teal/10 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Coming Soon
          </div>
          <h1 className="font-display text-3xl font-bold text-navy mb-3">{title}</h1>
          <p className="text-gray-500 leading-relaxed mb-8">{description}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-navy/90 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
