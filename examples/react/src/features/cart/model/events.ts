import { Product } from '@/dal'
import { cart } from './domain'
import { CartItem } from './state'

export const init = cart.event<void>()
export const resetState = cart.event<void>()
export const increment = cart.event<Product['id']>()
export const decrement = cart.event<Product['id']>()
export const cartReadFromLC = cart.event<CartItem[]>()
