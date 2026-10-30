import { Suspense } from "react";
import { notFound } from "next/navigation";
import { peopleCategories } from "@/app/data/navigation";
import { StaffDirectory } from "@/components/directory/staff-directory";
export function generateStaticParams() {
  return peopleCategories.map((c) => ({ group: c.slug }));
}
export default async function PeoplePage({
  params,
}: {
  params: Promise<{ group: string }>;
}) {
  const { group } = await params;
  if (!peopleCategories.some((c) => c.slug === group)) notFound();
  return (
    <main>
      <Suspense fallback={<p className="portal-page">Loading directory…</p>}>
        <StaffDirectory group={group} />
      </Suspense>
    </main>
  );
}
