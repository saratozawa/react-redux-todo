import React from 'react'
import styles from './app.css'
import FilterTabs from '../containers/FilterTabs/index'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList/index'

function App() {
  return (
    <div className={styles.myApp}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Todo App</h1>
        <AddTodo/>
      </div>
      <div className={styles.main}>
        <FilterTabs/>
        <VisibleTodoList />
      </div>
    </div>
  )
}

export default App