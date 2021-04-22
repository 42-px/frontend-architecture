import { forward } from 'effector'
import { initApp } from '@/features/app/model'
import {
  cart,
  $cartItems,
  init,
  resetState,
  increment,
  decrement,
  writeCartFx,
  readCartFx,
} from './private'
import { addToCart } from './public'
import { productAddedToCart, productCountIncremented, productCountDecremented } from './reducers'
import { writeCart, readCart } from './storage'

cart.onCreateStore((store) => store.reset(resetState))

$cartItems
  .on(readCartFx.doneData, (_, cartItems) => cartItems)
  .on(addToCart, productAddedToCart)
  .on(increment, productCountIncremented)
  .on(decrement, productCountDecremented)

forward({
  from: initApp,
  to: init,
})

forward({
  from: init,
  to: readCartFx,
})

forward({
  from: $cartItems.updates,
  to: writeCartFx,
})


writeCartFx.use(writeCart)
readCartFx.use(readCart)
