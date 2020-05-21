import React from 'react';

const Todo = ({ todo, dispatch }) => {
  const handleClick = () => {
    dispatch({
      type: 'TOGGLE_COMPLETED',
      payload: { id: todo.id }
    });
  };

  return (
    <div onClick={handleClick} key={todo.id}>
      <h1 className={`${todo.completed ? 'completed' : ''}`}>{todo.item}</h1>
    </div>
  );
};

export default Todo;
