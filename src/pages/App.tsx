
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { LogOut, User, Settings, Home } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

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
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to LegisClear
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Your RAG-powered legal intelligence platform is ready to transform your practice.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#178ACB] rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Research Assistant</h3>
                  <p className="text-sm text-gray-600">
                    Get instant access to verified legal research with complete source citations.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#43B88C] rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Document Analysis</h3>
                  <p className="text-sm text-gray-600">
                    Upload and analyze legal documents with AI-powered insights.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#0E5A8A] rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Case Management</h3>
                  <p className="text-sm text-gray-600">
                    Organize and track your legal cases with intelligent automation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#178ACB] to-[#43B88C] rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6 opacity-90">
              This is where we'll integrate the full LegisClear product components from your other project. 
              The authentication and routing infrastructure is now ready for the next phase.
            </p>
            <Button
              className="bg-white text-[#178ACB] hover:bg-gray-100"
              onClick={() => {
                alert("Next phase: Import product components from the other Lovable project!");
              }}
            >
              Launch LegisClear AI
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
