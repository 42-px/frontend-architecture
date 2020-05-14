import { forward } from 'effector'
import { addToCart, appMounted } from '@/features/app'
import { cart } from './domain'
import { $cartItems } from './state'
import {
  init, resetState, increment, decrement, cartReadFromLC,
} from './events'
import { productAddedToCart, productCountIncremented, productCountDecremented } from './reducers'
import { writeCart, readCart } from './storage'

cart.onCreateStore((store) => store.reset(resetState))

$cartItems
  .on(cartReadFromLC, (_, cartItems) => cartItems)
  .on(addToCart, productAddedToCart)
  .on(increment, productCountIncremented)
  .on(decrement, productCountDecremented)

forward({
  from: appMounted,
  to: init,
})

init.watch(() => {
  const cartItems = readCart()
  cartReadFromLC(cartItems)
})

$cartItems.updates.watch(writeCart)
