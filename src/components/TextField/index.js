/* @flow */
import React from 'react'
import { Field } from 'formik'
import styles from './style.css'

type Props = {
  name: string,
  type?: 'text',
  autoFocus?: boolean,
  pattern?: string,
  placeholder?: string,
  minLength?: number,
  maxLength?: number,
  required?: boolean,
}

export default function TextField(props: Props) {
  const {
    name,
    type = 'text',
    autoFocus,
    pattern,
    placeholder,
    minLength,
    maxLength,
    required,
  } = props
  return (
    <Field
      name={name}
      className={styles.input}
      type={type}
      autoFocus={autoFocus}
      pattern={pattern}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
    />
  )
}