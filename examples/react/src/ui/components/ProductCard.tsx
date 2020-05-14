import * as React from 'react'
import styled from 'styled-components'
import { Heading } from './Heading'
import { Text } from './Text'
import { PrimaryButton } from './PrimaryButton'


type Props = {
  name: string;
  price: number;
  currencySymbol?: string;
  image: string;
  description: string;
  addBtnClicked: () => void;
  addToCartText?: string;
  className?: string;
}

export const ProductCard = ({
  name,
  image,
  price,
  currencySymbol,
  addToCartText,
  description,
  addBtnClicked,
  className,
}: Props) => (
  <Wrap className={className}>
    <Image style={{ backgroundImage: `url(${image})` }} />
    <ProductHeading level="lg">{name}</ProductHeading>
    <Description size="tn" pale>{description}</Description>
    <Price level="lgx">
      {price}
      {Boolean(currencySymbol) && currencySymbol}
    </Price>
    <AddToCartBtn icon="cart" onClick={addBtnClicked}>
      {addToCartText}
    </AddToCartBtn>
  </Wrap>
)


const Image = styled.div`
  height: 200px;
  width: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  padding-bottom: 16px;
`

const ProductHeading = styled(Heading)`
  padding-top: 16px;
  padding-bottom: 8px;
  text-align: center;
`

const Description = styled(Text)`
  padding-bottom: 16px;
  text-align: center;
`

const Price = styled(Heading)`
  padding-bottom: 16px;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AddToCartBtn = styled(PrimaryButton)`
  margin-top: auto;
`
