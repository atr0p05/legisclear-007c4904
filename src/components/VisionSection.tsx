
import { Button } from "@/components/ui/button";

export const VisionSection = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-r from-[#0A2F51] via-[#0E5A8A] to-[#178ACB]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Join the Movement Towards Legislative Clarity
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Together, we're building a future where every citizen can understand 
            the laws that shape their lives. Be part of a more informed democracy.
          </p>
          <p className="text-lg mb-12 opacity-80">
            LegisClear is more than a platform—it's your gateway to becoming an 
            engaged, informed citizen. Join thousands who are already using our 
            AI-powered insights to stay ahead of legislative changes.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button
              size="lg"
              className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-12 py-4 text-lg font-semibold"
            >
              Try the Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#0A2F51] px-12 py-4 text-lg font-semibold"
            >
              Stay Informed
            </Button>
          </div>

          <div className="mt-16 p-8 bg-white/10 backdrop-blur-md rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg opacity-90">
              To become the leading source of truth for legislative understanding, 
              empowering every citizen with the knowledge they need to participate 
              meaningfully in democracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
