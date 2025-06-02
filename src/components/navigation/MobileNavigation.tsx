
import { useLocation } from "react-router-dom";
import { NavigationItem } from "./NavigationItems";

interface MobileNavigationProps {
  items: NavigationItem[];
  isOpen: boolean;
  onNavigate: (path: string) => void;
  onAuthAction: () => void;
  onDemoClick: () => void;
  isScrolled: boolean;
  isAuthenticated: boolean;
}

export const MobileNavigation = ({ 
  items, 
  isOpen, 
  onNavigate, 
  onAuthAction, 
  onDemoClick, 
  isScrolled,
  isAuthenticated 
}: MobileNavigationProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
      isOpen ? 'max-h-96 mt-4' : 'max-h-0 mt-0'
    }`}>
      <div className={`rounded-lg shadow-lg transition-all duration-300 ${
        isScrolled || !isHomePage ? "bg-white" : "bg-white/95 backdrop-blur-md"
      }`}>
        <div className="py-4 space-y-2">
          {items.map((item) => (
            <div key={item.label}>
              {item.hasDropdown ? (
                <div>
                  <div className="px-4 py-2 text-[#0E5A8A] font-semibold text-sm border-b border-gray-200">
                    {item.label}
                  </div>
                  {item.items?.map((subItem) => (
                    <button
                      key={subItem.path}
                      onClick={() => onNavigate(subItem.path)}
                      className="block w-full text-left px-8 py-2 text-[#0E5A8A] hover:bg-[#178ACB]/10 hover:text-[#178ACB] transition-all duration-300 transform hover:translate-x-2"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              ) : (
                <button
                  onClick={() => onNavigate(item.path!)}
                  className="block w-full text-left px-4 py-3 text-[#0E5A8A] hover:bg-[#178ACB]/10 hover:text-[#178ACB] transition-all duration-300 font-medium transform hover:translate-x-2"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
          <div className="border-t border-gray-200 mt-2 pt-2 space-y-2">
            <button
              onClick={onAuthAction}
              className="block w-full text-left px-4 py-3 text-[#0E5A8A] hover:bg-[#178ACB]/10 hover:text-[#178ACB] transition-all duration-300 font-medium transform hover:translate-x-2"
            >
              {isAuthenticated ? "Dashboard" : "Sign In"}
            </button>
            <button
              onClick={onDemoClick}
              className="block w-full text-left px-4 py-3 text-[#178ACB] font-semibold hover:bg-[#178ACB]/10 transition-all duration-300 transform hover:translate-x-2"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
