import React from 'react';
import TodoAppFooter from './TodoAppFooter/index.jsx';
import TodoAppHeader from './TodoAppHeader/index.jsx';
import TodoList from './TodoList/index.jsx';
import STATUSES from '../../constants/statuses';
import TodoAPI from '../../api/todos.js';

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

    this.todoApi = new TodoAPI();
  }

  async componentDidMount() {
    const tasks = await this.todoApi.getAll();
    this.setState({
      tasks: tasks || [],
    });
  }

  async handleAddItem(value) {
    const createdTask = await this.todoApi.createTask({
      value,
    });
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, createdTask],
      currentId: prevState.currentId + 1,
    }));
  }

  async handleDeleteItem(id) {
    const deletedTask = await this.todoApi.deleteTask(id);
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== deletedTask.id),
    }));
  }

  async handleChangeItem(task) {
    const updatedTask = await this.todoApi.updateTask(task);
    const index = this.state.tasks.findIndex(
      (searchTask) => searchTask.id === updatedTask.id
    );
    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks.slice(0, index),
        updatedTask,
        ...prevState.tasks.slice(index + 1),
      ],
    }));
  }

  handleChangeFilter(filterToApply) {
    this.setState({
      filter: filterToApply,
    });
  }

  async handleClear() {
    const clearedTasks = await this.todoApi.deleteCompleted();
    const filterIds = clearedTasks.map((task) => task.id);
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => !filterIds.includes(task.id)),
    }));
  }

  async handleToggleItems() {
    const toggledTasks = await this.todoApi.toggleTasks();

    this.setState({
      tasks: toggledTasks,
    });
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
          currentFilter={this.state.filter}
          tasks={this.state.tasks}
          onChangeFilter={this.handleChangeFilter}
          onClear={this.handleClear}
        />
      </div>
    );
  }
}

export default TodoApp;
