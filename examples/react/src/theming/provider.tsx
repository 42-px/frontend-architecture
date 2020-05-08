import * as React from 'react'
import { useStore } from 'effector-react'
import {
  ThemeProvider as StyledComponentThemeProvider
} from 'styled-components'
import { $theme } from './model'

type Props = {
  children: React.ReactChild
}

export const ThemeProvider = ({ children }: Props) => {
  const theme = useStore($theme)
  
  return (
    <StyledComponentThemeProvider theme={theme}>
      {children}
    </StyledComponentThemeProvider>
  )
}