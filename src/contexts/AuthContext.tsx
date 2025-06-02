
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  email: string;
  name?: string;
  organization?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing authentication on app load
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const userEmail = localStorage.getItem("userEmail");
    const userName = localStorage.getItem("userName");
    const userOrganization = localStorage.getItem("userOrganization");

    if (isAuthenticated && userEmail) {
      setUser({
        email: userEmail,
        name: userName || undefined,
        organization: userOrganization || undefined
      });
    }
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", userData.email);
    if (userData.name) localStorage.setItem("userName", userData.name);
    if (userData.organization) localStorage.setItem("userOrganization", userData.organization);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("userOrganization");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
