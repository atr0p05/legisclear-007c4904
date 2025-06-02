
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { LogOut, User, Settings, Home } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { DocumentUpload } from "@/components/product/DocumentUpload";
import { ResearchAssistant } from "@/components/product/ResearchAssistant";
import { CaseManager } from "@/components/product/CaseManager";

export const App = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Logo className="text-[#0A2F51]" size={32} />
              <div className="text-sm text-gray-600">
                Welcome back, {user?.name || user?.email}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="flex items-center space-x-2"
              >
                <Home size={16} />
                <span>Marketing Site</span>
              </Button>
              
              <Button
                variant="ghost"
                className="flex items-center space-x-2"
              >
                <Settings size={16} />
                <span>Settings</span>
              </Button>
              
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="flex items-center space-x-2 text-red-600 hover:text-red-700"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">LegisClear Dashboard</h1>
            <p className="text-gray-600">Your AI-powered legal intelligence platform</p>
          </div>

          {/* Product Components Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-8">
              <ResearchAssistant />
              <CaseManager />
            </div>
            <div>
              <DocumentUpload />
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#178ACB]">24</div>
              <div className="text-sm text-gray-600">Active Cases</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#43B88C]">156</div>
              <div className="text-sm text-gray-600">Documents Processed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#0E5A8A]">89%</div>
              <div className="text-sm text-gray-600">Research Accuracy</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#178ACB]">12hrs</div>
              <div className="text-sm text-gray-600">Time Saved</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
