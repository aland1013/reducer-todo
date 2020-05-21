export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { item: action.payload.item, completed: false, id: Date.now() }
      ];

    case 'TOGGLE_COMPLETED':
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? { item: todo.item, id: todo.id, completed: !todo.completed }
          : todo;
      });

    case 'CLEAR_COMPLETED':
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};
