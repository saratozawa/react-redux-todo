/* @flow */
import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

type Props = {
  completed: boolean,
  onClick: Function,
  children: string,
}

export default function TodoListItem(props: Props) {
  const {
    completed,
    onClick,
    children,
  } = props

  return (
    <li onClick={onClick} className={classNames(styles.listItem, completed && styles['completed'])}>
      <span className={styles.checkbox} />
      <span className={styles.text}>{children}</span>
    </li>
  )
}
