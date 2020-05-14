import { CartItem } from './state'
import { CART_LC_KEY } from './const'

export const readCart = () => {
  try {
    const cartJSON = window.localStorage.getItem(CART_LC_KEY)
    if (!cartJSON) return []
    // TODO: validate
    return JSON.parse(cartJSON) as CartItem[]
  } catch {
    return []
  }
}

export const writeCart = (cartItems: CartItem[]) => {
  window.localStorage.setItem(CART_LC_KEY, JSON.stringify(cartItems))
}
