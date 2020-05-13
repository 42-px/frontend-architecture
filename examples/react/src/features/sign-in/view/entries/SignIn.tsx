import * as React from 'react'
import styled from 'styled-components'
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
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormWrap = styled.div`
  width: 400px;
`
