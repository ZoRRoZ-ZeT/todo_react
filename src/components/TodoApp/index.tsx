import React from 'react';
import TodoAppFooter from './TodoAppFooter/index';
import TodoAppHeader from './TodoAppHeader/index';
import TodoList from './TodoList/index';
import TodoModal from './TodoModal/index';
import { Method, Status } from '../../types/index.types';
import { Task } from '@type/todo.types';
import { mapPath } from '@constants/index';
import { callApi } from '@apis/todos';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}
interface IState {
  tasks: Task[];
  filter: string;
}

class TodoApp extends React.Component<IProps, IState> {
  mapStatusToFilterPredicate: { [x: string]: (item: Task) => boolean };

  constructor(props: IProps) {
    super(props);

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleChangeItem = this.handleChangeItem.bind(this);

    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleToggleItems = this.handleToggleItems.bind(this);

    this.mapStatusToFilterPredicate = {
      [Status.ACTIVE]: (item) => item.isChecked === false,
      [Status.COMPLETED]: (item) => item.isChecked === true,
      [Status.ALL]: null,
    };

    this.state = {
      tasks: [],
      filter: mapPath[window.location.pathname] ?? Status.ALL,
    };
  }

  componentDidMount() {
    const fetch = async () => {
      const tasks = await callApi<Task[]>('');
      this.setState({
        tasks: tasks || [],
      });
    };

    fetch();
  }

  async handleAddItem(value: string) {
    const createdTask = await callApi<Task>('', {
      method: Method.POST,
      body: JSON.stringify({ value }),
    });
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, createdTask],
    }));
  }

  async handleDeleteItem(id: string) {
    const deletedTask = await callApi<Task>(`/${id}`, {
      method: Method.DELETE,
    });
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== deletedTask.id),
    }));
  }

  async handleChangeItem(task: Task) {
    const updatedTask = await callApi<Task>('', {
      method: Method.PUT,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });

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
    const clearedTasks = await callApi<Task[]>('', {
      method: Method.DELETE,
      body: JSON.stringify(true),
    });

    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(
        (task) => !clearedTasks.some((cleared: Task) => cleared.id === task.id)
      ),
    }));
  }

  async handleToggleItems() {
    const fillValue = await callApi<boolean>('/toggle', {
      method: Method.PUT,
    });

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
      <div className="application">
        <TodoModal tasks={filteredTasks} />
        <div className="shadow">
          <div className="body">
            <TodoAppHeader
              isTasksExist={!!this.state.tasks.length}
              isTasksCompleted={
                !this.state.tasks.filter((task) => !task.isChecked).length
              }
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
            count={this.state.tasks.length}
            completedCount={
              this.state.tasks.filter((task) => task.isChecked).length
            }
            onChangeFilter={this.handleChangeFilter}
            onClear={this.handleClear}
          />
        </div>
      </div>
    );
  }
}

export default TodoApp;
