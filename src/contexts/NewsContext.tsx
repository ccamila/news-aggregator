import { createContext } from 'react';
import { Article, FilterOptions } from '@/types/news';

export interface NewsContextType {
  // State
  loading: boolean;
  page: number;
  articles: Article[];
  error: string | null;
  hasMore: boolean;
  keyword: string;
  
  // Actions
  setLoading: (loading: boolean) => void;
  setPage: (page: number) => void;
  setArticles: (articles: Article[]) => void;
  setError: (error: string | null) => void;
  setHasMore: (hasMore: boolean) => void;
  setKeyword: (keyword: string) => void;
  
  // Functions
  fetchArticles: (filters: FilterOptions) => Promise<void>;
  handleSearch: (filters: FilterOptions) => void;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export default NewsContext;
