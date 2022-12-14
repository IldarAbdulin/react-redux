import React from 'react';
import { removeTodo, toggleTodo } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

export function TodoList() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo) => (
        <li className="todo" key={todo.title}>
          <input
            type="checkbox"
            onChange={() => dispatch(toggleTodo(todo.id))}
            checked={todo.completed}
          />
          <span>{todo.title}</span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
}
