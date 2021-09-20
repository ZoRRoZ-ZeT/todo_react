import React from 'react';
import TodoItem from './TodoItem/TodoItem.jsx';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="task-list">
        {this.props.tasks.map((task) => (
          <li key={task.id} className="task-list__item">
            <TodoItem task={task} onDelete={this.props.onDeleteItem} />
          </li>
        ))}
      </ul>
    );
  }
}

export default TaskList;
