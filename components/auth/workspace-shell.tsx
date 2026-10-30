"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FileText, ShieldCheck, CalendarDays } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SESSION_KEY, type SessionUser, signInAccounts } from "@/lib/auth";
import { AuthContext } from "./auth-context";
export function WorkspaceShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<SessionUser | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
      const match = signInAccounts.find((a) => a.email === saved?.email);
      if (match) {
        const { password: _, ...profile } = match;
        setUser(profile);
      }
    } catch {
      sessionStorage.removeItem(SESSION_KEY);
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready && !user && pathname !== "/sign-in") {
      router.replace(
        "/sign-in?next=" +
          encodeURIComponent(pathname + window.location.search),
      );
    }
  }, [ready, user, pathname, router]);
  const signIn = (email: string, password: string) => {
    const match = signInAccounts.find(
      (a) => a.email === email.trim().toLowerCase() && a.password === password,
    );
    if (!match) return false;
    const { password: _, ...profile } = match;
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(profile));
    setUser(profile);
    return true;
  };
  const signOut = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setUser(null);
    router.replace("/sign-in");
  };
  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {pathname === "/sign-in" ? (
        children
      ) : ready && user ? (
        <>
          <a className="skip-link" href="#workspace">
            Skip to content
          </a>
          <SiteHeader />
          <div className="workspace-toolbar">
            <span>
              <ShieldCheck size={14} />
              Your workplace. Connected.
            </span>
            <div>
              <span className="toolbar-today">
                <CalendarDays size={13} />
                MCL employee workspace
              </span>
              <Link href="/requests">
                <FileText size={14} />
                My requests
              </Link>
            </div>
          </div>
          <div id="workspace">{children}</div>
          <SiteFooter />
        </>
      ) : (
        <div className="workspace-loading">
          <img src="/logo.png" alt="MCL" />
          <span>Opening your workspace…</span>
        </div>
      )}
    </AuthContext.Provider>
  );
}
