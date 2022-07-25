/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react'
import { useList, useStore } from 'effector-react'
import { InputField, PrimaryButton } from '@/ui'
import styled from 'styled-components'
import { useForm } from 'effector-forms/dist'
import {
  $data, $formData, addForm, addTodoItem, deleteTodoItem, editTodoItem, init, setIsCheckedTodoItem,
} from '../model/private'


export const TodoList = () => {
  React.useEffect(() => {
    init()
  }, [])
  const { fields, submit } = useForm(addForm)
  const formType = useStore($formData)
  const todoList = useStore($data)
  const onSubmit = (e) => {
    e.preventDefault()
    submit()
  }
  const todos = useList($data, (value, index) => (
    <ListItem>
      <PrimaryButton type="button" onClick={() => setIsCheckedTodoItem(index)}>Поменять статус</PrimaryButton>
      <TodoInput isDone={value.isDone} disabled={value.isDone} type="text" value={value.text} onChange={(event) => editTodoItem({ index, text: event.currentTarget.value, isDone: value.isDone })} />
      <PrimaryButton type="button" onClick={() => deleteTodoItem(index)}>Удалить</PrimaryButton>
    </ListItem>
  ))
  return (
    <div>
        <h1>Тестовое задание</h1>
      <ul>
        {todos}
      </ul>
      <form onSubmit={onSubmit}>
        <TodoInput
          value={fields.text.value}
          onChange={(e) => fields.text.onChange(e.target.value)}
        />
        <PrimaryButton type="submit">добавить</PrimaryButton>
      </form>

    </div>
  )
}

const ListItem = styled.li`
    display: flex;
    gap: 10px;
`

const TodoInput = styled(InputField)`
    background-color: ${(p) => (p.isDone ? 'green' : 'transparent')};
    
`
