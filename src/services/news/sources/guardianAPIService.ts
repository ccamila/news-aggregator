'use server';
import { createApiClient, handleApiCall } from '@/utils/apiUtils';
import { Article, FilterOptions } from '@/types/news';
import { OmitEmpty } from '@/utils/common';

const apiKey = process.env.GUARDIAN_API_KEY || '';
const baseUrl = 'https://content.guardianapis.com';
const client = createApiClient(baseUrl);

const normalizeArticle = (article: {
  id: string;
  url: string;
  title?: string;
  description?: string;
  content?: string;
  publishedAt?: string;
  source?: { name?: string; id?: string };
  author?: string;
  thumbnail?: string;
}): Article => ({
  id: article.id,
  title: article.title || 'No title available',
  description: article.description || '',
  content: article.content || '',
  url: article.url,
  imageUrl: article.thumbnail || '/placeholder-news.jpg',
  publishedAt: article.publishedAt || new Date().toISOString(),
  source: {
    id: article.source?.id || 'unknown',
    name: article.source?.name || 'Unknown source',
  },
  category: 'general',
  author: article.author || 'Unknown author',
  apiSource: 'The Guardian',
});

const fetchNews = async (filters: FilterOptions): Promise<Article[]> => {
  if (!apiKey) {
    console.error('The Guardian API key is missing');
    return [];
  }

  const params = {
    'api-key': apiKey,
    q: filters.keyword || '',
    'from-date': filters.startDate || '',
    'to-date': filters.endDate || '',
    'use-date': 'published',
    'show-fields': 'thumbnail,byline',
    'page-size': filters.pageSize,
    'page': filters.page,
  };

  try {
    const response = await handleApiCall<{
      response: {
        results: Array<{
          id: string;
          type: string;
          sectionId: string;
          sectionName: string;
          webPublicationDate: string;
          webTitle: string;
          webUrl: string;
          fields?: {
            trailText?: string;
            body?: string;
            byline?: string;
            thumbnail?: string;
          };
        }>;
        currentPage: number;
        pages: number;
        total: number;
      };
    }>(() => client.get('/search', { params: OmitEmpty(params) }));

    console.log(response)
    
    return (response.response.results || []).map(article => ({
      id: article.id,
      url: article.webUrl,
      title: article.webTitle,
      description: article.fields?.trailText || '',
      content: article.fields?.body || '',
      publishedAt: article.webPublicationDate,
      source: {
        name: 'The Guardian',
        id: article.sectionId
      },
      author: article.fields?.byline,
      thumbnail: article.fields?.thumbnail
    })).map(normalizeArticle);
  } catch (error) {
    console.error('Failed to fetch from The Guardian:', error);
    return [];
  }
};

const getSourceName = (): string => 'theguardian';

export { fetchNews, normalizeArticle, getSourceName };