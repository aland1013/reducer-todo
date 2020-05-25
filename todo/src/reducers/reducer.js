const moment = require('moment');

export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    created: 'May 1, 2020'
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          item: action.payload.item,
          completed: false,
          id: Date.now(),
          created: moment().format('MMM D, YYYY')
        }
      ];

    case 'TOGGLE_COMPLETED':
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? {
              item: todo.item,
              id: todo.id,
              created: todo.created,
              completed: !todo.completed
            }
          : todo;
      });

    case 'CLEAR_COMPLETED':
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};
