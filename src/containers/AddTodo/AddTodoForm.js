/* @flow */
import React from 'react'
import classnames from 'classnames'
import styles from './style.css'
import { ErrorMessage, Form, Formik } from 'formik'
import TextField from '../../components/TextField'
import Button from '../../components/Button'

type Props = {
  addTodo: Function,
}

const validateTask = (task) => {
  if (!task) {
    return 'Task is Required'
  }
  if (task.trim() === '') {
    return 'Not a valid task'
  }
}

function AddTodoForm(props: Props) {
  const { addTodo } = props
  return (
    <div className={classnames(styles.entryBlock, 'wrapper')}>
      <Formik
        initialValues={{task: ''}}
        validate={values => {
          const errors = {}
          errors.task = validateTask(values.task)
          return errors
        }}
        onSubmit={(values) => {
          addTodo(values.task)
        }}
        render={() => (
          <Form>
            <div className={styles.row}>
              <div className={styles.textField}>
                <TextField name='task' placeholder='Enter task'/>
              </div>
              <div className={styles.addButton}>
                <Button type='submit'>Add</Button>
              </div>
            </div>
            <ErrorMessage name='task' component='div' className={styles.errorMessage}/>
          </Form>
        )}
      />
    </div>
  )
}

export default AddTodoForm
