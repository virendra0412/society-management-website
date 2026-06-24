// app/page.tsx — updated homepage wiring all 8 required sections
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSection from "@/components/ProblemSection";
import ProductDemo from "@/components/ProductDemo";
import FeaturesTeaser from "@/components/FeaturesTeaser";
import Testimonials from "@/components/Testimonials";
import PricingTeaser from "@/components/PricingTeaser";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero — value prop + phone mockup */}
        <Hero />

        {/* 2. Social proof — scrolling city pills */}
        <SocialProofBar />

        {/* 3. Problem statement — 3 pain point cards */}
        <ProblemSection />

        {/* 4. Product demo — 3 scrollable sections with phone mockups */}
        <ProductDemo />

        {/* 5. Module grid — all 22 modules teaser */}
        <FeaturesTeaser />

        {/* 6. Testimonials — glassmorphism cards on navy */}
        <Testimonials />

        {/* 7. Pricing teaser — Free vs Standard vs Pro */}
        <PricingTeaser />

        {/* 8. Final CTA — "Your society is waiting." + email form */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}