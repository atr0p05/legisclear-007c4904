import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-[#0A2F51] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Logo className="text-white mb-4" size={36} />
            <p className="text-gray-300">
              Demystifying legislation for all. Empowering citizens with 
              AI-powered insights into government bills and laws.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
              <li>
                <a href="#" className="text-gray-300 hover:text-[#43B88C] transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with the latest legislative insights and platform updates.
            </p>
            <div className="flex space-x-4">
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
            © 2025 LegisClear. All rights reserved. Empowering democracy through clarity.
          </p>
        </div>
      </div>
    </footer>
  );
};
