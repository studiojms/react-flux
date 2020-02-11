const ItemActionCreators = {
  addItem: () => {
    return {
      type: 'ADD_ITEM',
    };
  },
  clearItems: () => {
    return {
      type: 'CLEAR_ITEMS',
    };
  },
  changeText: value => {
    return {
      type: 'CHANGE_TEXT',
      value,
    };
  },
};

export default ItemActionCreators;
