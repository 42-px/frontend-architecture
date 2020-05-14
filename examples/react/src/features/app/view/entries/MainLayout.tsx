import * as React from 'react'
import styled from 'styled-components'
import { ThemedStyledProps, themeVar } from '@/ui'

type Props = {
  header: React.ReactNode;
  main: React.ReactNode;
}

export const MainLayout = ({ header, main }: Props) => (
  <Wrap>
    <WrapHeader>
      {header}
    </WrapHeader>
    <WrapMain>
      {main}
    </WrapMain>
  </Wrap>
)

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`

const WrapHeader = styled.header<ThemedStyledProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${themeVar('panelColor')};
`
const WrapMain = styled.main`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  padding-top: 60px;
`
