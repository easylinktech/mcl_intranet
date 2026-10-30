"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Search,
  FileText,
  ShieldCheck,
  Users,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
} from "lucide-react";
import { directory } from "@/app/data/directory";
import { library } from "@/app/data/library";
const results = [
  ...Object.entries(library)
    .flatMap(([slug, items]) =>
      items.map((item) => ({
        title: item.title,
        description: item.body,
        kind: slug === "policies" ? "Policy" : "Documents",
        url: "/resources/" + slug,
        image: "",
      })),
    )
    .filter(
      (r) =>
        ![
          "client-onboarding",
          "product-knowledge",
          "corporate-documents",
          "industry-statistics",
          "regulatory-guidelines",
          "staff-resources",
        ].some((s) => r.url.endsWith(s)),
    ),
  {
    title: "Safety induction & PPE",
    description: "Start your day with safety in mind.",
    kind: "Training",
    url: "/learning",
    image: "/safety.jpg",
  },
  {
    title: "Quality in every closure",
    description: "Learn about quality in beverage packaging.",
    kind: "Training",
    url: "/learning",
    image: "/factory.jpg",
  },
  ...directory.map((p) => ({
    title: p.name,
    description: [p.role, p.department, p.email, p.gualaEmail].join(" · "),
    kind: "MCL Team",
    url: "/people/staff-directory?q=" + encodeURIComponent(p.name),
    image: "",
  })),
];
export function SearchCentre() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("All");
  const [offset, setOffset] = useState(0);
  const filtered = results.filter(
    (r) =>
      (tab === "All" || tab === r.kind) &&
      (r.title + " " + r.description)
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <section className="search-centre" id="search-centre">
      <div className="home-section-title">
        <h2>
          <em>MCL</em> Search Centre
        </h2>
        <Search size={22} />
      </div>
      <div
        className="search-tabs"
        role="tablist"
        aria-label="Search categories"
      >
        {[
          { name: "All", icon: Search },
          { name: "Documents", icon: FileText },
          { name: "Policy", icon: ShieldCheck },
          { name: "Training", icon: BookOpen },
          { name: "MCL Team", icon: Users },
        ].map((t) => (
          <button
            role="tab"
            aria-selected={tab === t.name}
            className={tab === t.name ? "active" : ""}
            key={t.name}
            onClick={() => {
              setTab(t.name);
              setOffset(0);
            }}
          >
            <t.icon size={15} />
            {t.name}
          </button>
        ))}
      </div>
      <label className="centre-search">
        <Search size={20} />
        <input
          aria-label="Search centre"
          placeholder="Search documents, guidance and people"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOffset(0);
          }}
        />
        {query && (
          <button
            aria-label="Clear search centre"
            onClick={() => {
              setQuery("");
              setOffset(0);
            }}
          >
            <X size={18} />
          </button>
        )}
      </label>
      <div className="results-summary">
        <span>{filtered.length} resources at your fingertips</span>
        <span>
          {filtered.length ? offset + 1 : 0}–
          {Math.min(offset + 2, filtered.length)} of {filtered.length}
        </span>
      </div>
      <div className="search-results">
        {filtered.slice(offset, offset + 2).map((r) => (
          <Link className="resource-card" key={r.title} href={r.url}>
            <div className="resource-cover">
              {r.image ? (
                <img src={r.image} alt="" />
              ) : r.kind === "MCL Team" ? (
                <div className="search-person">
                  <Users size={38} />
                  <span>{r.title}</span>
                </div>
              ) : (
                <div className="document-cover">
                  <img className="document-logo" src="/logo.png" alt="" />
                  <span>METAL CROWNS LIMITED</span>
                  <i />
                  <strong>{r.title}</strong>
                  <span>PEOPLE · QUALITY · INNOVATION</span>
                </div>
              )}
            </div>
            <div className="resource-card-body">
              <small>{r.kind} · Metal Crowns Limited</small>
              <h3>{r.title}</h3>
              <p>{r.description}</p>
              <span className="resource-owner">
                Explore resource <ArrowRight size={18} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      {!filtered.length && (
        <div className="search-empty">
          <Search size={30} />
          <h3>No resources found</h3>
          <p>Try another category or keyword.</p>
        </div>
      )}
      <div className="carousel-controls">
        <span>The right information. A better workday.</span>
        <div>
          <button
            aria-label="Previous resources"
            disabled={offset === 0}
            onClick={() => setOffset(offset - 2)}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next resources"
            disabled={offset + 2 >= filtered.length}
            onClick={() => setOffset(offset + 2)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
