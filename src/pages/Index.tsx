
import { HeroSection } from "@/components/HeroSection";
import { ChallengeSection } from "@/components/ChallengeSection";
import { SolutionSection } from "@/components/SolutionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TailoredSuccessSection } from "@/components/TailoredSuccessSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PricingSection } from "@/components/PricingSection";
import { VisionSection } from "@/components/VisionSection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <BenefitsSection />
      <TailoredSuccessSection />
      <HowItWorksSection />
      <PricingSection />
      <VisionSection />
      <Footer />
    </div>
  );
};

export default Index;
