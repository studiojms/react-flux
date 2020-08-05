import React from 'react';

function ToDoForm({ currentText, items, onTextChange, onAddClick, onClearClick }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (currentText?.length > 0) {
          onAddClick();
        }
      }}
    >
      <div className="field is-grouped">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Task Description"
            value={currentText}
            onChange={(e) => onTextChange(e.target.value)}
          />
        </div>
        <div className="control">
          <button type="button" className="button is-primary" onClick={onAddClick} disabled={!currentText}>
            Add
          </button>
        </div>
        <div className="control">
          <button type="button" className="button is-danger" onClick={onClearClick} disabled={items.length == 0}>
            Clear
          </button>
        </div>
      </div>
      <div className="content">
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item.text}</li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default ToDoForm;
