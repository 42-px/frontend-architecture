import * as React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { useTranslation } from 'react-i18next'
import { Product } from '@/dal'
import { ProductCart } from '@/ui'

type Props = {
  products: Product[];
  productAddedToCart: (product: Product) => void;
}

export function ProductsGrid({ products, productAddedToCart }: Props) {
  const { t } = useTranslation()

  return (
    <Wrap>
      {products.map((product) => (
        <ProductGridItem
          key={product.id}
          name={product.name}
          description={product.about}
          price={product.price}
          image={product.image.url}
          addToCartText={t('catalog.addToCartBtn')}
          addBtnClicked={() => productAddedToCart(product)}
        />
      ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 0 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  ${breakpoint('desktop')`
    justify-content: flex-start;
  `}
`

const ProductGridItem = styled(ProductCart)`
  padding: 8px;
  padding-bottom: 30px;
  max-width: 300px;
`
