import * as React from 'react'
import { useStore } from 'effector-react'
import { addToCart } from '@/features/cart'
import { $productsList } from '../../model/private'
import { ProductsGrid } from '../parts'

export const ProductsList = () => {
  const productsList = useStore($productsList)

  return (
    <ProductsGrid
      products={productsList}
      productAddedToCart={(product) => addToCart(product)}
    />
  )
}
