
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Logo } from "@/components/Logo";
import { mainNavItems } from "./navigation/NavigationItems";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
import { MobileNavigation } from "./navigation/MobileNavigation";
import { NavigationButtons } from "./navigation/NavigationButtons";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md shadow-lg transform translate-y-0"
          : "bg-white/20 backdrop-blur-sm border-b border-white/20"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Logo 
            className={`transition-all duration-300 transform hover:scale-105 cursor-pointer ${
              isScrolled || !isHomePage ? "text-[#0A2F51]" : "text-white drop-shadow-md"
            }`}
            size={32}
            onClick={() => navigate("/")}
          />
          
          {/* Desktop Navigation */}
          <DesktopNavigation 
            items={mainNavItems}
            onNavigate={handleNavigation}
            isScrolled={isScrolled}
          />

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-all duration-300 transform hover:scale-110 ${
                isScrolled || !isHomePage
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
          <NavigationButtons 
            onAuthAction={handleAuthAction}
            onDemoClick={openDemoEmail}
            isScrolled={isScrolled}
            isAuthenticated={isAuthenticated}
          />
        </div>

        {/* Mobile Menu */}
        <MobileNavigation 
          items={mainNavItems}
          isOpen={isMobileMenuOpen}
          onNavigate={handleNavigation}
          onAuthAction={handleAuthAction}
          onDemoClick={openDemoEmail}
          isScrolled={isScrolled}
          isAuthenticated={isAuthenticated}
        />
      </div>
    </nav>
  );
};
