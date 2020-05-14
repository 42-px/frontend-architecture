import * as React from 'react'
import styled, { css } from 'styled-components'
import { ThemedStyledProps, themeVar } from '@/ui/theming'

type Size = 'lgx' |'lg' | 'md' | 'sm' | 'tn'

const fontSizes = {
  lgx: '20px',
  lg: '18px',
  md: '16px',
  sm: '14px',
  tn: '12px',
}

type Props = {
  as?: string;
  size?: Size;
  pale?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Text = ({
  children, className, pale, size = 'md', as,
}: Props) => (
  <StyledText className={className} pale={pale} size={size} tagName={as || 'div'}>
    {children}
  </StyledText>
)

type TextCompProps = {
  tagName: string;
  className?: string;
  children: React.ReactNode;
}

const TextComp = ({ tagName, className, children }: TextCompProps) => React.createElement(
  tagName,
  {
    className,
  },
  children,
)

type StyledTextProps = {
  size: Size;
  pale?: boolean;
} & ThemedStyledProps

const StyledText = styled(TextComp)<StyledTextProps>`
  font-family: ${themeVar('baseFont')};
  font-weight: 400;
  font-size: ${({ size }) => fontSizes[size]};
  ${({ pale, theme }) => !pale && css`
    color: ${theme.textColor};
  `}
  ${({ pale, theme }) => pale && css`
    color: ${theme.paleTextColor};
  `}
`
