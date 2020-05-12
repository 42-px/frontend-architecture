import * as React from 'react'
import { useStore } from 'effector-react'
import { $productsList } from '../../model'
import { ProductsGrid } from '../parts'

export const ProductsList = () => {
  const productsList = useStore($productsList)

  return (
    <ProductsGrid
      products={productsList}
      productAddedToCart={() => {}}
    />
  )
}
