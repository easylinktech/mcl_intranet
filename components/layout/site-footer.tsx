import Link from "next/link";
export function SiteFooter() {
  return (
    <footer className="portal-footer">
      <Link href="/" className="footer-brand">
        MCL<span>connect</span>
      </Link>
      <p>Our people. Our place. Our shared future.</p>
      <div>
        <Link href="/people/staff-directory">Staff directory</Link>
        <Link href="/help">Help Centre</Link>
        <Link href="/requests">My requests</Link>
      </div>
      <small>© 2026 Metal Crowns Limited · Internal workspace</small>
    </footer>
  );
}
