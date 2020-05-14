import * as React from 'react'
import styled from 'styled-components'
import { Icon, IconName } from '../icons'

type Lang = 'ru' | 'en'

type Langs = {
  name: Lang;
  icon: IconName;
}[]

type Props = {
  langChanged: (lang: Lang) => void;
}

const langs: Langs = [
  {
    name: 'en',
    icon: 'en',
  },
  {
    name: 'ru',
    icon: 'ru',
  },
]

const flagHeight = 30

export const LangSelector = ({ langChanged }: Props) => (
  <Wrap>
    {langs.map(({ name, icon }) => (
      <Item key={name} onClick={() => langChanged(name)}>
        <Icon
          icon={icon}
          height={flagHeight}
        />
      </Item>
    ))}
  </Wrap>
)

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Item = styled.div`
  cursor: pointer;
  padding: 0 4px;
`
