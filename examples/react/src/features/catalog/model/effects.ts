import { attach } from 'effector'
import { getProducts } from '@/dal'
import { PRODUCTS_PAGINATION_LIMIT } from './const'

export const getProductsFx = attach({
  effect: getProducts,
  mapParams: () => ({ limit: PRODUCTS_PAGINATION_LIMIT, offset: 0 }),
})