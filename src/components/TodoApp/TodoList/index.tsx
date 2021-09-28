import React from 'react';
import { connect } from 'react-redux';
import { Task } from '@type/todo.types';
import TodoItem from './TodoItem/index';
import { ApplicationState } from '@store/index';

interface IProps {
  tasks: Task[];
  filtering: (item: Task) => boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

class TodoList extends React.Component<IProps, IState> {
  render() {
    const filteredTasks = this.props.filtering
      ? this.props.tasks.filter(this.props.filtering)
      : this.props.tasks;
    return (
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className="task-list__item">
            <TodoItem task={task} />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  tasks: state.tasks.list,
});

export default connect(mapStateToProps)(TodoList);
