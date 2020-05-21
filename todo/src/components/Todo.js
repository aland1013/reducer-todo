import React, { useState } from 'react';

const Todo = ({ todo, dispatch }) => {
  const [selectedTodo, setSelectedTodo] = useState('');
  console.log(todo);
  const handleClick = (e) => {
    setSelectedTodo(e.target.value);
    console.log(selectedTodo);
    dispatch({
      type: 'TOGGLE_COMPLETED',
      payload: { item: todo.item, completed: todo.completed, id: todo.id }
    });
  };

  return (
    <div onClick={handleClick} key={todo.id}>
      <h1>{todo.item}</h1>
      <h3>completed: {`${todo.completed}`}</h3>
    </div>
  );
};

export default Todo;
