"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowDownToLine,
  FileText,
  Search,
  Palette,
  Check,
} from "lucide-react";
import { resourceCategories, knowledgeCategories } from "@/app/data/navigation";
import { library, type LibraryItem } from "@/app/data/library";
import { directory } from "@/app/data/directory";
import { Dialog } from "@/components/ui/dialog";
import { PageHeading } from "@/components/layout/page-heading";
import { downloadText } from "@/lib/download";

export function ResourceLibrary({
  section = "resources",
  slug,
}: {
  section?: "resources" | "knowledge-hub";
  slug?: string;
}) {
  const categories =
    section === "resources" ? resourceCategories : knowledgeCategories;
  const category = categories.find((c) => c.slug === slug);
  const [query, setQuery] = useState("");
  const [item, setItem] = useState<LibraryItem | null>(null);
  const [person, setPerson] = useState("Gurdip Singh");
  const [saved, setSaved] = useState(false);
  const title =
    category?.title ||
    (section === "resources" ? "Resources" : "Knowledge Hub");
  const entries = slug ? library[slug] || [] : [];
  const contact = directory.find((p) => p.name === person)!;
  const cardText = `${contact.name}\n${contact.role || contact.department}\nMetal Crowns Limited\n${contact.gualaEmail || contact.email}\n${contact.email}`;
  return (
    <div className="portal-page">
      <PageHeading
        section={
          category
            ? section === "resources"
              ? "Resources"
              : "Knowledge Hub"
            : undefined
        }
        title={title}
        description={
          category?.description ||
          (section === "resources"
            ? "Everything you need to work confidently, organised by purpose."
            : "Shared knowledge. Better decisions. A stronger MCL.")
        }
      />
      {!slug ? (
        <div className="category-grid">
          {categories.map((c, i) => (
            <Link
              className="category-card"
              href={"/" + section + "/" + c.slug}
              key={c.slug}
            >
              <div className="category-image">
                <img src={c.image} alt={c.title + " workplace resources"} />
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="category-copy">
                <h2>{c.title}</h2>
                <p>{c.description}</p>
                <span>
                  Explore resources <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <>
          <div className="category-banner">
            <img src={category?.image} alt="" />
            <div>
              <span>
                MCL{" "}
                {section === "resources" ? "RESOURCE LIBRARY" : "KNOWLEDGE HUB"}
              </span>
              <h2>{title}</h2>
              <p>{category?.description}</p>
            </div>
          </div>
          <label className="portal-search library-search">
            <Search size={19} />
            <input
              aria-label="Search resources"
              placeholder={"Search " + title.toLowerCase()}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <div className="library-list">
            {entries
              .filter((e) =>
                (e.title + " " + e.body)
                  .toLowerCase()
                  .includes(query.toLowerCase()),
              )
              .map((e) => (
                <article className="library-row" key={e.title}>
                  <span className="library-icon">
                    {e.type === "logo" ? (
                      <Palette size={25} />
                    ) : (
                      <FileText size={25} />
                    )}
                  </span>
                  <div>
                    <span className="resource-label">
                      {e.type === "logo"
                        ? "PNG ASSET"
                        : e.type === "card"
                          ? "CONTACT DETAILS"
                          : "WORKING GUIDE"}
                    </span>
                    <h3>{e.title}</h3>
                    <p>{e.body.split("\n")[0].slice(0, 150)}</p>
                  </div>
                  <button
                    className="secondary-button"
                    onClick={() => {
                      setItem(e);
                      setSaved(false);
                    }}
                  >
                    Open <ArrowRight size={16} />
                  </button>
                </article>
              ))}
          </div>
          {!entries.some((e) =>
            (e.title + " " + e.body)
              .toLowerCase()
              .includes(query.toLowerCase()),
          ) && (
            <div className="empty-state">
              <Search size={30} />
              <h2>No resources found</h2>
              <p>Try a different search term.</p>
            </div>
          )}
          <div className="library-guidance">
            <FileText size={20} />
            <p>
              These working guides and worksheets help you prepare. Ask the
              responsible department for the current approved policy, form or
              specification.
            </p>
          </div>
        </>
      )}
      {item && (
        <Dialog title={item.title} onClose={() => setItem(null)}>
          <div className="modal-content">
            <span className="resource-label">{title}</span>
            <h2>{item.title}</h2>
            {item.type === "logo" ? (
              <>
                <div className="logo-preview">
                  <img src="/logo.png" alt="Metal Crowns Limited logo" />
                </div>
                <p>{item.body}</p>
                <a
                  className="primary-button"
                  href="/logo.png"
                  download="mcl-logo.png"
                >
                  <ArrowDownToLine size={18} />
                  Download logo
                </a>
              </>
            ) : item.type === "card" ? (
              <>
                <p>{item.body}</p>
                <label className="field-label">
                  Colleague
                  <select
                    value={person}
                    onChange={(e) => setPerson(e.target.value)}
                  >
                    {directory
                      .filter((p) => p.kind === "Person")
                      .map((p) => (
                        <option key={p.name}>{p.name}</option>
                      ))}
                  </select>
                </label>
                <div className="business-card-preview">
                  <img src="/logo.png" alt="" />
                  <span>METAL CROWNS LIMITED</span>
                  <h3>{contact.name}</h3>
                  <p>{contact.role || contact.department}</p>
                  <small>
                    {contact.gualaEmail ||
                      contact.email ||
                      "Email not provided"}
                  </small>
                </div>
                <button
                  className="primary-button"
                  onClick={() =>
                    downloadText("Business card details - " + person, cardText)
                  }
                >
                  <ArrowDownToLine size={18} />
                  Download contact sheet
                </button>
              </>
            ) : (
              <>
                <p className="guide-body">{item.body}</p>
                <button
                  className="primary-button"
                  onClick={() => {
                    downloadText(item.title, item.body);
                    setSaved(true);
                  }}
                >
                  {saved ? <Check size={18} /> : <ArrowDownToLine size={18} />}
                  Download guide
                </button>
                {saved && <p role="status">Your text document is ready.</p>}
              </>
            )}
          </div>
        </Dialog>
      )}
    </div>
  );
}
