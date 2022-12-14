import React from 'react';
import { NewTodo } from './NewTodo';
import { TodoList } from './TodoList';

export function Todos() {
  return (
    <>
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <TodoList />
    </>
  );
}
