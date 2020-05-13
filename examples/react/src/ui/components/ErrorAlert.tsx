import styled from 'styled-components'
import { themeVar, ThemedStyledProps } from '../theming'


export const ErrorAlert = styled.div<ThemedStyledProps>`
  width: 100%;
  padding: 16px;
  padding-left: 30px;
  color: ${themeVar('errorAlertTextColor')};
  background-color: ${themeVar('errorAlertBackgroundColor')};
  border: 1px solid ${themeVar('errorAlertBorderColor')} !important; 
`
