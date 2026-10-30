import { notFound } from "next/navigation";
import { resourceCategories } from "@/app/data/navigation";
import { ResourceLibrary } from "@/components/resources/resource-library";
export function generateStaticParams() {
  return resourceCategories.map((c) => ({ slug: c.slug }));
}
export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!resourceCategories.some((c) => c.slug === slug)) notFound();
  return (
    <main>
      <ResourceLibrary slug={slug} />
    </main>
  );
}
