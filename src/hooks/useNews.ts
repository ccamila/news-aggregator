import { useContext } from 'react';
import NewsContext from '../contexts/NewsContext';

const useNews = () => {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};

export default useNews;
