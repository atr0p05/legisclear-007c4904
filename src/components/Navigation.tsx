
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Calendar, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const openDemoEmail = () => {
    window.location.href = "mailto:andre@legisclear.com?subject=Request for RAG Demo";
  };

  const navigationItems = [
    { label: "The Challenge", sectionId: "challenge" },
    { label: "Our Solution", sectionId: "solution" },
    { label: "Benefits", sectionId: "benefits" },
    { label: "Tailored Solutions", sectionId: "tailored-solutions" },
    { label: "How It Works", sectionId: "how-it-works" },
    { label: "Trust & Security", sectionId: "trust-security" },
    { label: "About Us", sectionId: "about-us" }
  ];

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
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className={`transition-colors duration-300 font-medium text-sm hover:scale-105 transform transition-transform ${
                  isScrolled 
                    ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                    : "text-white/90 hover:text-white drop-shadow-sm"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Button
              onClick={openDemoEmail}
              className="bg-[#178ACB] hover:bg-[#0E5A8A] text-white px-4 py-2 shadow-lg flex items-center gap-2 font-semibold text-sm"
            >
              <Calendar className="w-4 h-4" />
              Demo
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled 
                  ? "text-[#0E5A8A] hover:bg-[#178ACB]/10" 
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={openDemoEmail}
              className="bg-[#178ACB] hover:bg-[#0E5A8A] text-white px-6 py-2 shadow-lg flex items-center gap-2 font-semibold"
            >
              <Calendar className="w-4 h-4" />
              Request Demo
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-4 rounded-lg shadow-lg ${
            isScrolled ? "bg-white" : "bg-white/95 backdrop-blur-md"
          }`}>
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block w-full text-left px-4 py-3 text-[#0E5A8A] hover:bg-[#178ACB]/10 hover:text-[#178ACB] transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
