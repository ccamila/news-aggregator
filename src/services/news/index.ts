// src/services/news/index.ts

// Expose the contract that other parts of the app will depend on
export type { INewsService } from './interface';

// Expose the factory and the available source constants
export { NewsServiceFactory, type NewsSource } from './factory';
