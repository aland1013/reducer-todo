import React from 'react';

const ClearButton = ({ dispatch }) => {
  const handleClick = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return <button onClick={handleClick}>Clear Completed</button>;
};

export default ClearButton;
