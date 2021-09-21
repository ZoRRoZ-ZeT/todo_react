import React from 'react';
import TaskFooter from './TaskFooter/index.jsx';
import TaskHeader from './TaskHeader/index.jsx';
import TaskList from './TaskList/index.jsx';
import STATUSES from '../../constants/statuses';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleChangeItem = this.handleChangeItem.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);

    this.handleClear = this.handleClear.bind(this);

    this.mapStatusToFilterPredicate = {
      [STATUSES.ACTIVE]: (item) => item.isChecked === false,
      [STATUSES.COMPLETED]: (item) => item.isChecked === true,
      [STATUSES.ALL]: null,
    };

    this.state = {
      tasks: [],
      currentId: 0,
      filter: STATUSES.ALL,
    };
  }

  handleAddItem(value) {
    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks,
        {
          isChecked: false,
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

  handleChangeItem(task) {
    const index = this.state.tasks.findIndex(
      (searchTask) => searchTask.id === task.id
    );
    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks.slice(0, index),
        task,
        ...prevState.tasks.slice(index + 1),
      ],
    }));
  }

  handleChangeFilter(filterToApply) {
    this.setState({
      filter: filterToApply,
    });
  }

  handleClear() {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.isChecked === false),
    }));
  }

  render() {
    const filterPredicate = this.mapStatusToFilterPredicate[this.state.filter];
    const filteredTasks = filterPredicate
      ? this.state.tasks.filter(filterPredicate)
      : this.state.tasks;
    return (
      <div className="shadow">
        <div className="body">
          <TaskHeader onAddItem={this.handleAddItem} />
          <TaskList
            tasks={filteredTasks}
            onDeleteItem={this.handleDeleteItem}
            onChangeItem={this.handleChangeItem}
          />
        </div>
        <TaskFooter
          tasks={this.state.tasks}
          onChangeFilter={this.handleChangeFilter}
          onClear={this.handleClear}
        />
      </div>
    );
  }
}

export default TodoList;
