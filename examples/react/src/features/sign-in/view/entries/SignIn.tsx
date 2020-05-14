import * as React from 'react'
import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import { SignInForm } from '../containers'

export const SignIn = () => (
  <Wrap>
    <FormWrap>
      <SignInForm />
    </FormWrap>
  </Wrap>
)

const Wrap = styled.div`
  width: 100%;
  margin: auto;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormWrap = styled.div`
  width: 100%;
  padding: 0 8px;
  ${breakpoint('tablet')`
    width: 400px;
  `}
`
