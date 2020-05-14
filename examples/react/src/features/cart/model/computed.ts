import { $cartItems } from './state'


export const $totalPrice = $cartItems.map((cartItems) => cartItems.reduce(
  (total, item) => total + (item.product.price * item.count),
  0,
))

export const $totalCount = $cartItems.map((cartItems) => cartItems.reduce(
  (total, item) => total + item.count,
  0,
))
