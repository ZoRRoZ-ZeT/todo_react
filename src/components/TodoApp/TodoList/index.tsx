import React from 'react';
import { Task } from '../../../types/todo.types';
import TodoItem from './TodoItem/index';

interface IProps {
  tasks: Task[];
  onDeleteItem: (id: string) => void;
  onChangeItem: (task: Task) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

class TodoList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <ul className="task-list">
        {this.props.tasks.map((task) => (
          <li key={task.id} className="task-list__item">
            <TodoItem
              task={task}
              onDelete={this.props.onDeleteItem}
              onSubmit={this.props.onChangeItem}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
