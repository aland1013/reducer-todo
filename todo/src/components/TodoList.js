import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const TodoList = () => {
  const [todoState, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {todoState.map((todo) => (
        <h1>{todo.item}</h1>
      ))}
    </>
  );
};

export default TodoList;
