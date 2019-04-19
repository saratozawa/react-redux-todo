/* @flow */
import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

type Props = {
  status: 'completed' | 'todo',
  onClick: Function,
  children: string,
}

export default function TodoListItem(props: Props) {
  const {
    status,
    onClick,
    children
  } = props

  return (
    <li onClick={onClick} className={classNames(styles.listItem, styles[status])}>
      <span className={styles.checkboxWrapper}>
        <input className={styles.checkbox} type='checkbox' />
      </span>
      {children}
    </li>
  )
}
