import * as React from 'react'
import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import { Heading } from './Heading'
import { Text } from './Text'
import { Counter } from './Counter'


type Props = {
  name: string;
  price: number;
  totalPrice: number;
  currencySymbol?: string;
  image: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  className?: string;
}


export const CartItem = ({
  name, price, totalPrice, currencySymbol, image, count, onIncrement, onDecrement, className,
}: Props) => (
  <Wrap className={className}>
    <Image style={{ backgroundImage: `url(${image})` }} />
    <CounterCol>
      <ItemName level="md">{name}</ItemName>
      <PriceRow>
        <Price size="md">
          {price}
          {currencySymbol}
        </Price>
        <WrappedCounter
          count={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <Price size="md">
          {totalPrice}
          {currencySymbol}
        </Price>
      </PriceRow>
    </CounterCol>
  </Wrap>
)

const Wrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 8px;
`

const ItemName = styled(Heading)`
  padding-bottom: 10px;
  max-width: 500px;
  ${breakpoint('desktop')`
    min-width: 300px;
  `}
`

const WrappedCounter = styled(Counter)`
  padding: 0 8px;
`

const Price = styled(Text)``

const Image = styled.div`
  height: 90px;
  width: 90px;
  background-size: contain;
  background-repeat: no-repeat;
  flex-shrink: 0;
`

const CounterCol = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
`
const PriceRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding-top: 10px;
`
