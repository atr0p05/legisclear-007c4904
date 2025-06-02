
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import { NavigationItem } from "./NavigationItems";

interface DesktopNavigationProps {
  items: NavigationItem[];
  onNavigate: (path: string) => void;
  isScrolled: boolean;
}

export const DesktopNavigation = ({ items, onNavigate, isScrolled }: DesktopNavigationProps) => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="hidden lg:flex items-center space-x-6">
      {items.map((item, index) => (
        <div key={item.label} className="relative">
          {item.hasDropdown ? (
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                className={`relative transition-all duration-300 font-medium text-sm hover:scale-105 transform group flex items-center gap-1 ${
                  isScrolled || !isHomePage
                    ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                    : "text-white/90 hover:text-white drop-shadow-sm"
                }`}
              >
                {item.label}
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {item.items?.map((subItem) => (
                    <button
                      key={subItem.path}
                      onClick={() => onNavigate(subItem.path)}
                      className="block w-full text-left px-4 py-2 text-[#0E5A8A] hover:bg-[#178ACB]/10 hover:text-[#178ACB] transition-colors duration-200"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => onNavigate(item.path!)}
              className={`relative transition-all duration-300 font-medium text-sm hover:scale-105 transform group ${
                isScrolled || !isHomePage
                  ? "text-[#0E5A8A] hover:text-[#178ACB]" 
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
