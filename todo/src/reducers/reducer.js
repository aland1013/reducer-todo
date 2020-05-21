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
      let current = state.find((todo) => todo.id === action.payload.id);
      let index = state.indexOf(current);
      console.log('index', index);
      let newState = [...state];
      newState[index].completed = !newState[index].completed;
      console.log(newState);

      return newState;

    default:
      return state;
  }
};
