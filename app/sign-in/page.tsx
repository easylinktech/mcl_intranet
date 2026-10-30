"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Keep old bookmarks working without showing a sign-in screen.
export default function SignInPage() {
  const router = useRouter();
  useEffect(() => {
    const next = new URLSearchParams(window.location.search).get("next");
    const target = next && /^\/(?![\\/])/.test(next) && !next.startsWith("/sign-in")
      ? next
      : "/";
    router.replace(target);
  }, [router]);
  return <div className="workspace-loading">Opening your workspace...</div>;
}
