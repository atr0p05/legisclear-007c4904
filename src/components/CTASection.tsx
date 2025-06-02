
import { Button } from "@/components/ui/button";
import { useOneTimeAnimation } from "@/hooks/useOneTimeAnimation";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const { elementRef: sectionRef, isVisible } = useOneTimeAnimation({ threshold: 0.2 });
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

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
          
          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleGetStarted}
              className="bg-white text-[#178ACB] hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Get Started Free
            </Button>
            
            <Button
              onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for RAG Demo"}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#178ACB] px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
