import * as React from 'react'
import styled from 'styled-components'
import { ThemedStyledProps, themeVar } from '@/ui/theming'

type Level = 'lgx' |'lg' | 'md'

const fontSizes = {
  lgx: '20px',
  lg: '18px',
  md: '16px',
}

const outputTags = {
  lgx: 'h1',
  lg: 'h2',
  md: 'h3',
}

type Props = {
  level?: Level;
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className, level = 'md' }: Props) => (
  <StyledHeading level={level} tagName={outputTags[level]} className={className}>
    {children}
  </StyledHeading>
)

type HeadingCompProps = {
  tagName: string;
  className?: string;
  children: React.ReactNode;
}

const HeadingComp = ({ tagName, className, children }: HeadingCompProps) => React.createElement(
  tagName,
  {
    className,
  },
  children,
)

type StyledHeadingProps = {
  level: Level;
} & ThemedStyledProps

const StyledHeading = styled(HeadingComp)<StyledHeadingProps>`
  color: ${themeVar('headingTextColor')};
  font-family: ${themeVar('baseFont')};
  font-weight: 500;
  font-size: ${({ level }) => fontSizes[level]};
  margin-top: 0;
  margin-bottom: 0;
`
