"use client";

import { useState,useCallback } from 'react';
import useNews from '@/hooks/useNews';

export const SearchFilters = () => {
  const { loading, handleSearch, keyword, setKeyword } = useNews();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    handleSearch({
      keyword,
      startDate: startDate || undefined,
      endDate: endDate || undefined,
    });
  }, [handleSearch, startDate, endDate, keyword]);

  return (
    <div className="bg-gray-300 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search for news..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          {/* Date Range */}
          <div className="w-full md:w-48">
            <input
              type="date"
              className="input block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="w-full md:w-48">
            <input
              type="date"
              className="input block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            Search
          </button>

        </form>
      </div>
    </div>
  );
};