import React from 'react';
import TodoItem from './TodoItem/index.jsx';

class TodoList extends React.Component {
  constructor(props) {
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
