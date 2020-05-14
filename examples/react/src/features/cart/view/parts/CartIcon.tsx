import * as React from 'react'
import { Icon, Badge } from '@/ui'

type Props = {
  count: number;
  onClick?: () => void;
}

export const CartIcon = ({ count, onClick }: Props) => (
  <Badge count={count} overflowCount={99} onClick={onClick}>
    <Icon icon="cart" width={30} />
  </Badge>
)
