import { useQuery } from '@tanstack/react-query';
import { getAddress, getProducts } from '~/utils/api';

export function useGetProducts(sort_by: string, category: string) {
  return useQuery({
    queryKey: ['products', sort_by, category],
    queryFn: async () => {
      const res = getProducts(sort_by, category);
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
