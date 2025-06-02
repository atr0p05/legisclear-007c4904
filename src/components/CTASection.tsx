
import { EnhancedCTAButton } from "@/components/EnhancedCTAButton";
import { useOneTimeAnimation } from "@/hooks/useOneTimeAnimation";

export const CTASection = () => {
  const { elementRef: sectionRef, isVisible } = useOneTimeAnimation({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-[#178ACB] to-[#43B88C]">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center text-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience RAG-Powered Legal Intelligence?
          </h2>
          
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join the growing community of legal professionals who trust LegisClear for verified, actionable legal 
            insights. Discover how RAG technology can transform your practice.
          </p>
          
          <div className="flex justify-center">
            <EnhancedCTAButton
              variant="demo"
              href="mailto:andre@legisclear.com?subject=Request for RAG Demo - Experience the Future of Legal AI"
              stage="decision"
              className="px-8 py-4 text-lg"
            >
              Request a Demo
            </EnhancedCTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};
