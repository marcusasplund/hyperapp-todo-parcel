/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import { TodoItem } from './todo-item'

export const TodoList = ({ state, actions }) => (
  state.todos
    .filter(todo => !todo.done)
    .map(todo => <TodoItem todo={todo} actions={actions} />)
)
