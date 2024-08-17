import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
      cacheTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});