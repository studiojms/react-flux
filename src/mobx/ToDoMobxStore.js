import { observable, action, configure } from 'mobx';

configure({ enforceActions: 'observed' });

class ToDoMobxStore {
  @observable
  items = [];

  @observable
  currentText = '';

  @action
  setCurrentText(text) {
    this.currentText = text;
  }

  @action
  addItem() {
    this.items.push({ text: this.currentText });
    this.setCurrentText('');
  }

  @action
  clearItems() {
    this.items = [];
  }
}

export default new ToDoMobxStore();
