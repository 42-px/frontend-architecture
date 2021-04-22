import * as React from 'react'
import { useStore } from 'effector-react'
import { addToCart } from '@/features/cart/model'
import { $productsList, init, reset } from '../../model/private'
import { ProductsGrid } from '../parts'

export const ProductsList = React.memo(() => {
  React.useEffect(() => {
    init()
    return () => reset()
  }, [])

  const productsList = useStore($productsList)

  return (
    <ProductsGrid
      products={productsList}
      productAddedToCart={(product) => addToCart(product)}
    />
  )
})
