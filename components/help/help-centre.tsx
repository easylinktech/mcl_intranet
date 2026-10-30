"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Search,
  ChevronDown,
  Wrench,
  Users,
  FileText,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { PageHeading } from "@/components/layout/page-heading";
const questions = [
  {
    q: "How do I request time away?",
    a: "Plan your dates and handover, discuss them with your line manager and confirm the approved leave process with HR. You can prepare and save your leave request in My requests.",
  },
  {
    q: "Who can help with a computer or access issue?",
    a: "Contact ICT through the staff directory or prepare an IT support request. Include the affected device, the issue and when it started. Never include your password.",
  },
  {
    q: "Where can I find policies and forms?",
    a: "Open Resources in the navigation. Policies, HR Forms, Finance Forms and Operations each have a dedicated library. Ask the responsible department for an approved version when needed.",
  },
  {
    q: "Are requests sent automatically?",
    a: "Requests and event RSVPs are stored in this browser. They are not sent to a department. Use the approved internal channel when you need action or formal approval.",
  },
  {
    q: "How do I report a workplace safety concern?",
    a: "Follow your site’s safety procedure and notify your supervisor. For an immediate hazard, use the designated on-site reporting process rather than an online request.",
  },
  {
    q: "How do I update directory information?",
    a: "Contact Administration or HR with the correct full name, department, role and email addresses so the internal directory can be updated.",
  },
];
export function HelpCentre() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState("");
  return (
    <div className="portal-page">
      <PageHeading
        title="MCL Help Centre"
        description="Find a clear answer, a useful resource or the right person to ask."
      />
      <div className="help-page-hero">
        <img src="/team.jpg" alt="Colleagues working together" />
        <div>
          <span>WE’RE HERE TO HELP</span>
          <h2>
            Support starts
            <br />
            with a conversation.
          </h2>
        </div>
      </div>
      <div className="help-options">
        {[
          {
            title: "IT support",
            text: "Devices, software and access.",
            icon: Wrench,
            url: "/requests?type=it",
          },
          {
            title: "People & HR",
            text: "Leave and workplace questions.",
            icon: Users,
            url: "/people/staff-directory?q=Human%20Resources",
          },
          {
            title: "Policies & forms",
            text: "A useful place to start.",
            icon: FileText,
            url: "/resources",
          },
          {
            title: "Safety & quality",
            text: "Find guidance and team contacts.",
            icon: ShieldCheck,
            url: "/resources/policies",
          },
        ].map((h) => (
          <Link key={h.title} href={h.url}>
            <h.icon size={27} />
            <h3>{h.title}</h3>
            <p>{h.text}</p>
            <ArrowRight size={20} />
          </Link>
        ))}
      </div>
      <div className="faq-heading">
        <h2>Frequently asked questions</h2>
        <label className="portal-search">
          <Search size={19} />
          <input
            aria-label="Search help topics"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search help topics"
          />
        </label>
      </div>
      <div className="faq-list">
        {questions
          .filter((f) =>
            (f.q + " " + f.a).toLowerCase().includes(query.toLowerCase()),
          )
          .map((f, i) => (
            <article key={f.q}>
              <button
                aria-expanded={open === f.q}
                aria-controls={"answer-" + i}
                onClick={() => setOpen(open === f.q ? "" : f.q)}
              >
                {f.q}
                <ChevronDown size={21} />
              </button>
              {open === f.q && <p id={"answer-" + i}>{f.a}</p>}
            </article>
          ))}
      </div>
      {!questions.some((f) =>
        (f.q + " " + f.a).toLowerCase().includes(query.toLowerCase()),
      ) && (
        <div className="empty-state">
          <h2>No matching help topics</h2>
          <p>Try another keyword or contact the relevant team.</p>
        </div>
      )}
    </div>
  );
}
