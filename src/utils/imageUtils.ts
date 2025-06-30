/**
 * Handles image loading errors by replacing the image with a placeholder
 * @param event - The error event from the image element
 * @param placeholder - Optional custom placeholder URL
 */
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement>,
  placeholder: string = 'https://via.placeholder.com/400x200?text=No+Image'
) => {
  const target = event.target as HTMLImageElement;
  target.src = placeholder;
  target.onerror = null; // Prevent infinite loop if placeholder also fails
};

/**
 * Returns a placeholder image URL based on the category
 * @param category - The category of the news article
 * @returns A placeholder image URL
 */
export const getPlaceholderImage = (category: string = 'general'): string => {
  const baseUrl = 'https://via.placeholder.com/400x200';
  const colors: Record<string, string> = {
    business: '4F46E5',
    entertainment: 'EC4899',
    general: '6B7280',
    health: '10B981',
    science: '3B82F6',
    sports: 'F59E0B',
    technology: '8B5CF6',
  };
  
  const color = colors[category.toLowerCase()] || colors.general;
  return `${baseUrl}/${color}/FFFFFF?text=${encodeURIComponent(category)}`;
};
