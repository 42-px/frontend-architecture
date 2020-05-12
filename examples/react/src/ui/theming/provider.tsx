import * as React from 'react'
import {
  ThemeProvider as StyledComponentThemeProvider,
} from 'styled-components'
import { useStore } from 'effector-react'
import { $currentTheme } from './model'

type Props = {
  children: React.ReactChild;
}


export const ThemeProvider = ({ children }: Props) => {
  const theme = useStore($currentTheme)
  return (
    <StyledComponentThemeProvider theme={theme.variables}>
      {children}
    </StyledComponentThemeProvider>
  )
}
