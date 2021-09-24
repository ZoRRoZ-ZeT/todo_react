import React from 'react';
import { Task } from '../../../types/todo.types';
import TodoHeaderInput from './TodoHeaderInput/index';
import Toggler from './Toggler';

interface IProps {
  tasks: Task[],
  onAddItem: (value: string) => Promise<void>,
  onToggleItems: () => Promise<void>
}
interface IState {
  inputValue: string
}

class TodoAppHeader extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);

    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleEnterPressed = this.handleEnterPressed.bind(this);

    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      inputValue: '',
    };
  }

  handleInputChanged(value: string) {
    this.setState({
      inputValue: value,
    });
  }

  handleEnterPressed() {
    if (this.state.inputValue.trim() === '') {
      return;
    }
    this.props.onAddItem(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  }

  handleToggle() {
    this.props.onToggleItems();
  }

  render() {
    return (
      <div className="body__input add-form">
        {this.props.tasks.length > 0 ? (
          <Toggler
            onToggle={this.handleToggle}
            isActive={this.props.tasks.reduce(
              (result, task) => result && task.isChecked,
              true
            )}
          />
        ) : null}
        <TodoHeaderInput
          value={this.state.inputValue}
          onInputChanged={this.handleInputChanged}
          onEnterPressed={this.handleEnterPressed}
        />
      </div>
    );
  }
}

export default TodoAppHeader;
