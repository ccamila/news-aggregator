'use server';
import { createApiClient, handleApiCall } from '@/utils/apiUtils';
import { Article, FilterOptions } from '@/types/news';
import { OmitEmpty } from '@/utils/common';

const apiKey = process.env.NY_TIMES_API_KEY || '';
const baseUrl = 'https://api.nytimes.com/svc/search/v2';
const client = createApiClient(baseUrl);

interface NYTArticle {
  web_url: string;
  headline?: {
    main?: string;
    kicker?: string;
    print_headline?: string;
  };
  abstract?: string;
  snippet?: string;
  byline?: {
    original?: string;
  };
  pub_date?: string;
  section_name?: string;
  source?: string;
  multimedia?: {
    default?: {
      url?: string;
      height?: number;
      width?: number;
    };
  };
}

const normalizeArticle = (article: NYTArticle): Article => {
  return {
    id: article.web_url,
    title: article.headline?.main || 'No title',
    description: article.abstract || article.snippet || '',
    content: article.abstract || article.snippet || '',
    url: article.web_url,
    imageUrl: article.multimedia?.default?.url || '/placeholder-news.jpg',
    publishedAt: article.pub_date || new Date().toISOString(),
    source: {
      id: 'nytimes',
      name: article.source || 'The New York Times',
    },
    category: article.section_name?.toLowerCase() || 'general',
    author: article.byline?.original?.replace('By ', '') || 'The New York Times',
    apiSource: 'NYTimes',
  };
};

const fetchNews = async (filters: FilterOptions): Promise<Article[]> => {
  if (!apiKey) {
    console.error('NYTimes API key is missing');
    return [];
  }

  const params = {
    'api-key': apiKey,
    q: filters.keyword || '',
    begin_date: filters.startDate || '',
    end_date: filters.endDate || '',
    page: filters.page,
  };

  try {
    const data = await handleApiCall(() =>
      client.get<{
        response: {
          docs: NYTArticle[]
        }
      }>('/articlesearch.json', { params: OmitEmpty(params) })
    );
    console.log(data)
    return (data.response.docs || []).map(normalizeArticle);
  } catch (error) {
    console.error('Failed to fetch from NYTimes:', error);
    return [];
  }
};

const getSourceName = (): string => 'nytimes';

export { fetchNews, normalizeArticle, getSourceName };