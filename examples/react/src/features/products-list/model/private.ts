import { attach } from 'effector'
import { root } from '@/root'
import { Product, productsClient } from '@/dal'

export const PRODUCTS_PAGINATION_LIMIT = 20

export const catalog = root.domain('catalog')

export const $productsList = catalog.store<Product[]>([])

export const init = catalog.event<void>()
export const reset = catalog.event<void>()

export const getProductsFx = attach({
  effect: productsClient.getProductsReqFx,
  mapParams: () => ({ limit: PRODUCTS_PAGINATION_LIMIT, offset: 0 }),
})
