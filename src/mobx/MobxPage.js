import React from 'react';
import { observer } from 'mobx-react';

import ToDoForm from '../components/ToDoForm';
import ToDoMobxStore from './ToDoMobxStore';

@observer
class MobxPage extends React.Component {
  constructor(props) {
    super(props);

    this.store = ToDoMobxStore;

    this._handleChangeCurrentText = this._handleChangeCurrentText.bind(this);
    this._handleClearItems = this._handleClearItems.bind(this);
    this._handleAddItem = this._handleAddItem.bind(this);
  }

  _handleChangeCurrentText(text) {
    this.store.setCurrentText(text);
  }

  _handleClearItems() {
    this.store.clearItems();
  }

  _handleAddItem() {
    this.store.addItem();
  }

  render() {
    return (
      <>
        <h2 className="title">Using Mobx</h2>
        <ToDoForm
          currentText={this.store.currentText}
          items={this.store.items}
          onTextChange={this._handleChangeCurrentText}
          onAddClick={this._handleAddItem}
          onClearClick={this._handleClearItems}
        />
      </>
    );
  }
}

export default MobxPage;
