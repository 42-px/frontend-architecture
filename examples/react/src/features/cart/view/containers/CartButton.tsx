import * as React from 'react'
import { useStore } from 'effector-react'
import { CartIcon } from '../parts'
import { $totalCount } from '../../model'

export const CartButton = () => {
  const totalCount = useStore($totalCount)

  return (
    <CartIcon count={totalCount} />
  )
}
