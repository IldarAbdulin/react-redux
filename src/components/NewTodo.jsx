import React from 'react';

export const NewTodo = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="title" placeholder="new todo" />
      <input type="submit" value="Add Todo" />
    </form>
  );
};
