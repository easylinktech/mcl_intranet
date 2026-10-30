import { Suspense } from "react";
import { SignInForm } from "@/components/auth/sign-in-form";
export default function SignInPage() {
  return (
    <Suspense
      fallback={<div className="workspace-loading">Opening sign-in…</div>}
    >
      <SignInForm />
    </Suspense>
  );
}
