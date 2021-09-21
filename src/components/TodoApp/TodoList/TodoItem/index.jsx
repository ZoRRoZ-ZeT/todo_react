import React from 'react';
import clsx from 'clsx';
import TodoInput from './TodoInput.jsx';
import Dropdown from './Dropdown/index.jsx';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);

    this.state = {
      isClicked: false,
      isEditing: false,
      currentValue: this.props.task.value,
    };
  }

  handleDeleteClick(event) {
    this.props.onDelete(this.props.task.id);
  }

  handleInputChange(value) {
    this.setState({
      currentValue: value,
    });
  }

  handleSubmit() {
    this.setState({
      isEditing: false,
    });
    const updatedTask = this.props.task;
    updatedTask.value = this.state.currentValue;

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

  handleChangePriority(value) {
    const updatedTask = this.props.task;
    updatedTask.priority = value;

    this.props.onSubmit(updatedTask);
  }

  render() {
    return (
      <div className="item">
        <input
          type="checkbox"
          className="item__toggle"
          onChange={this.handleToggleChange}
          checked={this.props.task.isChecked}
        />
        <label
          className={clsx({
            item__label: true,
            clicked: this.state.isEditing,
          })}
          onClick={this.handleInputClick}
        >
          {this.props.task.value}
        </label>
        {this.state.isEditing ? (
          <TodoInput
            value={this.state.currentValue}
            onChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
          />
        ) : null}
        <div className="item__dropdown">
          <Dropdown
            priority={this.props.task.priority}
            onPriorityChanged={this.handleChangePriority}
          />
        </div>
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
