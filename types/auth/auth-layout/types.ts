import  { ReactNode } from "react";

export interface AuthLayoutProps {
     children: ReactNode
}

// Simple user interface for auth only
export interface AuthUser {
  uid: string;
  email: string;
  username: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
  hasCompletedOnboarding: boolean;
  emailVerified: boolean;
}

// OTP storage interface
export interface OTPData {
  code: string;
  email: string;
  uid: string;
  expiresAt: Date;
}