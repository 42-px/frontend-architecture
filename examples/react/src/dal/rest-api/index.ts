import { createProductsApi } from './products'

export * from './products'
/**
 * Export factory to create fetch client.
 * In a real app, this function will have an argument
 * like an authorized instance of the http client
 */
export const createFetchClient = () => ({
  products: createProductsApi(),
})
