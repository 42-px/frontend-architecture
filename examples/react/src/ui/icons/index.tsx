import * as React from 'react'
import Cart from './svg-assets/cart.svg'

const icons = {
  cart: Cart,
}

export type IconName = keyof typeof icons

type Props = {
  icon: keyof typeof icons;
} & React.SVGAttributes<any>

export const Icon = ({ icon, ...svgProps }: Props) => {
  const IconComp = icons[icon]
  return <IconComp {...svgProps} />
}
