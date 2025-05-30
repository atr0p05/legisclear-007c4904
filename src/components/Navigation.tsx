
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
          <div className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-[#0A2F51]" : "text-white drop-shadow-md"
          }`}>
            LegisClear
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("challenge")}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              The Challenge
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              Our Solution
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              Pricing
            </button>
          </div>
          <Button
            onClick={() => scrollToSection("vision")}
            className="bg-[#178ACB] hover:bg-[#0E5A8A] text-white px-6 py-2 shadow-lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
