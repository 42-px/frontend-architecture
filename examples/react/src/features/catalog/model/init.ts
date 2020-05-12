import { forward } from 'effector'
import { dataClient } from '@/features/common'
import { catalog } from './domain'
import { $productsList } from './state'
import { getProducts, init, reset } from './events'
import { PRODUCTS_PAGINATION_LIMIT } from './const'

// reset all stores on 'reset' event
catalog.onCreateStore((store) => store.reset(reset))

/* use cases logic */
$productsList.on(
  getProducts.doneData,
  (currentList, products) => [...currentList, ...products],
)

// get products on init
forward({
  from: init.map(() => ({
    offset: 0,
    limit: PRODUCTS_PAGINATION_LIMIT,
  })),
  to: getProducts,
})

// bind data client with effects
getProducts.use(dataClient.fetch.products.getProducts)
