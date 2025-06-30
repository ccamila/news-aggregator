
import { INewsService, NewsServiceFactory } from './';
import { Article, FilterOptions } from '@/types/news';
import { DEFAULT_SOURCES, mockResponse } from './constants';

let services: INewsService[] = [];

const selectedSources = DEFAULT_SOURCES;
// const selectedSources = [] as const;

function initializeServices(): INewsService[] {
  
  services = selectedSources.map(source => {
    try {
      return NewsServiceFactory.createService(source);
    } catch (error) {
      console.error(`Failed to initialize ${source} service:`, error);
      return null;
    }
  }).filter(Boolean) as INewsService[];
  
  return services;
}

function removeDuplicateArticles(articles: Article[]): Article[] {
  const uniqueUrls = new Set<string>();
  return articles.filter(article => {
    if (uniqueUrls.has(article.url)) {
      return false;
    }
    uniqueUrls.add(article.url);
    return true;
  });
}

export async function searchNews(filters: FilterOptions): Promise<Article[]> {
  if (services.length === 0) {
    initializeServices();
  }

  if (services.length === 0) {
    console.warn('No news services available, returning a Mock Response');
    return mockResponse;
  }

  try {
    // Execute all service calls in parallel
    const results = await Promise.all(
      services.map(service => 
        service.fetchNews(filters).catch(error => {
          console.error(`Error fetching from ${service.getSourceName()}:`, error);
          return [];
        })
      )
    );

    // Flatten the array of article arrays and remove duplicates
    const allArticles = results.flat();
    const uniqueArticles = removeDuplicateArticles(allArticles);

    // Sort by publication date (newest first)
    return uniqueArticles.sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    } catch (error) {
      console.error('Error in searchNews:', error);
      return [];
    }
  }
