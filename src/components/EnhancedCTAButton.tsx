
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Download, Phone } from "lucide-react";
import { useState } from "react";

interface EnhancedCTAButtonProps {
  variant?: "primary" | "secondary" | "demo" | "contact" | "download";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  stage?: "awareness" | "consideration" | "decision";
  href?: string;
}

export const EnhancedCTAButton = ({ 
  variant = "primary", 
  children, 
  onClick, 
  className = "",
  stage = "consideration",
  href
}: EnhancedCTAButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    switch (variant) {
      case "demo":
        return <Calendar className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />;
      case "contact":
        return <Phone className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'animate-pulse' : ''}`} />;
      case "download":
        return <Download className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />;
      default:
        return <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`} />;
    }
  };

  const getStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-[#43B88C] hover:bg-[#29A09D] text-white shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1";
      case "secondary":
        return "border-2 border-[#178ACB] text-[#178ACB] hover:bg-[#178ACB] hover:text-white bg-white hover:shadow-lg transform hover:scale-105";
      case "demo":
        return "bg-[#178ACB] hover:bg-[#0E5A8A] text-white shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1";
      case "contact":
        return "bg-[#29A09D] hover:bg-[#178ACB] text-white shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1";
      case "download":
        return "bg-white text-[#0A2F51] border-2 border-[#178ACB] hover:bg-[#178ACB] hover:text-white shadow-md hover:shadow-lg transform hover:scale-105";
      default:
        return "bg-[#43B88C] hover:bg-[#29A09D] text-white hover:shadow-lg transform hover:scale-105";
    }
  };

  const handleClick = () => {
    if (href) {
      window.location.href = href;
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${getStyles()}
        px-6 py-3 rounded-lg font-semibold
        transition-all duration-300 ease-in-out
        flex items-center gap-2
        relative overflow-hidden
        group
        ${className}
      `}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      
      <span className="relative z-10">{children}</span>
      <span className="relative z-10">
        {getIcon()}
      </span>
    </Button>
  );
};
