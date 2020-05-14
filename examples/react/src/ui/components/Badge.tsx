import * as React from 'react'
import styled from 'styled-components'
import { ThemedStyledProps, themeVar } from '../theming'

type Props = {
  children: React.ReactNode;
  count: number;
  overflowCount?: number;
  onClick?: () => void;
}

export const Badge = ({
  children, count, overflowCount, onClick,
}: Props) => {
  let visibleCount = `${count}`
  if (typeof overflowCount === 'number' && count > overflowCount) {
    visibleCount = `${overflowCount}+`
  }

  return (
    <Wrap onClick={onClick}>
      {children}
      <BadgeIcon>{visibleCount}</BadgeIcon>
    </Wrap>
  )
}

const Wrap = styled.div`
  cursor: pointer;
  position: relative;
`

const BadgeIcon = styled.div<ThemedStyledProps>`
  position: absolute;
  right: 0;
  top: 0;
  padding: 3px 6px;
  transform: translate(50%, -50%);
  border-radius: 10px;
  background-color: ${themeVar('badgeBackgroundColor')};
  color: ${themeVar('badgeTextColor')};
  font-family: ${themeVar('baseFont')};
  font-size: 12px;
`
