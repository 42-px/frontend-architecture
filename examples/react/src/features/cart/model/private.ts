import { root } from '@/root'
import { Product } from '@/dal'

export type CartItem = {
  product: Product;
  count: number;
  totalPrice: number;
}

export const cart = root.domain('cart')

export const $cartItems = cart.store<CartItem[]>([])

export const init = cart.event<void>()
export const resetState = cart.event<void>()
export const increment = cart.event<Product['id']>()
export const decrement = cart.event<Product['id']>()

export const readCartFx = cart.effect<void, CartItem[], Error>()
export const writeCartFx = cart.effect<CartItem[], void, Error>()

export const $totalPrice = $cartItems.map((cartItems) => cartItems.reduce(
  (total, item) => total + (item.product.price * item.count),
  0,
))

export const $totalCount = $cartItems.map((cartItems) => cartItems.reduce(
  (total, item) => total + item.count,
  0,
))
