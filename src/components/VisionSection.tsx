
import { EnhancedCTAButton } from "@/components/EnhancedCTAButton";

export const VisionSection = () => {
  const scrollToROI = () => {
    const element = document.getElementById("roi-calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="vision" className="py-20 bg-gradient-to-r from-[#0A2F51] via-[#0E5A8A] to-[#178ACB]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Legal Practice with RAG?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            The Legal Technology Market is projected to reach $60.04 billion by 2032. 
            Position your practice at the forefront of this transformation with RAG-powered legal intelligence 
            that reduces costs, accelerates research, and delivers measurable ROI through verifiable AI.
          </p>
          <p className="text-lg mb-12 opacity-80">
            Join the growing community of legal professionals who are leveraging RAG technology to slash administrative overhead by 48%, 
            accelerate research by 6-80x, and achieve ROI of 840%+ in their first year. Experience the competitive advantage 
            that comes from instant access to comprehensive, source-verified legal knowledge.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <EnhancedCTAButton
              variant="primary"
              onClick={scrollToROI}
              stage="decision"
            >
              Request Your RAG Demo
            </EnhancedCTAButton>
            <EnhancedCTAButton
              variant="contact"
              stage="decision"
            >
              Connect with RAG Specialist
            </EnhancedCTAButton>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg">
              <h3 className="text-2xl font-bold mb-2">6-80x</h3>
              <p className="opacity-90">Faster RAG-powered research than traditional methods</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg">
              <h3 className="text-2xl font-bold mb-2">48%</h3>
              <p className="opacity-90">Reduction in non-billable admin time through RAG automation</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg">
              <h3 className="text-2xl font-bold mb-2">840%+</h3>
              <p className="opacity-90">First-year ROI achieved by firms using RAG technology</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white/10 backdrop-blur-md rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision: Pioneering RAG for the Legal Profession</h3>
            <p className="text-lg opacity-90">
              To revolutionize legal practice by empowering every legal professional and academic institution 
              with verifiable, RAG-driven intelligence. We believe that by grounding AI in truth and transparency, 
              we can elevate the standard of legal service delivery, accelerate discovery, and foster more just outcomes. 
              LegisClear: Where precision meets intelligence, powered by the next generation of legal AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
