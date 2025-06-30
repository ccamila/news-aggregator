import { INewsService } from '../interface';
import * as newsAPI from '../sources/newsAPIService';
import * as guardianAPI from '../sources/guardianAPIService';
import * as nytAPI from '../sources/nytAPIService';
import { NEWS_SOURCES } from '../constants';

export type NewsSource = (typeof NEWS_SOURCES)[keyof typeof NEWS_SOURCES];

const services = {
  [NEWS_SOURCES.NEWS_API]: {
    fetchNews: newsAPI.fetchNews,
    getSourceName: newsAPI.getSourceName,
    normalizeArticle: newsAPI.normalizeArticle,
  },
  [NEWS_SOURCES.THE_GUARDIAN]: {
    fetchNews: guardianAPI.fetchNews,
    getSourceName: guardianAPI.getSourceName,
    normalizeArticle: guardianAPI.normalizeArticle,
  },
  [NEWS_SOURCES.NY_TIMES]: {
    fetchNews: nytAPI.fetchNews,
    getSourceName: nytAPI.getSourceName,
    normalizeArticle: nytAPI.normalizeArticle,
  },
} as const;

export class NewsServiceFactory {
  static createService(source: NewsSource): INewsService {
    const service = services[source];
    if (!service) {
      throw new Error(`Unsupported news source: ${source}`);
    }
    return service;
  }
}