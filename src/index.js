import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

const root = document.getElementById('root')
root ? ReactDom.render(<App />, root) : false