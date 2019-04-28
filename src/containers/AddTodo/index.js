import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import AddTodoForm from './AddTodoForm'

type Props = {
  addTodo: Function,
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (task) => dispatch(addTodo(task))
  }
}

const AddTodo = connect(
  undefined,
  mapDispatchToProps,
)(AddTodoForm)

export default AddTodo
