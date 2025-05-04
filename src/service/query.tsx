import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getAddress, getProducts } from '~/utils/api';

export function useGetProducts(sort_by: string, category: string, Page = 0) {
  return useQuery({
    queryKey: ['products', sort_by, category],
    queryFn: async () => {
      const res = getProducts(sort_by, category, Page);
      return res;
    },
  });
}

export function useGetAddress() {
  return useQuery({
    queryKey: ['address'],
    queryFn: async () => {
      const res = getAddress();
      return res;
    },
  });
}

export function useGetInfiniteProducts(sort_by: string, category: string) {
  return useInfiniteQuery({
    queryKey: ['infineteProd', sort_by, category],
    queryFn: async ({ pageParam }) => {
      const res = getProducts(sort_by, category, pageParam);
      return res;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages, lastPageParam, allPageParams) => {
      if (lastPage.length === 0) {
        return undefined
      }
      return lastPageParam + 1
    },
  });
}
