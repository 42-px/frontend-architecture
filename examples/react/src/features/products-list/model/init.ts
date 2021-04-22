import { forward } from 'effector'
import {
  catalog,
  $productsList,
  init,
  reset,
  getProductsFx,
} from './private'

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
