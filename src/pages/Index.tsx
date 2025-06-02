
import { HeroSection } from "@/components/HeroSection";
import { ChallengeSection } from "@/components/ChallengeSection";
import { SolutionSection } from "@/components/SolutionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TailoredSolutionsTabbed } from "@/components/TailoredSolutionsTabbed";
import { EnhancedHowItWorksSection } from "@/components/EnhancedHowItWorksSection";
import { ROICalculator } from "@/components/ROICalculator";
import { VisionSection } from "@/components/VisionSection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <BenefitsSection />
      <TailoredSolutionsTabbed />
      <EnhancedHowItWorksSection />
      <ROICalculator />
      <CTASection />
      <VisionSection />
      <Footer />
    </div>
  );
};

export default Index;
