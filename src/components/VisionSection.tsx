
import { Button } from "@/components/ui/button";

export const VisionSection = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-r from-[#0A2F51] via-[#0E5A8A] to-[#178ACB]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Partner with LegisClear: Lead the Future of Legal Work
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            The Legal Technology Market is projected to reach $60.04 billion by 2032. 
            Position your practice at the forefront of this transformation with AI-powered legal intelligence.
          </p>
          <p className="text-lg mb-12 opacity-80">
            Join the growing community of legal professionals who are leveraging AI to reduce costs, 
            accelerate research, and deliver exceptional client value. Experience the competitive advantage 
            that comes from instant access to comprehensive legal knowledge.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button
              size="lg"
              className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-12 py-4 text-lg font-semibold"
            >
              Request a Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-[#43B88C] hover:bg-white hover:text-[#0A2F51] px-12 py-4 text-lg font-semibold"
            >
              See LegisClear in Action
            </Button>
          </div>

          <div className="mt-16 p-8 bg-white/10 backdrop-blur-md rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg opacity-90">
              To revolutionize legal practice by democratizing access to comprehensive legal intelligence, 
              empowering every legal professional with AI-driven insights that accelerate decision-making, 
              reduce costs, and elevate the standard of legal service delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
