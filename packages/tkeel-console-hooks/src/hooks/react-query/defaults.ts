import { QueryClientConfig } from './types';

export const DEFAULT_USE_QUERY_OPTIONS = {};

export const DEFAULT_USE_MUTATION_OPTIONS = {};

export const DEFAULT_QUERY_CLIENT_CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: DEFAULT_USE_QUERY_OPTIONS,
    mutations: DEFAULT_USE_MUTATION_OPTIONS,
  },
};