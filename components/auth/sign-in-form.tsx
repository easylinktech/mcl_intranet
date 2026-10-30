"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Mail, LockKeyhole } from "lucide-react";
import { useWorkspaceAuth } from "./auth-context";
export function SignInForm() {
  const { signIn } = useWorkspaceAuth();
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
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
              if (signIn(email, password)) {
                const next = params.get("next");
                router.replace(
                  next?.startsWith("/") && !next.startsWith("//") ? next : "/",
                );
              } else
                setError(
                  "That email and password don’t match. Check your credentials and try again.",
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
            <label>
              Password
              <div className="sign-in-input">
                <LockKeyhole size={19} />
                <input
                  type={visible ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  aria-label={visible ? "Hide password" : "Show password"}
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
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
            Presentation access only. Credentials are checked in this browser.
          </small>
        </div>
        <div className="sign-in-footer">
          © 2026 Metal Crowns Limited <span>Our people. Our place.</span>
        </div>
      </section>
    </main>
  );
}
