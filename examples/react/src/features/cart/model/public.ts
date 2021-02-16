import { root } from '@/root'
import { Product } from '@/dal'

export const cartPublicApi = root.domain('cart-public')

export const addToCart = cartPublicApi.event<Product>()
