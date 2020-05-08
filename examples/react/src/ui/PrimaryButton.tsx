import styled from 'styled-components'
import { themeVar, ThemedStyledProps } from '@/theming'

export const PrimaryButton = styled.button<ThemedStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${themeVar('baseFont')};
  font-weight: 500;
  border-radius: 3px;
  height: 40px;
  padding: 0 20px;
  color: ${themeVar('primaryButtonTextColor')};
  background-color: ${themeVar('primaryButtonColor')};
`
