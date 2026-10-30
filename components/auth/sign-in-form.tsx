"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Mail } from "lucide-react";
import { useWorkspaceAuth } from "./auth-context";
export function SignInForm() {
  const { signIn } = useWorkspaceAuth();
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  return (
    <main className="sign-in-page">
      <section className="sign-in-story">
        <img
          className="sign-in-image"
          src="/images/crowns-hero.png"
          alt="Metal crown caps and plastic bottle closures"
        />
        <a className="sign-in-brand" href="/sign-in">
          <img src="/logo.png" alt="Metal Crowns Limited logo" />
          <span>
            MCL<span>connect</span>
            <small>METAL CROWNS LIMITED</small>
          </span>
        </a>
        <div className="sign-in-story-copy">
          <span>THE PEOPLE BEHIND EVERY CLOSURE</span>
          <h1>
            Great products.
            <br />
            Even greater people.
          </h1>
          <p>
            Your people, your knowledge and your workday.
            <br />
            Welcome to a more connected MCL.
          </p>
          <small>Manufacturing excellence since 1978</small>
        </div>
      </section>
      <section className="sign-in-panel">
        <div className="sign-in-form-wrap">
          <span className="section-kicker">YOUR WORKPLACE, CONNECTED</span>
          <h2>Good to have you here.</h2>
          <p>Sign in to your MCL workspace.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setError("");
              if (signIn(email)) {
                const next = params.get("next");
                router.replace(
                  next?.startsWith("/") && !next.startsWith("//") ? next : "/",
                );
              } else
                setError(
                  "Please enter a valid email address.",
                );
            }}
          >
            <label>
              Email address
              <div className="sign-in-input">
                <Mail size={19} />
                <input
                  type="email"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@metalcrowns.com"
                />
              </div>
            </label>
            {error && (
              <p className="sign-in-error" role="alert">
                {error}
              </p>
            )}
            <button className="sign-in-submit" type="submit">
              Sign in <ArrowRight size={19} />
            </button>
          </form>
          <small className="sign-in-note">
            Demo access. Enter your email to continue; no password required.
          </small>
        </div>
        <div className="sign-in-footer">
          © 2026 Metal Crowns Limited <span>Our people. Our place.</span>
        </div>
      </section>
    </main>
  );
}
