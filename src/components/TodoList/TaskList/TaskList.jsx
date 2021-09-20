import React from 'react';
import TodoItem from './TodoItem/TodoItem.jsx';

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleDeleteItem(id) {
    this.props.handleDeleteAction(id);
  }

  render() {
    return (
      <ul className="task-list">
        {this.props.tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            handleDeleteItem={this.handleDeleteItem}
          />
        ))}
      </ul>
    );
  }
}

export default TaskList;
