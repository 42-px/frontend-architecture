import { forward } from 'effector'
import { catalog } from './domain'
import { $productsList } from './state'
import { init, reset } from './events'
import { getProductsFx } from './effects'

// reset all stores on 'reset' event
catalog.onCreateStore((store) => store.reset(reset))

/* use cases logic */
$productsList.on(
  getProductsFx.doneData,
  (currentList, products) => [...currentList, ...products],
)

// get products on init
forward({
  from: init,
  to: getProductsFx,
})
