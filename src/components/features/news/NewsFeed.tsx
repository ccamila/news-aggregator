import { useCallback, useEffect, useState } from 'react';
import { NewsCard } from '@/components/features/news/NewsCard';
import { Loading } from '@/components/features/news/Loading';
import useNews from '@/hooks/useNews';
import { Article } from '@/types/news';
import { EmptyData } from './EmptyData';

export const NewsFeed = () => {
    const {
        loading,
        articles,
        error,
        page,
        setPage,
        fetchArticles,
        keyword,
    } = useNews();

    const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles)
    
    const allArticles = articles

    const handleLoadMore = useCallback(() => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchArticles({ page: nextPage, keyword });
    }, [page, setPage, fetchArticles, keyword]);

    useEffect(() => {
        setFilteredArticles(articles)
    }, [articles]);

    useEffect(() => {
        fetchArticles({ page: 1 });
    }, [fetchArticles]);


    return (
        <main className="container mx-auto px-2">
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Filter by category</legend>
                <form key="categoryFilter" id="categoryFilter" className="filter">
                    <input className="btn btn-square" type="reset" value="×" onClick={() => setFilteredArticles(allArticles)} />
                    {[...new Set(filteredArticles.map((article) => article.category))].map((category) => (
                        <input key={category} id={category} className="btn" type="radio" name={category} value={category} aria-label={category} onClick={() => setFilteredArticles(allArticles.filter((article) => article.category === category))} />
                    ))}
                </form>
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Filter by source</legend>
                <form key="sourceFilter" id="sourceFilter" className="filter mb-6">
                    <input className="btn btn-square" type="reset" value="×" onClick={() => setFilteredArticles(allArticles)} />
                    {[...new Set(filteredArticles.map((article) => article.source.name))].map((source) => (
                        <input key={source} id={source} className="btn" type="radio" name={source} value={source} aria-label={source} onClick={() => setFilteredArticles(allArticles.filter((article) => article.source.name === source))} />
                    ))}
                </form>
            </fieldset>
            {error && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-red-700">{error}</p>
                        </div>
                    </div>
                </div>
            )}

            {loading && articles.length === 0 ? (
                <div className="flex justify-center items-center py-20">
                    <Loading />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredArticles.map((article: Article) => (
                            <NewsCard key={article.id} article={article} />
                        ))}
                    </div>

                    {filteredArticles.length === 0 && !loading && (
                        <div className="text-center py-12">
                            <EmptyData />
                        </div>
                    )}

                    <div className="mt-8 text-center">
                        <button
                            onClick={handleLoadMore}
                            disabled={loading}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Loading...' : 'Load More'}
                        </button>
                    </div>
                </>
            )}
        </main>
    );
};