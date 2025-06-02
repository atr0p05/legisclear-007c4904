
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import { useLocation } from "react-router-dom";

interface NavigationButtonsProps {
  onAuthAction: () => void;
  onDemoClick: () => void;
  isScrolled: boolean;
  isAuthenticated: boolean;
}

export const NavigationButtons = ({ 
  onAuthAction, 
  onDemoClick, 
  isScrolled, 
  isAuthenticated 
}: NavigationButtonsProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const showDemoButton = (isHomePage && isScrolled) || !isHomePage;

  return (
    <div className="hidden lg:flex items-center space-x-3">
      {/* Auth Button - Always visible */}
      <Button
        onClick={onAuthAction}
        variant="ghost"
        className={`transition-all duration-300 transform hover:scale-105 ${
          isScrolled || !isHomePage
            ? "text-[#0E5A8A] hover:bg-[#178ACB]/10" 
            : "text-white hover:bg-white/10"
        }`}
      >
        <User className="w-4 h-4 mr-2" />
        {isAuthenticated ? "Dashboard" : "Sign In"}
      </Button>

      {/* Demo Button */}
      <div className={`transition-all duration-500 transform ${
        showDemoButton ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-4 pointer-events-none'
      }`}>
        <Button
          onClick={onDemoClick}
          className="bg-[#178ACB] text-white hover:bg-[#0E5A8A] px-6 py-2 shadow-lg flex items-center gap-2 font-semibold transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group hover:shadow-xl"
        >
          <Calendar className="w-4 h-4 group-hover:animate-bounce" />
          Request Demo
        </Button>
      </div>
    </div>
  );
};
