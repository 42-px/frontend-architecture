import * as React from 'react'
import { useStore } from 'effector-react'
import { CartIcon } from '../parts'
import { $totalCount } from '../../model/private'

export const CartButton = React.memo(() => {
  const totalCount = useStore($totalCount)

  return (
    <CartIcon count={totalCount} />
  )
})
