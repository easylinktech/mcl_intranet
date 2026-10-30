"use client";
import { createContext, useContext } from "react";
import type { SessionUser } from "@/lib/auth";
export const AuthContext = createContext<{
  user: SessionUser | null;
  signIn: (email: string) => boolean;
  signOut: () => void;
}>({ user: null, signIn: () => false, signOut: () => {} });
export const useWorkspaceAuth = () => useContext(AuthContext);
