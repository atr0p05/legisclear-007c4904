
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Download, Phone } from "lucide-react";

interface EnhancedCTAButtonProps {
  variant?: "primary" | "secondary" | "demo" | "contact" | "download";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  stage?: "awareness" | "consideration" | "decision";
}

export const EnhancedCTAButton = ({ 
  variant = "primary", 
  children, 
  onClick, 
  className = "",
  stage = "consideration"
}: EnhancedCTAButtonProps) => {
  const getIcon = () => {
    switch (variant) {
      case "demo":
        return <Calendar className="w-4 h-4" />;
      case "contact":
        return <Phone className="w-4 h-4" />;
      case "download":
        return <Download className="w-4 h-4" />;
      default:
        return <ArrowRight className="w-4 h-4" />;
    }
  };

  const getStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-[#43B88C] hover:bg-[#29A09D] text-white shadow-lg hover:shadow-xl transform hover:scale-105";
      case "secondary":
        return "border-2 border-[#178ACB] text-[#178ACB] hover:bg-[#178ACB] hover:text-white bg-white";
      case "demo":
        return "bg-[#178ACB] hover:bg-[#0E5A8A] text-white shadow-lg";
      case "contact":
        return "bg-[#29A09D] hover:bg-[#178ACB] text-white shadow-lg";
      case "download":
        return "bg-white text-[#0A2F51] border-2 border-[#178ACB] hover:bg-[#178ACB] hover:text-white shadow-md";
      default:
        return "bg-[#43B88C] hover:bg-[#29A09D] text-white";
    }
  };

  return (
    <Button
      onClick={onClick}
      className={`
        ${getStyles()}
        px-6 py-3 rounded-lg font-semibold
        transition-all duration-300 ease-in-out
        flex items-center gap-2
        ${className}
      `}
    >
      {variant === "download" && <Download className="w-4 h-4" />}
      {children}
      {variant !== "download" && getIcon()}
    </Button>
  );
};
