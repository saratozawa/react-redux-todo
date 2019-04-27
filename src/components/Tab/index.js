/* @flow */
import React from 'react'
import classnames from 'classnames'
import styles from './style.css'

type Props = {
  active: boolean,
  onClick: Function,
  children: string,
}

export default function Tab(props: Props) {
  const {
    active,
    onClick,
    children,
  } = props

  return (
    <span
       onClick={onClick}
       className={classnames(styles.tab, active && styles['active'])}
    >{children}</span>
  )
}
