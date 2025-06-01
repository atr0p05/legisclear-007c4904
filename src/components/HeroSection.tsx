
import React from "react";
import { EnhancedCTAButton } from "@/components/EnhancedCTAButton";
import { ArrowDown } from "lucide-react";
import { useOneTimeAnimation } from "@/hooks/useOneTimeAnimation";

export const HeroSection = () => {
  const { elementRef: heroRef, isVisible } = useOneTimeAnimation({ threshold: 0.1 });

  const scrollToNext = () => {
    const element = document.getElementById("challenge");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
              Precision Legal Intelligence,
            </span>
            <br />
            <span className={`text-[#43B88C] inline-block transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Powered by 
              <span className={`mx-2 transition-all duration-500 delay-500 ${
                isVisible ? 'text-shadow-sm' : ''
              }`}>
                RAG AI
              </span>
              .
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 text-gray-200 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Revolutionary Retrieval-Augmented Generation technology transforms complex legislation and case law 
            into verified, actionable insights. Experience AI with an expert legal library and built-in fact-checker 
            that delivers 6-80x faster research with unmatched accuracy.
          </p>
          
          <div className={`bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 transition-all duration-1000 delay-700 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <p className="text-lg font-medium mb-2">The RAG Advantage:</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className={`transition-all duration-500 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>✓ Source-Verified Accuracy</div>
              <div className={`transition-all duration-500 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>✓ Real-Time Legal Updates</div>
              <div className={`transition-all duration-500 delay-1400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>✓ Transparent Citations</div>
            </div>
          </div>
          
          <div className={`flex justify-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <EnhancedCTAButton
              variant="demo"
              href="mailto:andre@legisclear.com?subject=Request for RAG Demo - See RAG in Action"
              stage="decision"
            >
              See RAG in Action - Request Demo
            </EnhancedCTAButton>
          </div>
        </div>
      </div>

      {/* Smooth scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group transition-all duration-1000 delay-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} onClick={scrollToNext}>
        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white group-hover:animate-pulse" />
        </div>
      </div>
    </section>
  );
};
