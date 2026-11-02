import { ResourceLibrary } from "@/components/resources/resource-library";
import Link from "next/link";
export default function KnowledgePage() {
  return (
    <main>
      <ResourceLibrary section="knowledge-hub" />
      <div className="portal-page">
        <Link href="/guala-closures" className="guala-hub-link">
          <img src="/images/guala_logo.svg" alt="Guala Closures" width="180" height="31" />
          <span>Explore the Group, our Crown Division connection and closure solutions →</span>
        </Link>
      </div>
    </main>
  );
}
