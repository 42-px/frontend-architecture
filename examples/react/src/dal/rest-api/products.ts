/**
 * Prouducts endpoints
 * In a real app this module will have http-client calls:
 * axios.$get(), fetch(), etc.
 * In this demo we mock data layer
 */
import { axios } from '@/lib/http-client'
import { mockProductCollection } from '../mocks/products'
import { Product } from '../entities'

export type GetProductsParams = {
  offset: number;
  limit: number;
}

const getProducts = ({ limit }: GetProductsParams) => Promise.resolve<Product[]>(
  mockProductCollection(limit),
)

export const productsClient = {
  getProducts,
}
