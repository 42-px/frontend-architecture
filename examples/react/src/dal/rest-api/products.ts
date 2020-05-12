/**
 * Prouducts endpoints
 * In a real app this module will have http-client calls:
 * axios.$get(), fetch(), etc.
 * In this demo we mock data layer
 */
import { mockProductCollection } from '../mocks/products'
import { Product } from '../entities'

export type GetProductsParams = {
  offset: number;
  limit: number;
}

const getProducts = ({ limit }: GetProductsParams) => Promise.resolve<Product[]>(
  mockProductCollection(limit),
)

/**
 * Export factory to create collection of fetch methods.
 * In a real app, this function will have an argument
 * like an authorized instance of the http client
 */
export const createProductsApi = () => ({
  getProducts,
})
