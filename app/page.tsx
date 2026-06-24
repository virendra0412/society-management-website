import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSection from "@/components/ProblemSection";
import FeaturesTeaser from "@/components/FeaturesTeaser";
import PricingTeaser from "@/components/PricingTeaser";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <ProblemSection />
        <FeaturesTeaser />
        <PricingTeaser />
      </main>
      <Footer />
    </>
  );
}
