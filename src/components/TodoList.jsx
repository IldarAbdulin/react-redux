import React from 'react';

export const TodoList = ({ todos, onToogle, onRemove }) => {
  return (
    <ul className="todos">
      {todos.map((todo) => (
        <li key={todo.title}>
          <div style={{ display: 'flex' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToogle(todo.id)}
            />
            <p>{todo.title}</p>
          </div>
          <div>
            <button onClick={() => onRemove(todo.id)}>delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
