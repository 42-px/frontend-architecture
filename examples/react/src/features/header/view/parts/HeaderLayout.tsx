import * as React from 'react'
import styled from 'styled-components'
import { ThemedStyledProps, themeVar } from '@/ui'

type HeaderTemplateProps = {
  right?: React.ReactNode;
  left?: React.ReactNode;
}

export const HeaderLayout = ({ left, right }: HeaderTemplateProps) => (
  <Wrap>
    <Left>{left}</Left>
    <Right>{right}</Right>
  </Wrap>
)

const Wrap = styled.div<ThemedStyledProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 4px;
  border-bottom: 1px solid ${themeVar('paperBorderColor')};
`

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  margin-left: auto;
`
