import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      payload: { item: newTodo }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='newTodo'
          value={newTodo}
          onChange={handleChanges}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </>
  );
};

export default TodoForm;
