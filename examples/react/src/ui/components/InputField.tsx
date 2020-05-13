import * as React from 'react'
import styled, { css } from 'styled-components'
import { themeVar, ThemedStyledProps } from '../theming'

type Props = {
  errorText?: string;
} & React.InputHTMLAttributes<HTMLInputElement>

export const InputField = ({ errorText, ...inputProps }: Props) => {
  const hasError = Boolean(errorText)

  return (
    <Wrap>
      <StyledInput hasError={hasError} {...inputProps} />
      {hasError && (
        <ErrorText>{errorText}</ErrorText>
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 45px;
`

type StyledInputProps = {
  hasError?: boolean;
} & ThemedStyledProps

const StyledInput = styled.input<StyledInputProps>`
  padding-left: 20px;
  padding-right: 20px;
  font-family: ${themeVar('baseFont')};
  color: ${themeVar('textColor')};
  height: 32px;
  width: 100%;
  border-radius: 4px;
  outline: none !important;
  ${({ hasError, theme }) => hasError && css`
    border: 1px solid ${theme.inputErrorColor} !important;
  `};
  ${({ hasError, theme }) => !hasError && css`
    border: 1px solid ${theme.inputBorderColor} !important;
  `};
`

const ErrorText = styled.div<ThemedStyledProps>`
  font-family: ${themeVar('baseFont')};
  color: ${themeVar('inputErrorColor')};
  line-height: 10px;
  font-size: 10px;
  padding-top: 3px;
`
