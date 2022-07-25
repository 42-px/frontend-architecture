import { forward, sample } from 'effector'
import {
  $data, addForm, addTodoItem, deleteTodoItem, editTodoItem, init, loadTodoList, reorderTodoItem, setIsCheckedTodoItem,
} from './private'

$data
  .on(addTodoItem, (prev, item) => [...prev, { text: item?.text || item, isDone: false }])
  .on(editTodoItem, ((state, { index, text, isDone }) => [...state.slice(0, index), { index, text, isDone }, ...state.slice(index + 1)]))
  .on(setIsCheckedTodoItem, ((state, index) => [...state.map((item, i) => (index === i ? { ...item, isDone: !item.isDone } : item))]))
  .on(deleteTodoItem, ((state, index) => [...state.filter((_, i) => i !== index)]))
  .on(loadTodoList.doneData, (_, x) => x)

$data.updates.watch((data) => {
  localStorage.setItem('TODO_LIST', JSON.stringify(data))
})

loadTodoList.use(() => {
  try {
    const data = localStorage.getItem('TODO_LIST')
    if (!data) throw new Error()
    return JSON.parse(data)
  } catch {
    return []
  }
})

forward({
  from: init,
  to: loadTodoList,
})

forward({
  from: addForm.formValidated,
  to: addTodoItem,
})
