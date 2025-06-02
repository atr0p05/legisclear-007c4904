
import { HeroSection } from "@/components/HeroSection";
import { ChallengeSection } from "@/components/ChallengeSection";
import { SolutionSection } from "@/components/SolutionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TailoredSolutionsTabbed } from "@/components/TailoredSolutionsTabbed";
import { EnhancedHowItWorksSection } from "@/components/EnhancedHowItWorksSection";
import { TrustSecuritySection } from "@/components/TrustSecuritySection";
import { ROICalculator } from "@/components/ROICalculator";
import { CTASection } from "@/components/CTASection";
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
      <TailoredSolutionsTabbed />
      <EnhancedHowItWorksSection />
      <TrustSecuritySection />
      <ROICalculator />
      <CTASection />
      <VisionSection />
      <Footer />
    </div>
  );
};

export default Index;
