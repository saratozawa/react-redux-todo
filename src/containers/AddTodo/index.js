import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import styles from './style.css'
import { ErrorMessage, Form, Formik } from 'formik'
import { addTodo } from '../../actions'
import TextField from '../../components/TextField'
import Button from '../../components/Button'

function AddTodoForm({dispatch}) {
  return (
    <div className={classnames(styles.entryBlock, 'wrapper')}>
      <Formik
        initialValues={{task: ''}}
        validate={values => {
          let errors = {}
          if (!values.task) {
            errors.task = 'Required'
          }
          return errors
        }}
        onSubmit={(values, actions) => {
          dispatch(addTodo(values.task))
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
            <ErrorMessage name='task' component='div'/>
          </Form>
        )}
      />
    </div>
  )
}

const AddTodo = connect()(AddTodoForm)

export default AddTodo
