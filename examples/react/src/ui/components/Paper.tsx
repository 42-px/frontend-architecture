import styled from 'styled-components'
import { ThemedStyledProps, themeVar } from '../theming'


export const Paper = styled.div<ThemedStyledProps>`
  background-color: ${themeVar('paperBackgroundColor')};
  padding: 20px;
  border-radius: 2px;
  border: 1px solid ${themeVar('paperBorderColor')};
`
