import { axiosClient } from "~/lib/axios"

export const getProducts = async () => {
    try {
        const products = await axiosClient.get('/products')
        return products.data.products
    } catch (error) {
        console.log(error)
    }
}