/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react'
import styled, { css } from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import { useClickOutside } from '@/lib/click-outside'
import {
  Paper, Icon, ThemedStyledProps, themeVar,
} from '@/ui'

type Props = {
  trigger: React.ReactNode;
  items: React.ReactNode;
  total: React.ReactNode;
}

export const CartLayout = ({ trigger, items, total }: Props) => {
  const [contentVisible, setContentVisibility] = React.useState(false)


  const show = () => setContentVisibility(true)
  const hide = () => setContentVisibility(false)

  return (
    <Wrap>
      <div onClick={show}>
        {trigger}
      </div>
      {contentVisible && (
        <Content
          onClose={hide}
          items={items}
          total={total}
        />
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
`

type ContentProps = {
  onClose?: () => void;
  items: React.ReactNode;
  total: React.ReactNode;
}

const Content = ({
  items, total, onClose,
}: ContentProps) => {
  const { ref } = useClickOutside<HTMLDivElement>(() => {
    if (onClose) onClose()
  })

  return (
    <ContentWrap ref={ref}>
      <CloseRow>
        <div onClick={onClose}>
          <Icon icon="close" width={16} />
        </div>
      </CloseRow>
      <ItemsWrap>
        {items}
      </ItemsWrap>
      <TotalWrap>
        {total}
      </TotalWrap>
    </ContentWrap>
  )
}


const ContentWrap = styled(Paper)`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  ${breakpoint('desktop')`
    position: absolute;
    right: 0;
    top: 50px;
    height: auto;
    left: auto;
    width: auto;
  `}
`

const CloseRow = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: flex-end;
`

const ItemsWrap = styled.div`
  overflow: auto;
  ${breakpoint('desktop')`
    max-height: 500px;
  `}
`

const TotalWrap = styled.div<ThemedStyledProps>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
  border-top: 1px solid ${themeVar('paperBorderColor')};
`
