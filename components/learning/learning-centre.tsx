"use client";
import { useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { PageHeading } from "@/components/layout/page-heading";
import { Dialog } from "@/components/ui/dialog";
const modules = [
  {
    title: "Safety induction & PPE",
    image: "/safety.jpg",
    body: "Check the protective equipment required for your work area with your supervisor. Know your evacuation route and reporting process. Report hazards promptly and follow approved equipment procedures. Ask for your site induction before working in a new area.",
  },
  {
    title: "Quality in every closure",
    image: "/images/crowns-hero.png",
    body: "Quality starts with every handover. Use the approved inspection checklist, record concerns and consult Quality Control when material needs review. Confirm the current specification before communicating product performance or release decisions.",
  },
  {
    title: "Working better, together",
    image: "/team.jpg",
    body: "Clear communication builds stronger teams. Share shift updates, listen to colleagues and use the staff directory to find the right department. Recognise a helpful colleague and make time to pass on what you have learned.",
  },
];
export function LearningCentre() {
  const [active, setActive] = useState<(typeof modules)[number] | null>(null);
  return (
    <div className="portal-page">
      <PageHeading
        title="Learning Centre"
        description="Practical knowledge for a safer, more connected and confident workday."
      />
      <div className="category-grid">
        {modules.map((m) => (
          <button
            className="category-card"
            key={m.title}
            onClick={() => setActive(m)}
          >
            <div className="category-image">
              <img src={m.image} alt="" />
              <span>
                <BookOpen size={23} />
              </span>
            </div>
            <div className="category-copy">
              <span className="resource-label">LEARNING MODULE</span>
              <h2>{m.title}</h2>
              <p>{m.body}</p>
              <span>
                Read training brief <ArrowRight size={19} />
              </span>
            </div>
          </button>
        ))}
      </div>
      {active && (
        <Dialog title={active.title} onClose={() => setActive(null)}>
          <img className="modal-image" src={active.image} alt="" />
          <div className="modal-content">
            <span className="resource-label">LEARNING CENTRE</span>
            <h2>{active.title}</h2>
            <p>{active.body}</p>
          </div>
        </Dialog>
      )}
    </div>
  );
}
