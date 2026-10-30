"use client";
import { useWorkspaceAuth } from "@/components/auth/auth-context";
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
        Welcome to your shared space to stay informed, find the resources you
        need and connect with the teams behind every closure.
      </p>
    </section>
  );
}
