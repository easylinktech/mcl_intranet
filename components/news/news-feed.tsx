"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { articles, type Article } from "@/app/data/content";
import { Dialog } from "@/components/ui/dialog";
export function NewsFeed({ compact = false }: { compact?: boolean }) {
  const [article, setArticle] = useState<Article | null>(null);
  return (
    <>
      <div className={compact ? "news-feed" : "portal-news-grid"}>
        {articles.map((a) => (
          <button
            className={compact ? "feed-item" : "portal-news-card"}
            key={a.title}
            onClick={() => setArticle(a)}
          >
            <div className="feed-image">
              <img src={a.image} alt="" />
            </div>
            <div className="feed-copy">
              <span className="feed-category">{a.category}</span>
              <h3>{a.title}</h3>
              <p>{a.summary}</p>
              <small>MCL Communications · {a.date}</small>
            </div>
            <ArrowRight className="feed-arrow" size={20} />
          </button>
        ))}
      </div>
      {article && (
        <Dialog title={article.title} onClose={() => setArticle(null)}>
          <img className="modal-image" src={article.image} alt="" />
          <div className="modal-content">
            <span className="resource-label">{article.category}</span>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <p className="article-date">MCL Communications · {article.date}</p>
          </div>
        </Dialog>
      )}
    </>
  );
}
