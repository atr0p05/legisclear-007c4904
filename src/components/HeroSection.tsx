
import { EnhancedCTAButton } from "@/components/EnhancedCTAButton";
import { ArrowDown } from "lucide-react";
import { useTypeWriter } from "@/hooks/useTypeWriter";
import { useParallax } from "@/hooks/useAnimationSequence";

export const HeroSection = () => {
  const { displayText, isComplete } = useTypeWriter("Precision Legal Intelligence,", 3000, 1000);
  const { elementRef: parallaxRef, offset } = useParallax(0.3);

  const scrollToNext = () => {
    const element = document.getElementById("challenge");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBenefits = () => {
    const element = document.getElementById("benefits");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2F51] via-[#0E5A8A] to-[#178ACB]"></div>
      
      {/* Enhanced animated background elements */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#29A09D] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#43B88C] rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Particle animation overlay */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="inline-block animate-fade-in-up">
              {displayText}
              {!isComplete && <span className="typewriter-cursor">|</span>}
            </span>
            <br />
            <span className={`text-[#43B88C] inline-block transition-all duration-1000 ${
              isComplete ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-4'
            }`}>
              Powered by RAG AI.
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 text-gray-200 transition-all duration-1000 delay-500 ${
            isComplete ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            Revolutionary Retrieval-Augmented Generation technology transforms complex legislation and case law 
            into verified, actionable insights. Experience AI with an expert legal library and built-in fact-checker 
            that delivers 6-80x faster research with unmatched accuracy.
          </p>
          
          <div className={`bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 transition-all duration-1000 delay-700 transform ${
            isComplete ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
          }`}>
            <p className="text-lg font-medium mb-2">The RAG Advantage:</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="animate-fade-in-left" style={{ animationDelay: '1s' }}>✓ Source-Verified Accuracy</div>
              <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>✓ Real-Time Legal Updates</div>
              <div className="animate-fade-in-right" style={{ animationDelay: '1.4s' }}>✓ Transparent Citations</div>
            </div>
          </div>
          
          <div className={`space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center transition-all duration-1000 delay-1000 ${
            isComplete ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            <EnhancedCTAButton
              variant="demo"
              href="mailto:andre@legisclear.com?subject=Request for RAG Demo - See RAG in Action"
              stage="decision"
            >
              See RAG in Action - Request Demo
            </EnhancedCTAButton>
            <EnhancedCTAButton
              variant="secondary"
              onClick={scrollToBenefits}
              stage="consideration"
            >
              Discover RAG Benefits
            </EnhancedCTAButton>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group" onClick={scrollToNext}>
        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
          <ArrowDown className="w-8 h-8 text-white group-hover:animate-pulse" />
        </div>
      </div>
    </section>
  );
};
