"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Search, Check, Users } from "lucide-react";
import {
  directory,
  matchesContact,
  type DirectoryEntry,
} from "@/app/data/directory";
import { PageHeading } from "@/components/layout/page-heading";
import { peopleCategories } from "@/app/data/navigation";

function ContactCard({ person: p }: { person: DirectoryEntry }) {
  const [copied, setCopied] = useState("");
  const priority = [
    "Gurdip Singh",
    "John Karari",
    "Siddharth Naik",
    "Chike Asoh",
    "Brian Okech",
  ].includes(p.name);
  return (
    <article
      className={
        "contact-card person-card " + (priority ? "priority-contact" : "")
      }
    >
      <div className="contact-card-top">
        <span className="person-avatar">{p.initials}</span>
        <span className="contact-kind">
          {priority ? "KEY CONTACT" : p.kind}
        </span>
      </div>
      <span className="department-label">
        {p.department || "Department not provided"}
      </span>
      <h3>{p.name}</h3>
      {p.role && <p className="contact-role">{p.role}</p>}
      <div className="contact-emails">
        {[
          { label: "Guala email", value: p.gualaEmail },
        ].map((e) => (
          <div className="contact-email" key={e.label}>
            <span>{e.label}</span>
            {e.value ? (
              <button
                aria-label={"Copy " + e.label.toLowerCase() + " for " + p.name}
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(e.value);
                    setCopied(e.label);
                    setTimeout(() => setCopied(""), 2500);
                  } catch {
                    setCopied("Unable to copy. Select the address to copy it.");
                  }
                }}
              >
                {copied === e.label ? <Check size={16} /> : <Mail size={16} />}
                <span>{e.value}</span>
              </button>
            ) : (
              <small>Not provided</small>
            )}
          </div>
        ))}
      </div>
      {copied && (
        <small role="status" className="copy-status">
          {copied.includes("Unable") ? copied : "Email address copied."}
        </small>
      )}
      {p.notes && <p className="contact-notes">{p.notes}</p>}
    </article>
  );
}

export function StaffDirectory({
  group = "staff-directory",
}: {
  group?: string;
}) {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");
  const [department, setDepartment] = useState("All departments");
  const [kind, setKind] = useState("All contacts");
  const title =
    peopleCategories.find((p) => p.slug === group)?.title || "Staff Directory";
  const base =
    group === "board-of-directors"
      ? directory.filter((p) => p.role === "Director")
      : group === "executive-management"
        ? directory.filter(
            (p) =>
              p.role === "Director" ||
              p.department === "Plant Manager Tanzania",
          )
        : group === "department-heads"
          ? []
          : directory;
  const results = base.filter(
    (p) =>
      matchesContact(p, query) &&
      (department === "All departments" || p.department === department) &&
      (kind === "All contacts" || p.kind === kind),
  );
  const teams = [
    ...new Set(
      directory
        .filter((p) => p.kind === "Person" && p.department)
        .map((p) => p.department),
    ),
  ].sort();
  return (
    <div className="portal-page directory-page">
      <section className="people-page-hero">
        <img src="/team.jpg" alt="Colleagues connecting and sharing ideas" />
        <div>
          <span>THE STRENGTH BEHIND EVERY CLOSURE</span>
          <h1>
            {group === "staff-directory"
              ? "Good people. Great things."
              : "Connected by purpose."}
          </h1>
          <p>Different skills. Shared ambition. One Metal Crowns.</p>
          <div className="people-hero-stats">
            <span>
              <strong>
                {directory.filter((p) => p.kind === "Person").length}
              </strong>
              People in our directory
            </span>
            <span>
              <strong>
                {
                  new Set(
                    directory
                      .filter((p) => p.kind === "Person" && p.department)
                      .map((p) => p.department),
                  ).size
                }
              </strong>
              Departments & teams
            </span>
          </div>
        </div>
      </section>
      <PageHeading
        section="People"
        title={title}
        description={
          group === "staff-directory"
            ? "The people who make MCL. Find a familiar face, discover a team and make a connection."
            : group === "functional-teams"
              ? "Meet the people behind each part of MCL."
              : "The people and responsibilities behind our shared direction."
        }
      />
      {group === "executive-management" && (
        <div className="information-note">
          Executive appointments have not been provided. These leadership
          contacts are listed with their confirmed titles.
        </div>
      )}
      {group === "board-of-directors" && (
        <div className="information-note">
          The supplied register identifies the director below. Additional board
          appointments can be added when confirmed.
        </div>
      )}
      {group === "department-heads" ? (
        <div className="empty-state">
          <Users size={38} />
          <h2>Department appointments</h2>
          <p>
            Department-head titles have not been supplied. Find current
            departmental contacts in the staff directory and functional teams.
          </p>
          <a className="primary-button" href="/people/functional-teams">
            Explore functional teams
          </a>
        </div>
      ) : (
        <>
          {group === "functional-teams" && (
            <div className="team-selector">
              {teams.map((t) => (
                <button
                  key={t}
                  className={department === t ? "active" : ""}
                  onClick={() =>
                    setDepartment(department === t ? "All departments" : t)
                  }
                >
                  {t}
                  <span>
                    {
                      directory.filter(
                        (p) => p.kind === "Person" && p.department === t,
                      ).length
                    }
                  </span>
                </button>
              ))}
            </div>
          )}
          <div className="directory-filter-row">
            <label className="portal-search">
              <Search size={19} />
              <input
                aria-label="Search people directory"
                placeholder="Search names, departments or email addresses"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <select
              aria-label="Filter by department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option>All departments</option>
              {[...new Set(base.map((p) => p.department).filter(Boolean))]
                .sort()
                .map((d) => (
                  <option key={d}>{d}</option>
                ))}
            </select>
          </div>
          <div className="directory-controls">
            <div className="directory-tabs" aria-label="Contact types">
              {[
                "All contacts",
                "Person",
                "Shared mailbox",
                "Distribution list",
              ].map((k) => (
                <button
                  key={k}
                  aria-pressed={kind === k}
                  className={kind === k ? "active" : ""}
                  onClick={() => setKind(k)}
                >
                  {k === "Person"
                    ? "People"
                    : k === "Shared mailbox"
                      ? "Shared mailboxes"
                      : k === "Distribution list"
                        ? "Distribution lists"
                        : k}
                </button>
              ))}
            </div>
            <span>{results.length} contacts</span>
          </div>
          <div className="directory-grid">
            {results.map((p) => (
              <ContactCard key={p.name} person={p} />
            ))}
          </div>
          {!results.length && (
            <div className="empty-state">
              <Search size={34} />
              <h2>No contacts found</h2>
              <p>Try another name, email or department.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
