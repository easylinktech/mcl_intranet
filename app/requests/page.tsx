import { Suspense } from "react";
import { RequestCentre } from "@/components/requests/request-centre";
export default function RequestsPage() {
  return (
    <main>
      <Suspense fallback={<p className="portal-page">Loading requests…</p>}>
        <RequestCentre />
      </Suspense>
    </main>
  );
}
