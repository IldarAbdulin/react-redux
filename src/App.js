import React from 'react'
import './App.css'
import { Counter } from './components/counter/Counter'
import { Todos } from './components/todo/Todos'

export const App = () => {
  return (
    <div style={{textAlign:'center'}}>
      {/* <Counter /> */}
      <Todos />
    </div>
  )
}