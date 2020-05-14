import { Product } from '@/dal'
import { CartItem } from './state'

export const productAddedToCart = (cartItems: CartItem[], product: Product) => {
  const updatedCartItems: CartItem[] = []
  let productAlreadyAdded = false

  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i]

    let updatedCount = cartItem.count
    let updatedTotalPrice = cartItem.totalPrice

    if (cartItem.product.id === product.id) {
      productAlreadyAdded = true
      updatedCount += 1
      updatedTotalPrice += product.price
    }

    updatedCartItems.push({
      ...cartItem,
      count: updatedCount,
      totalPrice: updatedTotalPrice,
    })
  }

  if (!productAlreadyAdded) {
    updatedCartItems.push({
      product,
      count: 1,
      totalPrice: product.price,
    })
  }

  return updatedCartItems
}


export const productCountIncremented = (cartItems: CartItem[], productId: Product['id']) => {
  const updatedCartItems: CartItem[] = []
  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i]

    let updatedCount = cartItem.count
    let updatedTotalPrice = cartItem.totalPrice

    if (cartItem.product.id === productId) {
      updatedCount += 1
      updatedTotalPrice += cartItem.product.price
    }

    updatedCartItems.push({
      ...cartItem,
      count: updatedCount,
      totalPrice: updatedTotalPrice,
    })
  }

  return updatedCartItems
}

export const productCountDecremented = (cartItems: CartItem[], productId: Product['id']) => {
  const updatedCartItems: CartItem[] = []
  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i]

    let updatedCount = cartItem.count
    let updatedTotalPrice = cartItem.totalPrice

    if (cartItem.product.id === productId) {
      updatedCount -= 1
      updatedTotalPrice -= cartItem.product.price
    }

    if (updatedCount < 1) continue

    updatedCartItems.push({
      ...cartItem,
      count: updatedCount,
      totalPrice: updatedTotalPrice,
    })
  }

  return updatedCartItems
}
