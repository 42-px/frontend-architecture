import * as React from 'react'
import { CartButton, CartItems, CartTotal } from '../containers'
import { CartLayout } from '../parts'

export const Cart = () => (
  <CartLayout
    trigger={<CartButton />}
    total={<CartTotal />}
    items={(
      <CartItems />
      )}
  />
)
