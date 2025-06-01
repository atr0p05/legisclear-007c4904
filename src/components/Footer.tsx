
import { Logo } from "@/components/Logo";
import { Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0A2F51] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Logo className="text-white mb-4" size={36} />
            <p className="text-gray-300">
              LegisClear: RAG-Powered Clarity for the Legal Profession.
              Empowering legal professionals with verifiable, source-grounded AI intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about-us" className="text-gray-300 hover:text-[#43B88C] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#solution" className="text-gray-300 hover:text-[#43B88C] transition-colors">
                  RAG Solution
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-[#43B88C] transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#43B88C] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#43B88C] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#43B88C] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with the latest RAG innovations and legal intelligence insights.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/legisclear" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center hover:bg-[#005885] transition-colors"
              >
                <Linkedin size={16} className="text-white" />
              </a>
              <div className="w-8 h-8 bg-[#178ACB] rounded-full flex items-center justify-center">
                <span className="text-xs">T</span>
              </div>
              <div className="w-8 h-8 bg-[#29A09D] rounded-full flex items-center justify-center">
                <span className="text-xs">L</span>
              </div>
              <div className="w-8 h-8 bg-[#43B88C] rounded-full flex items-center justify-center">
                <span className="text-xs">F</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 LegisClear. All rights reserved. Verifiable Legal Intelligence. Powered by RAG.
          </p>
        </div>
      </div>
    </footer>
  );
};
