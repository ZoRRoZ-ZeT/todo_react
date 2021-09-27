import React from 'react';
import TodoAppFooter from './TodoAppFooter/index';
import TodoAppHeader from './TodoAppHeader/index';
import TodoList from './TodoList/index';
import STATUSES from '../../constants/statuses';
import TodoAPI from '../../api/todos';
import { Task } from '../../types/todo.types';

interface IProps {}
interface IState {
  tasks: Task[],
  filter: string
}


class TodoApp extends React.Component<IProps,IState> {
  mapStatusToFilterPredicate: { [x: string]: (item: any) => boolean; };
  todoApi: TodoAPI;

  constructor(props: IProps) {
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
      filter: STATUSES.ALL,
    };

    this.todoApi = new TodoAPI();
  }

  componentDidMount() {
    const fetch = async () => {
      const tasks = await this.todoApi.getAll();
      this.setState({
        tasks: tasks || [],
      });
    };

    fetch();
  }

  async handleAddItem(value: string) {
    const createdTask = await this.todoApi.createTask({
      value,
    });
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, createdTask],
    }));
  }

  async handleDeleteItem(id: string) {
    const deletedTask = await this.todoApi.deleteTask(id);
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== deletedTask.id),
    }));
  }

  async handleChangeItem(task: Task) {
    const updatedTask = await this.todoApi.updateTask(task);

    this.setState((prevState) => ({
      tasks: prevState.tasks.map((taskElem) =>
        taskElem.id === updatedTask.id ? updatedTask : taskElem
      ),
    }));
  }

  handleChangeFilter(filterToApply: string) {
    this.setState({
      filter: filterToApply,
    });
  }

  async handleClear() {
    const clearedTasks = await this.todoApi.deleteCompleted(true);

    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(
        (task) => !clearedTasks.some((cleared: Task) => cleared.id === task.id)
      ),
    }));
  }

  async handleToggleItems() {
    const fillValue = await this.todoApi.toggleTasks();

    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => ({
        ...task,
        isChecked: fillValue,
      })),
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
