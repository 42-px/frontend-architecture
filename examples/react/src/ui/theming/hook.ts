import * as React from 'react'
import { ThemeContext } from 'styled-components'
import { Theme } from './themes'

export const useTheme = () => {
  const theme = React.useContext<Theme>(ThemeContext)
  return theme
}
