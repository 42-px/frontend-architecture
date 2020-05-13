import * as React from 'react'
import styled from 'styled-components'

type Props = {
  heading: React.ReactNode;
  error?: React.ReactNode;
  fields: React.ReactNode;
  actions: React.ReactNode;
  onSubmit?: () => void;
}

export const Form = ({
  heading, fields, actions, error, onSubmit,
}: Props) => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit()
    }
  }

  return (
    <Wrap onSubmit={submitHandler}>
      <HeadingWrap>
        {heading}
      </HeadingWrap>
      <ErrorWrap>
        {error}
      </ErrorWrap>
      <FieldsWrap>
        {fields}
      </FieldsWrap>
      <ActionsWrap>
        {actions}
      </ActionsWrap>
    </Wrap>
  )
}

const Wrap = styled.form`
  padding: 20px;
`

const ErrorWrap = styled.div`
  padding: 10px 0px;
`

const HeadingWrap = styled.div`
  padding: 10px 0px;
`
const FieldsWrap = styled.div``
const ActionsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 8px;
  padding-bottom: 8px;
`
