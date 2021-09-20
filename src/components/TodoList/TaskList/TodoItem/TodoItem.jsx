import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onDelete(this.props.task.id);
  }

  render() {
    return (
      <div className="item">
        <input type="checkbox" className="item__toggle" />
        <label className="item__label">{this.props.task.value}</label>
        <button
          className="btn btn-empty destroy item__button"
          onClick={this.handleClick}
        >
          ×
        </button>
      </div>
    );
  }
}

export default TodoItem;
