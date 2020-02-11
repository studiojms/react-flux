const INITIAL_STATE = {
  items: [],
  currentText: '',
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, state.currentText],
        currentText: '',
      };
    case 'CLEAR_ITEMS':
      return {
        ...state,
        items: [],
      };
    case 'CHANGE_TEXT':
      return {
        ...state,
        currentText: action.value,
      };
    default:
      return state;
  }
}

export default { items: reducer };
