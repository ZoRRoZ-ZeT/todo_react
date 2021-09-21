import React from 'react';
import TodoAppFooter from './TodoAppFooter/index.jsx';
import TodoAppHeader from './TodoAppHeader/index.jsx';
import TodoList from './TodoList/index.jsx';
import STATUSES from '../../constants/statuses';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleChangeItem = this.handleChangeItem.bind(this);

    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleToggleItems = this.handleToggleItems.bind(this);

    this.mapStatusToFilterPredicate = {
      [STATUSES.ACTIVE]: (item) => item.isChecked === false,
      [STATUSES.COMPLETED]: (item) => item.isChecked === true,
      [STATUSES.ALL]: null,
    };

    const mapPath = {
      '/active': STATUSES.ACTIVE,
      '/completed': STATUSES.COMPLETED,
    };

    this.state = {
      tasks: [],
      currentId: 0,
      filter: mapPath[window.location.pathname] ?? STATUSES.ALL,
    };
  }

  handleAddItem(value) {
    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks,
        {
          priority: 'none',
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

  handleToggleItems() {
    const fillValue = this.state.tasks.reduce(
      (result, item) => result && item.isChecked,
      true
    );
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
        task.isChecked = !fillValue;
        return task;
      }),
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
          <TodoAppHeader
            tasks={this.state.tasks}
            onAddItem={this.handleAddItem}
            onToggleItems={this.handleToggleItems}
          />
          <TodoList
            tasks={filteredTasks}
            onDeleteItem={this.handleDeleteItem}
            onChangeItem={this.handleChangeItem}
          />
        </div>
        <TodoAppFooter
          tasks={this.state.tasks}
          onChangeFilter={this.handleChangeFilter}
          onClear={this.handleClear}
        />
      </div>
    );
  }
}

export default TodoApp;
