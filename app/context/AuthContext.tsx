"use client";

import React, { createContext, useContext, useState } from "react";

type Role = 'admin' | 'viewer' | 'editor';

interface IUser {
  name: string;
  email: string;
  role: Role;
}

interface AuthContextType {
  user: IUser | null;
  isAuth: boolean;
  login: (user: IUser) => void;
  logout: () => void;
  hasRole: (role: Role) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const login = (user: IUser) => {
    setUser(user);
  }
  
  const logout = () => {
    setUser(null);
  }

  const hasRole = (role: Role) => {
    return user?.role === role;
  }

  return ( 
    <AuthContext.Provider
      value={{
        user,
        isAuth: !!user,
        login,
        logout,
        hasRole
      }}
    >
    {children}
  </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};