import * as React from 'react'
import Cart from './svg-assets/cart.svg'
import SignOut from './svg-assets/sign-out.svg'
import Close from './svg-assets/close.svg'
import Ru from './svg-assets/ru.svg'
import En from './svg-assets/en.svg'

const icons = {
  cart: Cart,
  close: Close,
  ru: Ru,
  en: En,
  'sign-out': SignOut,
}

export type IconName = keyof typeof icons

type Props = {
  icon: keyof typeof icons;
} & React.SVGAttributes<any>

export const Icon = ({ icon, ...svgProps }: Props) => {
  const IconComp = icons[icon]
  return <IconComp {...svgProps} />
}
