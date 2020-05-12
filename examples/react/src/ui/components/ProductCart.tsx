import * as React from 'react'
import styled from 'styled-components'
import { Heading } from './Heading'
import { Text } from './Text'
import { PrimaryButton } from './PrimaryButton'


type Props = {
  name: string;
  price: string;
  image: string;
  description: string;
  addBtnClicked: () => void;
  addToCartText?: string;
  className?: string;
}

export const ProductCart = ({
  name,
  image,
  price,
  addToCartText,
  description,
  addBtnClicked,
  className,
}: Props) => (
  <Wrap className={className}>
    <Image style={{ backgroundImage: `url(${image})` }} />
    <ProductHeading level="lg">{name}</ProductHeading>
    <Description size="tn" pale>{description}</Description>
    <Price level="lgx">{price}</Price>
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
  padding-bottom: 4px;
`

const Description = styled(Text)`
  padding-bottom: 16px;
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
