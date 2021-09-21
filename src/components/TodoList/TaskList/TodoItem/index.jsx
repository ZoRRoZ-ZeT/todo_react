import React from 'react';
import TodoInput from './TodoInput.jsx';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isClicked: false,
      isEditing: false,
    };
  }

  handleDeleteClick(event) {
    this.props.onDelete(this.props.task.id);
  }

  handleSubmit(value) {
    const updatedTask = this.props.task;
    updatedTask.value = value;
    this.setState({
      isEditing: false,
    });

    this.props.onSubmit(updatedTask);
  }

  handleInputClick(event) {
    if (this.state.isClicked) {
      this.setState({
        isClicked: false,
        isEditing: true,
      });
      return;
    }

    this.setState({ isClicked: true });

    setTimeout(() => {
      if (!this.state.isEditing) {
        this.setState({ isClicked: false });
      }
    }, 200);
  }

  handleToggleChange(event) {
    const updatedTask = this.props.task;
    updatedTask.isChecked = event.target.checked;

    this.props.onSubmit(updatedTask);
  }

  render() {
    const labelClassNames = `item__label ${
      this.state.isEditing ? 'clicked' : ''
    }`;

    let input;
    if (this.state.isEditing) {
      input = (
        <TodoInput value={this.props.task.value} onSubmit={this.handleSubmit} />
      );
    }
    return (
      <div className="item">
        <input
          type="checkbox"
          className="item__toggle"
          onChange={this.handleToggleChange}
          checked={this.props.task.isChecked}
        />
        <label className={labelClassNames} onClick={this.handleInputClick}>
          {this.props.task.value}
        </label>
        {input}
        <button
          className="btn btn-empty destroy item__button"
          onClick={this.handleDeleteClick}
        >
          ×
        </button>
      </div>
    );
  }
}

export default TodoItem;
