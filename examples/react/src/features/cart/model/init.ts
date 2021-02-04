import { forward } from 'effector'
import { initApp } from '@/features/app'
import {
  cart,
  $cartItems,
  init,
  resetState,
  increment,
  decrement,
  cartReadFromLC,
} from './private'
import { addToCart } from './public'
import { productAddedToCart, productCountIncremented, productCountDecremented } from './reducers'
import { writeCart, readCart } from './storage'

cart.onCreateStore((store) => store.reset(resetState))

$cartItems
  .on(cartReadFromLC, (_, cartItems) => cartItems)
  .on(addToCart, productAddedToCart)
  .on(increment, productCountIncremented)
  .on(decrement, productCountDecremented)

forward({
  from: initApp,
  to: init,
})

init.watch(() => {
  const cartItems = readCart()
  cartReadFromLC(cartItems)
})

$cartItems.updates.watch(writeCart)
