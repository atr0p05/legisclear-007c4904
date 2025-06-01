
import { EnhancedCTAButton } from "@/components/EnhancedCTAButton";
import { useOneTimeAnimation } from "@/hooks/useOneTimeAnimation";
import { useLegalStatistic } from "@/hooks/useLegalStatistic";
import { useEffect } from "react";

export const VisionSection = () => {
  const { elementRef: sectionRef, isVisible } = useOneTimeAnimation({ threshold: 0.2 });
  const { elementRef: statsRef, isVisible: statsVisible } = useOneTimeAnimation({ threshold: 0.5 });
  
  const stat1 = useLegalStatistic("6-80x", { duration: 2500 });
  const stat2 = useLegalStatistic("48%", { duration: 2000 });  
  const stat3 = useLegalStatistic("840%+", { duration: 3000 });

  useEffect(() => {
    if (statsVisible && !stat1.hasStarted) {
      // Start animations with stagger, but only once
      setTimeout(() => stat1.startAnimation(), 200);
      setTimeout(() => stat2.startAnimation(), 400);
      setTimeout(() => stat3.startAnimation(), 600);
    }
  }, [statsVisible, stat1, stat2, stat3]);

  return (
    <section id="vision" className="py-20 bg-gradient-to-r from-[#0A2F51] via-[#0E5A8A] to-[#178ACB]" ref={sectionRef}>
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto text-white">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Ready to Transform Your Legal Practice with RAG?
          </h2>
          
          <p className={`text-xl md:text-2xl mb-8 opacity-90 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            The Legal Technology Market is projected to reach $60.04 billion by 2032. 
            Position your practice at the forefront of this transformation with RAG-powered legal intelligence 
            that reduces costs, accelerates research, and delivers measurable ROI through verifiable AI.
          </p>
          
          <p className={`text-lg mb-12 opacity-80 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Join the growing community of legal professionals leveraging LegisClear's RAG technology. 
            Experience firsthand how our platform transforms your practice by dramatically slashing administrative overhead, 
            accelerating research capabilities, and delivering unprecedented ROI—all through instant access 
            to comprehensive, source-verified legal knowledge.
          </p>

          <div ref={statsRef} className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`p-6 bg-white/10 backdrop-blur-md rounded-lg transform transition-all duration-1000 hover:scale-105 hover:bg-white/15 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-2 text-[#43B88C]">{stat1.value}</h3>
              <p className="opacity-90">Faster RAG-powered research than traditional methods</p>
            </div>
            
            <div className={`p-6 bg-white/10 backdrop-blur-md rounded-lg transform transition-all duration-1000 hover:scale-105 hover:bg-white/15 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '400ms' }}>
              <h3 className="text-2xl font-bold mb-2 text-[#43B88C]">{stat2.value}</h3>
              <p className="opacity-90">Reduction in non-billable admin time through RAG automation</p>
            </div>
            
            <div className={`p-6 bg-white/10 backdrop-blur-md rounded-lg transform transition-all duration-1000 hover:scale-105 hover:bg-white/15 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '600ms' }}>
              <h3 className="text-2xl font-bold mb-2 text-[#43B88C]">{stat3.value}</h3>
              <p className="opacity-90">First-year ROI achieved by firms using RAG technology</p>
            </div>
          </div>

          <div className={`p-8 bg-white/10 backdrop-blur-md rounded-lg transform transition-all duration-1000 hover:bg-white/15 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1000ms' }}>
            <h3 className="text-2xl font-bold mb-4">Our Vision: Pioneering RAG for the Legal Profession</h3>
            <p className="text-lg opacity-90">
              To revolutionize legal practice by empowering every legal professional and academic institution 
              with verifiable, RAG-driven intelligence. We believe that by grounding AI in truth and transparency, 
              we can elevate the standard of legal service delivery, accelerate discovery, and foster more just outcomes. 
              LegisClear LLC: Where precision meets intelligence, powered by the next generation of legal AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
