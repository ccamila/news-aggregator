export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  source: {
    name: string;
    id: string;
  };
  category: string;
  author?: string;
  apiSource: string;
}

export interface NewsResponse {
  articles: Article[];
  totalResults: number;
  status: string;
}

export interface FilterOptions {
  keyword?: string;
  category?: string;
  source?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  pageSize?: number;
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
  language?: string;
  country?: string;
}

export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

// new implementation

// export interface FilterOptions {
//   keyword?: string;
//   category?: string;
//   source?: string;
//   startDate?: string;
//   endDate?: string;
//   pageSize?: number;
//   page?: number;
// }