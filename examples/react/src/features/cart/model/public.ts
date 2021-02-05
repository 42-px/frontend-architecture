import { createDomain } from 'effector'
import { Product } from '@/dal'

export const cartPublicApi = createDomain('cart-public')

export const addToCart = cartPublicApi.event<Product>()