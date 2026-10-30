import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/intranet.css";
import "./styles/readability.css";
import "./styles/portal.css";
import { WorkspaceShell } from "@/components/auth/workspace-shell";
import "./styles/refresh.css";
import "./styles/reference.css";
import "./styles/motion.css";
export const metadata: Metadata = {
  title: "MCL Connect | Our people. Our place.",
  description:
    "Metal Crowns Limited employee workspace. Our people, knowledge and shared future.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <WorkspaceShell>{children}</WorkspaceShell>
      </body>
    </html>
  );
}
