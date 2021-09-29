import { callApi } from '@apis/todos';
import { addTask } from '@store/actions/tasks';
import { ApplicationState } from '@store/index';
import { Method } from '@type/index.types';
import React from 'react';
import { connect } from 'react-redux';
import { Task } from '../../../types/todo.types';
import TodoHeaderInput from './TodoHeaderInput/index';
import Toggler from './Toggler';

interface IProps {
  isTasksExist: boolean;
  isTasksCompleted: boolean;
  addTask: (task: Task) => void;
}
interface IState {
  inputValue: string;
}

class TodoAppHeader extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleEnterPressed = this.handleEnterPressed.bind(this);

    this.state = {
      inputValue: '',
    };
  }

  handleInputChanged(value: string) {
    this.setState({
      inputValue: value,
    });
  }

  async handleEnterPressed() {
    if (this.state.inputValue.trim() === '') {
      return;
    }
    const createdTask = await callApi<Task>('', {
      method: Method.POST,
      body: { value: this.state.inputValue },
    });
    this.props.addTask(createdTask);
    this.setState({
      inputValue: '',
    });
  }

  render() {
    return (
      <div className="body__input add-form">
        {this.props.isTasksExist ? (
          <Toggler isActive={this.props.isTasksCompleted} />
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

const mapStateToProps = (state: ApplicationState) => {
  return {
    isTasksExist: !!state.tasks.list.length,
    isTasksCompleted: !state.tasks.list.filter((task) => !task.isChecked)
      .length,
  };
};

export default connect(mapStateToProps, { addTask })(TodoAppHeader);
