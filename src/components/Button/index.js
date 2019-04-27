/* @flow */
import React from 'react'
import styles from './style.css'

type Props = {
  children: string,
  type?: 'button',
  onClick?: Function,
  disabled?: boolean,
}

export default function TextField(props: Props) {
  const {
    children,
    type = 'button',
    onClick,
    disabled = false,
  } = props
  return (
    <button className={styles.button} type={type} onClick={onClick} disabled={disabled}>{children}</button>
  )
}