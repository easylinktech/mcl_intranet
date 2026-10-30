"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Search,
} from "lucide-react";
import {
  resourceCategories,
  knowledgeCategories,
  peopleCategories,
} from "@/app/data/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState("");
  const [mobile, setMobile] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openOnHover = (title: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (window.matchMedia("(hover: hover)").matches) setOpen(title);
  };
  const closeOnLeave = () => {
    if (window.matchMedia("(hover: hover)").matches)
      closeTimer.current = setTimeout(() => setOpen(""), 170);
  };
  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );
  useEffect(() => {
    setOpen("");
    setMobile(false);
  }, [pathname]);
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen("");
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);
  const groups = [
    { title: "Resources", path: "/resources", items: resourceCategories },
    {
      title: "Knowledge Hub",
      path: "/knowledge-hub",
      items: knowledgeCategories,
    },
    { title: "People", path: "/people", items: peopleCategories },
  ];
  return (
    <header
      className="portal-header"
      ref={ref}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen("");
          ref.current
            ?.querySelector<HTMLButtonElement>('[aria-expanded="true"]')
            ?.focus();
        }
      }}
    >
      <Link className="brand" href="/" aria-label="MCL Connect home">
        <span className="brand-emblem">
          <img
            className="mcl-logo"
            src="/logo.png"
            alt="Metal Crowns Limited logo"
            width={51}
            height={40}
          />
        </span>
        <span className="brand-wordmark">
          <span className="brand-name">
            MCL<span>connect</span>
          </span>
          <small>METAL CROWNS LIMITED</small>
        </span>
      </Link>
      <button
        className="portal-menu-toggle"
        aria-label={mobile ? "Close menu" : "Open menu"}
        aria-expanded={mobile}
        onClick={() => setMobile(!mobile)}
      >
        {mobile ? <X /> : <Menu />}
      </button>
      <nav
        aria-label="Main navigation"
        className={"portal-nav " + (mobile ? "mobile-expanded" : "")}
      >
        <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
          Home
        </Link>
        {groups.map((g) => (
          <div
            className="nav-group"
            key={g.title}
            onMouseEnter={() => openOnHover(g.title)}
            onMouseLeave={closeOnLeave}
          >
            <button
              aria-expanded={open === g.title}
              aria-controls={"nav-" + g.title.replaceAll(" ", "-")}
              className={pathname.startsWith(g.path) ? "current" : ""}
              onClick={() => setOpen(g.title)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setOpen(g.title);
                  setTimeout(
                    () =>
                      document
                        .getElementById("nav-" + g.title.replaceAll(" ", "-"))
                        ?.querySelector<HTMLAnchorElement>("a")
                        ?.focus(),
                    0,
                  );
                }
              }}
            >
              {g.title}
              <ChevronDown size={15} />
            </button>
            {open === g.title && (
              <div
                className="nav-dropdown"
                id={"nav-" + g.title.replaceAll(" ", "-")}
              >
                <div className="dropdown-intro">
                  <img
                    src={
                      g.title === "Resources"
                        ? "/images/crowns-hero.png"
                        : g.title === "People"
                          ? "/team.jpg"
                          : "/images/bottles-light.png"
                    }
                    alt=""
                  />
                  <div>
                    <span className="dropdown-kicker">
                      EXPLORE {g.title.toUpperCase()}
                    </span>
                    <strong>
                      {g.title === "People"
                        ? "Good people. Great possibilities."
                        : g.title === "Resources"
                          ? "Everything for your workday."
                          : "Knowledge worth sharing."}
                    </strong>
                  </div>
                </div>
                {g.items.map((item) => (
                  <Link key={item.slug} href={g.path + "/" + item.slug}>
                    {item.title}
                    <ArrowUpRight size={14} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link
          href="/learning"
          aria-current={pathname === "/learning" ? "page" : undefined}
        >
          Learning
        </Link>
        <Link
          href="/events"
          aria-current={pathname === "/events" ? "page" : undefined}
        >
          Events
        </Link>
        <Link
          href="/news"
          aria-current={pathname === "/news" ? "page" : undefined}
        >
          News
        </Link>
        <Link
          href="/help"
          aria-current={pathname === "/help" ? "page" : undefined}
        >
          Help Centre
        </Link>
      </nav>
      <div className="header-controls">
        <Link
          href="/#search-centre"
          className="header-search"
          aria-label="Search MCL Connect"
        >
          <Search size={19} />
        </Link>

      </div>
    </header>
  );
}
