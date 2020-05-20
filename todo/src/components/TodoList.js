import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.item}</h1>
        </div>
      ))}
    </>
  );
};

export default TodoList;
