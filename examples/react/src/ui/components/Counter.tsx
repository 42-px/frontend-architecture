import * as React from 'react'
import styled from 'styled-components'
import { ThemedStyledProps, themeVar } from '../theming'
import { Text } from './Text'

type Props = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  className?: string;
}

export const Counter = ({
  count, onIncrement, onDecrement, className,
}: Props) => (
  <Wrap className={className}>
    <Btn onClick={onDecrement}>−</Btn>
    <Count size="md">{count}</Count>
    <Btn onClick={onIncrement}>+</Btn>
  </Wrap>
)

const Wrap = styled.div`
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const Count = styled(Text)`
  padding: 0 8px;
`

const Btn = styled.div<ThemedStyledProps>`
  border-radius: 50%;
  overflow: hidden;
  height: 15px;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themeVar('counterBtnBackgroundColor')};
  color: ${themeVar('counterBtnTextColor')};
`
