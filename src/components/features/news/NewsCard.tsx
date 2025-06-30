import { Article } from "@/types/news";
import Image from "next/image";

export const NewsCard = ({ article }: { article: Article }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <article key={`${article.id}-${article.publishedAt}`} className="card bg-base-100 w-70 shadow-sm">
      {article.imageUrl && (
        <figure>
          <Image
            width={500}
            height={500}
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-25 object-cover"
          />
        </figure>

      )}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-blue-600">{article.source?.name || 'Unknown Source'}</span>
          <span className="text-xs text-gray-500">{formatDate(article.publishedAt)}</span>
        </div>
        <h2 className="text-xl font-bold mb-2 line-clamp-2">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            {article.title}
          </a>
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
        <div className="flex justify-between items-center">
          <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
            via: {article.apiSource || 'General'}
          </span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            Read more →
          </a>
        </div>
        <div className="card-actions justify-start">
      <div className="badge badge-soft badge-secondary">{article.category}</div>
    </div>
      </div>
    </article>
  );
};