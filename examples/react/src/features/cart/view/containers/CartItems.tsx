/* eslint-disable react/prop-types */
import * as React from 'react'
import { useStore } from 'effector-react'
import { CartItem } from '@/ui'
import { $cartItems, increment, decrement } from '../../model'


export const CartItems = () => {
  const cartItems = useStore($cartItems)

  return (
    <>
      {cartItems.map((item) => (
        <CartItem
          key={item.product.id}
          name={item.product.name}
          image={item.product.image.url}
          price={item.product.price}
          totalPrice={item.totalPrice}
          count={item.count}
          onIncrement={() => increment(item.product.id)}
          onDecrement={() => decrement(item.product.id)}
          currencySymbol={item.product.currency.symbol}
        />
      ))}
    </>
  )
}
