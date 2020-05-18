import { GetProductsParams, Product } from '@/dal'
import { catalog } from './domain'

export const init = catalog.event<void>()
export const reset = catalog.event<void>()