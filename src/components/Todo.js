/* @flow */
import React from 'react'

type Props = {
  completed: boolean,
  onClick: Function,
  text: string,
}

export default function Todo(props: Props) {
  const {
    completed,
    onClick,
    text
  } = props
  return (
    <li onClick={onClick} className={completed ? 'completed' : 'todo'}>{text}</li>
  )
}
