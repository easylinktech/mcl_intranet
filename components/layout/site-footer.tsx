import Link from "next/link";
import { ArrowRight, ArrowUpRight, LifeBuoy } from "lucide-react";

const linkGroups = [
  { title: "Our workplace", links: [
    ["Staff directory", "/people/staff-directory"], ["News & updates", "/news"],
    ["Events calendar", "/events"], ["Learning Centre", "/learning"],
  ] },
  { title: "Resources & knowledge", links: [
    ["Policies", "/resources/policies"], ["HR forms", "/resources/hr-forms"],
    ["Finance forms", "/resources/finance-forms"], ["Knowledge Hub", "/knowledge-hub"],
    ["Product knowledge", "/knowledge-hub/product-knowledge"],
  ] },
  { title: "Help & requests", links: [
    ["Help Centre", "/help"], ["My requests", "/requests"],
    ["Request leave", "/requests?type=leave"], ["IT support", "/requests?type=it"],
  ] },
];

export function SiteFooter() {
  return (
    <footer className="portal-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-identity">
            <Link href="/" className="footer-home" aria-label="MCL Connect home">
              <img src="/logo.png" alt="" width="48" height="48" />
              <span className="footer-wordmark">MCL<span>connect</span><small>METAL CROWNS LIMITED</small></span>
            </Link>
            <p className="footer-tagline">Our people. Our place.<br />Our shared future.</p>
            <p className="footer-description">Your everyday connection to the people, knowledge and support at Metal Crowns.</p>
            <Link className="footer-support" href="/help"><LifeBuoy size={18} /> Find the help you need <ArrowRight size={16} /></Link>
          </div>
          {linkGroups.map((group) => (
            <nav className="footer-links" key={group.title} aria-label={`Footer: ${group.title}`}>
              <h2>{group.title}</h2>
              <ul>{group.links.map(([title, href]) => <li key={href}><Link href={href}>{title}</Link></li>)}</ul>
            </nav>
          ))}
        </div>
        <div className="footer-group">
          <div className="footer-group-identity">
            <span className="footer-group-logo"><img src="/images/guala_logo.svg" alt="Guala Closures" width="180" height="31" /></span>
            <p>Local expertise.<br /><strong>A global connection.</strong></p>
          </div>
          <div className="footer-group-links">
            <Link href="/guala-closures">Discover Guala Closures <ArrowRight size={16} /></Link>
            <a href="https://www.gualaclosures.com/" target="_blank" rel="noopener noreferrer" aria-label="Guala Closures official website (opens in a new tab)">Official website <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© 2026 Metal Crowns Limited. All rights reserved.</small>
          <span>MCL Connect · Internal workspace</span>
          <Link href="/#search-centre">Search the workspace <ArrowRight size={14} /></Link>
        </div>
      </div>
    </footer>
  );
}
