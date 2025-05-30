
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById("challenge");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2F51] via-[#0E5A8A] to-[#178ACB]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#29A09D] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#43B88C] rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Unravel the Law.
            <br />
            <span className="text-[#43B88C]">Understand Your Future.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in delay-300">
            Leveraging AI to transform complex government bills into understandable, 
            actionable insights for every citizen.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center animate-fade-in delay-600">
            <Button
              onClick={scrollToNext}
              size="lg"
              className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-4 text-lg"
            >
              Explore the Platform
            </Button>
            <Button
              onClick={scrollToNext}
              variant="outline"
              size="lg"
              className="border-white text-[#43B88C] hover:bg-white hover:text-[#0A2F51] px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};
