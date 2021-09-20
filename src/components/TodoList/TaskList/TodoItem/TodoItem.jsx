import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  onDeleteItem(event) {
    this.props.handleDeleteItem(this.props.task.id);
  }

  render() {
    return (
      <li className="task-list__item">
        <div className="item">
          <input type="checkbox" className="item__toggle" />
          <label className="item__label">{this.props.task.value}</label>
          <button
            className="btn btn-empty destroy item__button"
            onClick={this.onDeleteItem}
          >
            ×
          </button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
