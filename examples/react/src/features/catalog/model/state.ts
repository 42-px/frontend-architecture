import { Product } from '@/dal'
import { catalog } from './domain'

export const $productsList = catalog.store<Product[]>([])
