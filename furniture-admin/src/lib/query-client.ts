import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // retry once if a request fails
      refetchOnWindowFocus: false, // disable refetching when switching tabs
      staleTime: 1000 * 60 * 1, // 1 minute
    },
  },
});
