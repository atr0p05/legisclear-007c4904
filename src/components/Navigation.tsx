
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Calendar } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/20 backdrop-blur-sm border-b border-white/20"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Logo 
            className={`transition-colors duration-300 ${
              isScrolled ? "text-[#0A2F51]" : "text-white drop-shadow-md"
            }`}
            size={32}
          />
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("solution")}
              className={`transition-colors duration-300 font-medium ${
                isScrolled 
                  ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              RAG Solution
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className={`transition-colors duration-300 font-medium ${
                isScrolled 
                  ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className={`transition-colors duration-300 font-medium ${
                isScrolled 
                  ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("insights-hub")}
              className={`transition-colors duration-300 font-medium ${
                isScrolled 
                  ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              Insights Hub
            </button>
            <button
              onClick={() => scrollToSection("about-us")}
              className={`transition-colors duration-300 font-medium ${
                isScrolled 
                  ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              About Us
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("roi-calculator")}
            className="bg-[#178ACB] hover:bg-[#0E5A8A] text-white px-6 py-2 shadow-lg flex items-center gap-2 font-semibold"
          >
            <Calendar className="w-4 h-4" />
            Request Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};
