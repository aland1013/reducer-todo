import React from 'react';

const Todo = ({ todo, dispatch }) => {
  const handleClick = () => {
    dispatch({
      type: 'TOGGLE_COMPLETED',
      payload: { id: todo.id }
    });
  };

  return (
    <div
      className={`${todo.completed ? 'completed' : ''}`}
      onClick={handleClick}
      key={todo.id}
    >
      <h2>{todo.item}</h2>
      <p>created: {todo.created}</p>
    </div>
  );
};

export default Todo;
