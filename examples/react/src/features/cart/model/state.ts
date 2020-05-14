import { Product } from '@/dal'
import { cart } from './domain'

export type CartItem = {
  product: Product;
  count: number;
  totalPrice: number;
}

export const $cartItems = cart.store<CartItem[]>([])
