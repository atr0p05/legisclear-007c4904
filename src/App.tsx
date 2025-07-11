
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import LawFirms from "./pages/solutions/LawFirms";
import CorporateLegal from "./pages/solutions/CorporateLegal";
import IndividualAttorneys from "./pages/solutions/IndividualAttorneys";
import WhyAI from "./pages/WhyAI";
import TrustSecurity from "./pages/TrustSecurity";
import AboutUs from "./pages/AboutUs";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import App from "./pages/App";
import NotFound from "./pages/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const AppRouter = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Platform is now the homepage */}
            <Route path="/" element={<Platform />} />
            
            {/* Redirect old platform route to home */}
            <Route path="/platform" element={<Navigate to="/" replace />} />
            
            {/* Solutions Pages */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/law-firms" element={<LawFirms />} />
            <Route path="/solutions/corporate-legal" element={<CorporateLegal />} />
            <Route path="/solutions/individual-attorneys" element={<IndividualAttorneys />} />
            
            {/* Company Pages */}
            <Route path="/why-ai" element={<WhyAI />} />
            <Route path="/trust-security" element={<TrustSecurity />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Authentication Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected Product Application */}
            <Route 
              path="/app" 
              element={
                <ProtectedRoute>
                  <App />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/app/*" 
              element={
                <ProtectedRoute>
                  <App />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppRouter;
