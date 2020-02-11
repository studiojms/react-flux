import React from 'react';
import { connect } from 'react-redux';

import ToDoForm from '../components/ToDoForm';
import ItemActionCreators from './ItemActionCreators';

const { changeText, addItem, clearItems } = ItemActionCreators;

const mapStateToProps = state => ({ items: state.items.items, currentText: state.items.currentText });

/**
 * Envia as funções do ActionCreator para o componente
 */
const mapDispatchToProps = {
  changeText,
  addItem,
  clearItems,
};

/**
 * Renderiza o Form de ToDo com bind para Redux
 *
 * @param {array} items lista de itens
 * @param {string} currentText texto corrente do input
 * @param {func} addItem função a ser executada ao clicar no botão de adicionar
 * @param {func} clearItems função a ser executada ao clicar no botão de limpar
 * @param {func} changeText função a ser executada ao alterar o valor do input
 */
function ReduxForm({ items, currentText, addItem, clearItems, changeText }) {
  const itemsAsObjects = items.map(i => {
    return { text: i };
  });

  return (
    <>
      <h2 className="title">Using Redux</h2>
      <ToDoForm
        currentText={currentText}
        items={itemsAsObjects}
        onTextChange={changeText}
        onAddClick={addItem}
        onClearClick={clearItems}
      />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
