import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useStore } from 'effector-react'
import { Heading } from '@/ui'
import { $totalPrice } from '../../model/private'

export const CartTotal = React.memo(() => {
  const { t } = useTranslation()
  const totalPrice = useStore($totalPrice)

  return (
    <Heading>
      {`${t('cart.total')}: ${totalPrice}`}
    </Heading>
  )
})
