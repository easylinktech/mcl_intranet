"use client";
import { useWorkspaceAuth } from "@/components/auth/auth-context";
import Link from "next/link";
import { ArrowUpRight, Users } from "lucide-react";
export function ProductHero() {
  const { user } = useWorkspaceAuth();
  return (
    <section className="reference-welcome">
      <p className="reference-greeting">
        Good morning, {user?.name || "IT user"}
      </p>
      <h1>
        Investing in <em>you</em>
        <br />
        with confidence.
      </h1>
      <p className="reference-introduction">
        Metal Crowns Limited has been manufacturing quality metal crown caps and
        plastic closures since 1978. We bring innovation to beverage packaging
        through the expertise, care and commitment of our people.
      </p>
      <p className="reference-introduction">
        Your people, knowledge and everyday resources. Connect with the teams
        behind every closure.
      </p>
      <div className="welcome-actions">
        <Link
          className="welcome-cta welcome-cta-primary"
          href="/knowledge-hub/product-knowledge"
        >
          <span>Explore our products</span>
          <ArrowUpRight size={20} />
        </Link>
        <Link
          className="welcome-cta welcome-cta-secondary"
          href="/people/staff-directory"
        >
          <Users size={18} />
          <span>Meet our people</span>
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
