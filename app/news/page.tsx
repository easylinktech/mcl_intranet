import { PageHeading } from "@/components/layout/page-heading";
import { NewsFeed } from "@/components/news/news-feed";
export default function NewsPage() {
  return (
    <main className="portal-page">
      <PageHeading
        title="News at MCL"
        description="The people, progress and stories shaping our workplace."
      />
      <NewsFeed />
    </main>
  );
}
