import React from 'react'
import TodoListItem from './TodoListItem/'

const style = {
  myApp: {
    margin: '20px auto',
    width: '70%',
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    margin: '28px 0',
    textAlign: 'center'
  },
  list: {
    background: '#f5fcc2',
    border: 'solid 2px #fccb82',
    margin: '20px auto',
    padding: '20px'
  }
}

const App = () => (
  <div className='my-app' style={style.myApp}>
    <h1 style={style.title}>My Todo App</h1>
    <ul style={style.list}>
      <TodoListItem status='todo' onClick={() => {}}>Buy milk</TodoListItem>
    </ul>
  </div>
)

export default App
