import React from 'react';
import TaskFooter from './TaskFooter/TaskFooter.jsx';
import TaskHeader from './TaskHeader/TaskHeader.jsx';
import TaskList from './TaskList/TaskList.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);

    this.state = {
      tasks: [],
      currentId: 0,
    };
  }

  handleAddItem(value) {
    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks,
        {
          value,
          id: prevState.currentId,
        },
      ],
      currentId: prevState.currentId + 1,
    }));
  }

  handleDeleteItem(id) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  render() {
    return (
      <div className="shadow">
        <div className="body">
          <TaskHeader onAddItem={this.handleAddItem} />
          <TaskList
            tasks={this.state.tasks}
            onDeleteItem={this.handleDeleteItem}
          />
        </div>
        <TaskFooter />
      </div>
    );
  }
}

export default TodoList;
