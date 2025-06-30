export const EmptyData = ({}) => {
    return (
        <div className="text-center py-12">
        <div className="mx-auto w-24 h-24 text-gray-300 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">No articles found</h3>
        <p className="text-gray-500">Try adjusting your search or filter to find what you re looking for.</p>
      </div>
    )
}