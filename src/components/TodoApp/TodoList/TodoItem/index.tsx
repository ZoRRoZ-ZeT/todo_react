import React, { ChangeEvent } from 'react';
import clsx from 'clsx';
import TodoInput from './TodoInput';
import Dropdown from './Dropdown/index';
import { Task } from '@type/todo.types';
import { Method, Priority } from '@type/index.types';
import { connect } from 'react-redux';
import { deleteTask, updateTask } from '@store/actions/tasks';
import { callApi } from '@apis/todos';

interface IProps {
  task: Task;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
}
interface IState {
  isClicked: boolean;
  isEditing: boolean;
  currentValue: string;
}

class TodoItem extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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

  async handleDeleteClick() {
    const deletedTask = await callApi<Task>(`/${this.props.task.id}`, {
      method: Method.DELETE,
    });
    this.props.deleteTask(deletedTask.id);
  }

  handleInputChange(value: string) {
    this.setState({
      currentValue: value,
    });
  }

  async handleSubmit() {
    this.setState({
      isEditing: false,
    });
    const updatedTaskFromApi = await callApi<Task>('', {
      method: Method.PUT,
      body: {
        ...this.props.task,
        value: this.state.currentValue,
      },
    });
    this.props.updateTask(updatedTaskFromApi);
  }

  handleInputClick() {
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

  async handleToggleChange(event: ChangeEvent<HTMLInputElement>) {
    const updatedTaskFromApi = await callApi<Task>('', {
      method: Method.PUT,
      body: {
        ...this.props.task,
        isChecked: event.target.checked,
      },
    });
    this.props.updateTask(updatedTaskFromApi);
  }

  async handleChangePriority(value: Priority) {
    const updatedTaskFromApi = await callApi<Task>('', {
      method: Method.PUT,
      body: {
        ...this.props.task,
        priority: value,
      },
    });
    this.props.updateTask(updatedTaskFromApi);
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

export default connect(null, { deleteTask, updateTask })(TodoItem);
