import React, { Fragment } from 'react'
import classnames from 'classnames'
import styles from './style.css'
import Todo from '../Todo'

type Props = {
  todos: Array<{
    id: string,
    text: string,
    completed: boolean
  }>,
  toggleTodo: Function
}

export default function TodoList(props: Props) {
  const { todos, toggleTodo } = props

  if (todos.length === 0) return null

  return (
    <ul className={classnames(styles.list, 'wrapper')}>
      {todos.map((todo) =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}>{todo.text}</Todo>
      )}
    </ul>
  )
}
