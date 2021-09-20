import React from 'react';
import TaskFooter from './TaskFooter/TaskFooter.jsx';
import TaskHeader from './TaskHeader/TaskHeader.jsx';
import TaskList from './TaskList/TaskList.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentId: 0,
      inputValue: '',
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.todoAddItem = this.todoAddItem.bind(this);
    this.todoDeleteItem = this.todoDeleteItem.bind(this);
  }

  handleValueChange(value) {
    this.setState({
      inputValue: value,
    });
  }

  todoAddItem() {
    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks,
        {
          value: prevState.inputValue,
          id: prevState.currentId,
        },
      ],
      currentId: prevState.currentId + 1,
      inputValue: '',
    }));
  }

  todoDeleteItem(id) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  render() {
    return (
      <div className="shadow">
        <div className="body">
          <TaskHeader
            value={this.state.inputValue}
            handleValueChange={this.handleValueChange}
            handleSubmit={this.todoAddItem}
          />
          <TaskList
            tasks={this.state.tasks}
            handleDeleteAction={this.todoDeleteItem}
          />
        </div>
        <TaskFooter />
      </div>
    );
  }
}

export default TodoList;
