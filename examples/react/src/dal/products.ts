import { createCustomError } from '@/lib/errors'
import { Product } from './entities'
import { restApi, request, authRequest } from './rest-api'
import { mockProductCollection } from './mocks/products'

export type GetProductsParams = {
  offset: number;
  limit: number;
}

export const getProducts = restApi.effect<GetProductsParams, Product[], Error>()
getProducts.use(({ limit }) => {
  /**
   * In a real app this module will have request calls:
   * await request({ ... }) or await authRequest({ ... })
   * In this demo we mock data layer
  */
  return mockProductCollection(limit)
})


export const productsClient = {
  getProducts,
}