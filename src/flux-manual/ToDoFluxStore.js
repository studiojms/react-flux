import { EventEmitter } from 'events';
import { register } from './Dispatcher';

const CHANGE_EVENT = 'change';

let _currentText = '';
let _items = [];

const ToDoFluxStore = Object.assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCurrentText() {
    return _currentText;
  },

  getItems() {
    return _items;
  },

  dispatcherIndex: register(function(action) {
    switch (action.actionType) {
      case 'CHANGE_TEXT':
        _currentText = action.text || null;
        ToDoFluxStore.emitChange();
        break;

      case 'ADD_ITEM':
        _items.push({ text: ToDoFluxStore.getCurrentText() });
        _currentText = '';
        ToDoFluxStore.emitChange();
        break;

      case 'CLEAR_ITEMS':
        _items = [];
        ToDoFluxStore.emitChange();
        break;

      default:
        ToDoFluxStore.emitChange();
    }
  }),
});

export default ToDoFluxStore;
