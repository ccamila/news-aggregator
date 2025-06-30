'use client';

import { ReactNode, useCallback, useState } from 'react';
import { Article, FilterOptions } from '@/types/news';
import { searchNews } from '@/services/news/NewsAggregatorService';
import NewsContext from '@/contexts/NewsContext';


interface NewsProviderProps {
  children: ReactNode;
}

const NewsProvider: React.FC<NewsProviderProps> = ({ children }) => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchArticles = useCallback(async (filters: FilterOptions) => {
    try {
      setLoading(true);
      setError(null);

      const result = await searchNews({
        ...filters,
        page: filters.page || 1,
        pageSize: 10,
      });

      if (filters.page && filters.page > 1) {
        setArticles(prev => removeDuplicateArticles([...prev, ...result]));
      } else {
        setArticles(result);
      }
      
      setHasMore(result.length === (filters.pageSize || 10));
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError('Failed to load articles. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = useCallback((filters: FilterOptions) => {
    setPage(1);
    fetchArticles({ ...filters, page: 1 });
  }, [fetchArticles]);

  const removeDuplicateArticles = (articles: Article[]) => {
    return articles.filter((article, index) => articles.findIndex(a => a.id === article.id) === index)
  }

  const value = {
    loading,
    page,
    articles,
    error,
    hasMore,
    keyword,
    
    setLoading,
    setPage,
    setKeyword,
    setArticles,
    setError,
    setHasMore,
    
    fetchArticles,
    handleSearch,
  };

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
