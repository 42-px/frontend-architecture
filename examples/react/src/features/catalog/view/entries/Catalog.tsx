import * as React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { PrimaryButton } from '@/ui'

export const Catalog = () => {
  const { t } = useTranslation()

  return (
    <Block>
      <PrimaryButton>
        {t('catalog.addToCartBtn')}
      </PrimaryButton>
    </Block>
  )
}

const Block = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
`
