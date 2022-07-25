import * as React from 'react'
import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import { TodoList } from '@/features/todo-list/view'

export const Todo = () => (
  <Wrap>
    <TodoList />
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
