import React from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoFluxStore from './ToDoFluxStore';
import { dispatch } from './Dispatcher';

class FluxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: '',
      items: [],
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentText: ToDoFluxStore.getCurrentText(),
      items: ToDoFluxStore.getItems(),
    });
    ToDoFluxStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    ToDoFluxStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      currentText: ToDoFluxStore.getCurrentText(),
      items: ToDoFluxStore.getItems(),
    });
  }

  _handleChangeCurrentText(text) {
    dispatch({ actionType: 'CHANGE_TEXT', text });
  }

  _handleClearItems() {
    dispatch({ actionType: 'CLEAR_ITEMS' });
  }

  _handleAddItem() {
    dispatch({ actionType: 'ADD_ITEM' });
  }

  render() {
    return (
      <>
        <h2 className="title">Using Pure Flux</h2>
        <ToDoForm
          currentText={this.state.currentText}
          items={this.state.items}
          onTextChange={this._handleChangeCurrentText}
          onAddClick={this._handleAddItem}
          onClearClick={this._handleClearItems}
        />
      </>
    );
  }
}

export default FluxPage;
