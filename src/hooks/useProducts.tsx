import { axiosClient } from "~/lib/axios"

export const getProducts = async (sortBy = '') => {
    try {
        const products = await axiosClient.get(`/products?sort_by=${sortBy}`)
        return products.data.products
    } catch (error) {
        console.log(error)
    }
}