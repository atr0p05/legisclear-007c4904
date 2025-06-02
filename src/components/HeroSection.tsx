
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useOneTimeAnimation } from "@/hooks/useOneTimeAnimation";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const { elementRef: heroRef, isVisible } = useOneTimeAnimation({ threshold: 0.1 });
  const navigate = useNavigate();

  const scrollToNext = () => {
    const element = document.getElementById("challenge");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleRequestDemo = () => {
    window.location.href = "mailto:andre@legisclear.com?subject=Request for RAG Demo - Experience the Future of Legal AI";
  };

  return (
    <section 
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Clean professional background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2F51] via-[#0E5A8A] to-[#178ACB]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white max-w-5xl mx-auto">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block">
              LegisClear: Revolutionizing Legal Intelligence
            </span>
            <br />
            <span className={`text-[#43B88C] inline-block transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              with Verifiable
              <span className={`mx-2 transition-all duration-500 delay-500 ${
                isVisible ? 'text-shadow-sm' : ''
              }`}>
                RAG AI
              </span>
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 text-gray-200 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            LegisClear's RAG AI transforms complex legal work into verified, actionable intelligence. 
            Get <strong>6-80x faster research</strong>, <strong>unmatched accuracy</strong>, 
            and <strong>complete verifiability</strong>—all powered by an expert legal library and built-in fact-checker.
          </p>
          
          <div className={`bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 transition-all duration-1000 delay-700 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <p className="text-lg font-medium mb-3">The RAG Advantage: Where Precision Meets Intelligence</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className={`transition-all duration-500 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                ✓ <strong>Source-Verified Accuracy:</strong> Every insight traceable to original documents
              </div>
              <div className={`transition-all duration-500 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                ✓ <strong>Always Current Knowledge:</strong> Real-time legal updates, never outdated
              </div>
              <div className={`transition-all duration-500 delay-1400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                ✓ <strong>Transparent Citations:</strong> Complete audit trails for legal confidence
              </div>
            </div>
          </div>
          
          <div className={`flex justify-center space-x-4 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button
              onClick={handleGetStarted}
              className="bg-[#43B88C] hover:bg-[#339966] text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Get Started Free
            </Button>
            
            <Button
              onClick={handleRequestDemo}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0A2F51] px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group transition-all duration-1000 delay-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} onClick={scrollToNext}>
        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 animate-gentle-float">
          <ArrowDown className="w-8 h-8 text-white group-hover:text-white/90 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};
