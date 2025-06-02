
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Calendar, Menu, X, User } from "lucide-react";
import { useHeroVisibility } from "@/hooks/useOneTimeAnimation";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { heroRef, isHeroVisible } = useHeroVisibility();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Set hero ref to the actual hero element
    const heroElement = document.getElementById('hero');
    if (heroElement && heroRef.current !== heroElement) {
      heroRef.current = heroElement;
    }
  }, [heroRef]);

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
      setIsMobileMenuOpen(false);
    }
  };

  const openDemoEmail = () => {
    window.location.href = "mailto:andre@legisclear.com?subject=Request for RAG Demo";
  };

  const handleAuthAction = () => {
    if (isAuthenticated) {
      navigate("/app");
    } else {
      navigate("/login");
    }
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

  // Show demo button only when scrolled AND hero is not visible
  const showDemoButton = isScrolled && !isHeroVisible;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg transform translate-y-0"
          : "bg-white/20 backdrop-blur-sm border-b border-white/20"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Logo 
            className={`transition-all duration-300 transform hover:scale-105 cursor-pointer ${
              isScrolled ? "text-[#0A2F51]" : "text-white drop-shadow-md"
            }`}
            size={32}
            onClick={() => navigate("/")}
          />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className={`relative transition-all duration-300 font-medium text-sm hover:scale-105 transform group ${
                  isScrolled 
                    ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                    : "text-white/90 hover:text-white drop-shadow-sm"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-all duration-300 transform hover:scale-110 ${
                isScrolled 
                  ? "text-[#0E5A8A] hover:bg-[#178ACB]/10" 
                  : "text-white hover:bg-white/10"
              }`}
            >
              <div className="relative">
                <Menu className={`w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`w-6 h-6 absolute top-0 left-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Auth Button - Always visible */}
            <Button
              onClick={handleAuthAction}
              variant="ghost"
              className={`transition-all duration-300 transform hover:scale-105 ${
                isScrolled 
                  ? "text-[#0E5A8A] hover:bg-[#178ACB]/10" 
                  : "text-white hover:bg-white/10"
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              {isAuthenticated ? "Dashboard" : "Sign In"}
            </Button>

            {/* Demo Button - Only show when hero is not visible */}
            <div className={`transition-all duration-500 transform ${
              showDemoButton ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-4 pointer-events-none'
            }`}>
              <Button
                onClick={openDemoEmail}
                className="bg-[#178ACB] hover:bg-[#0E5A8A] text-white px-6 py-2 shadow-lg flex items-center gap-2 font-semibold transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group hover:shadow-xl"
              >
                <Calendar className="w-4 h-4 group-hover:animate-bounce" />
                Request Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0 mt-0'
        }`}>
          <div className={`rounded-lg shadow-lg transition-all duration-300 ${
            isScrolled ? "bg-white" : "bg-white/95 backdrop-blur-md"
          }`}>
            <div className="py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block w-full text-left px-4 py-3 text-[#0E5A8A] hover:bg-[#178ACB]/10 hover:text-[#178ACB] transition-all duration-300 font-medium transform hover:translate-x-2"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)'
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-gray-200 mt-2 pt-2 space-y-2">
                <button
                  onClick={handleAuthAction}
                  className="block w-full text-left px-4 py-3 text-[#0E5A8A] hover:bg-[#178ACB]/10 hover:text-[#178ACB] transition-all duration-300 font-medium transform hover:translate-x-2"
                >
                  {isAuthenticated ? "Dashboard" : "Sign In"}
                </button>
                <button
                  onClick={openDemoEmail}
                  className="block w-full text-left px-4 py-3 text-[#178ACB] font-semibold hover:bg-[#178ACB]/10 transition-all duration-300 transform hover:translate-x-2"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
