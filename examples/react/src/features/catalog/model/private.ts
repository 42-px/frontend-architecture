import { createDomain, attach } from 'effector'
import { Product, getProducts } from '@/dal'

export const PRODUCTS_PAGINATION_LIMIT = 20

export const catalog = createDomain('catalog')

export const $productsList = catalog.store<Product[]>([])

export const init = catalog.event<void>()
export const reset = catalog.event<void>()

export const getProductsFx = attach({
  effect: getProducts,
  mapParams: () => ({ limit: PRODUCTS_PAGINATION_LIMIT, offset: 0 }),
})