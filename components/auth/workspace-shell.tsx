import Link from "next/link";
import { FileText, ShieldCheck, CalendarDays } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export function WorkspaceShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#workspace">
        Skip to content
      </a>
      <SiteHeader />
      <div className="workspace-toolbar">
        <span>
          <ShieldCheck size={14} />
          Your workplace. Connected.
        </span>
        <div>
          <span className="toolbar-today">
            <CalendarDays size={13} />
            MCL employee workspace
          </span>
          <Link href="/requests">
            <FileText size={14} />
            My requests
          </Link>
        </div>
      </div>
      <div id="workspace">{children}</div>
      <SiteFooter />
    </>
  );
}
