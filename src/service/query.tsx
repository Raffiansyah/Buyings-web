import { useQuery } from "@tanstack/react-query";
import { getProducts } from "~/lib/api";

export function useGetProducts(sort_by: string) {
    return useQuery({
        queryKey: ['products', sort_by],
        queryFn: async () => {
            const res = getProducts(sort_by)
            return res
        }
    })
}