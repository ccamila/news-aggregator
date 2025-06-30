import { Article, FilterOptions } from '@/types/news';

export interface INewsService {
  fetchNews(filters: FilterOptions): Promise<Article[]>;
  getSourceName(): string;
  // eslint-disable-next-line
  normalizeArticle(article: any): Article;
}