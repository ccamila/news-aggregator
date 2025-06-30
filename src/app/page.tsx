"use client";
import NewsProvider from '@/providers/NewsProvider';
import { SearchFilters } from '@/components/features/search/searchFilters';
import { NewsFeed } from '@/components/features/news/NewsFeed';

function NewsApp() {
  return (
    <NewsProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">News Aggregator</h1>
            <div className="mt-4">
              <SearchFilters />
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <NewsFeed />
        </main>
      </div>
    </NewsProvider>
  );
}

export default NewsApp;