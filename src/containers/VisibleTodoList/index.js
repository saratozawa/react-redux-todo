import { connect } from 'react-redux'
import { VisibilityFilters, toggleTodo } from '../../actions'
import TodoList from '../../components/TodoList'

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case SHOW_ALL:
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
