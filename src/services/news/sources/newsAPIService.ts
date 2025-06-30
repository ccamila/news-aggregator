'use server';
import { createApiClient, handleApiCall } from '@/utils/apiUtils';
import { Article, FilterOptions } from '@/types/news';
import { OmitEmpty } from '@/utils/common';

const apiKey = process.env.NEWS_API_KEY || '';
const baseUrl = 'https://newsapi.org/v2';
const client = createApiClient(baseUrl);

const normalizeArticle = (article: {
  url: string;
  title?: string;
  description?: string;
  content?: string;
  urlToImage?: string;
  publishedAt?: string;
  source?: { name?: string; id?: string };
  author?: string;
}): Article => ({
  id: article.url,
  title: article.title || 'No title available',
  description: article.description || '',
  content: article.content || '',
  url: article.url,
  imageUrl: article.urlToImage || '/placeholder-news.jpg',
  publishedAt: article.publishedAt || new Date().toISOString(),
  source: {
    id: article.source?.id || 'unknown',
    name: article.source?.name || 'Unknown source',
  },
  category: 'general',
  author: article.author || 'Unknown author',
  apiSource: 'NewsAPI',
});

const fetchNews = async (filters: FilterOptions): Promise<Article[]> => {
  if (!apiKey) {
    console.error('NewsAPI API key is missing');
    return [];
  }

  const params = {
    apiKey,
    q: filters.keyword || '',
    category: filters.category || '',
    sources: filters.source || '',
    from: filters.startDate || '',
    to: filters.endDate || '',
  };

  try {
    const data = await handleApiCall(() =>
      client.get<{
        articles: Array<{
          url: string;
          title?: string;
          description?: string;
          content?: string;
          urlToImage?: string;
          publishedAt?: string;
          source?: { name?: string; id?: string };
          author?: string;
        }>
      }>('/everything', { params: OmitEmpty(params) })
    );
    return (data.articles || []).map(normalizeArticle);
  } catch (error) {
    console.error('Failed to fetch from NewsAPI:', error);
    return [];
  }
};

const getSourceName = (): string => 'newsapi';

export { fetchNews, normalizeArticle, getSourceName };