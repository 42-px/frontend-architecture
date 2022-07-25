import { TodoItem } from '@/dal/todo-list'
import { createForm } from 'effector-forms'
import { root } from '@/root'

const d = root.domain('todo-list')
export const init = d.event()
export const $data = d.store<TodoItem[]>([])
export const addTodoItem = d.event()
export const deleteTodoItem = d.event<number>()
export const reorderTodoItem = d.event<number>()
export const setIsCheckedTodoItem = d.event<number>()
export const editTodoItem = d.event<{index: number; text?: string; isDone?: boolean}>()

export const loadTodoList = d.effect()


export const $formData = d.store<string>('')

export const addForm = createForm({
  fields: {
    text: {
      init: '',
      rules: [{
        name: 'text',
        validator: (value: string) => Boolean(value)
      }],
    },
  },
})
