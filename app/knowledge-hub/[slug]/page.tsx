import { notFound } from "next/navigation";
import { knowledgeCategories } from "@/app/data/navigation";
import { ResourceLibrary } from "@/components/resources/resource-library";
export function generateStaticParams() {
  return knowledgeCategories.map((c) => ({ slug: c.slug }));
}
export default async function KnowledgePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!knowledgeCategories.some((c) => c.slug === slug)) notFound();
  return (
    <main>
      <ResourceLibrary section="knowledge-hub" slug={slug} />
    </main>
  );
}
