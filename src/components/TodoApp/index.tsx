import React from 'react';
import TodoAppFooter from './TodoAppFooter/index';
import TodoAppHeader from './TodoAppHeader/index';
import TodoList from './TodoList/index';
import TodoModal from './TodoModal/index';
import { Status } from '@type/index.types';
import { Task } from '@type/todo.types';
import { mapPath } from '@constants/index';
import { callApi } from '@apis/todos';
import { connect } from 'react-redux';
import { setTaskList } from '@store/actions/tasks';

interface IProps {
  setTaskList: (tasks: Task[]) => void;
}
interface IState {
  filter: string;
}

class TodoApp extends React.Component<IProps, IState> {
  mapStatusToFilterPredicate: { [x: string]: (item: Task) => boolean };

  constructor(props: IProps) {
    super(props);

    this.handleChangeFilter = this.handleChangeFilter.bind(this);

    this.mapStatusToFilterPredicate = {
      [Status.ACTIVE]: (item) => item.isChecked === false,
      [Status.COMPLETED]: (item) => item.isChecked === true,
      [Status.ALL]: null,
    };

    this.state = {
      filter: mapPath[window.location.pathname] ?? Status.ALL,
    };
  }

  componentDidMount() {
    const fetch = async () => {
      const tasks = await callApi<Task[]>('');
      this.props.setTaskList(tasks || []);
    };

    fetch();
  }

  handleChangeFilter(filterToApply: string) {
    this.setState({
      filter: filterToApply,
    });
  }

  render() {
    const filterPredicate = this.mapStatusToFilterPredicate[this.state.filter];
    return (
      <div className="application">
        <TodoModal filtering={filterPredicate} />
        <div className="shadow">
          <div className="body">
            <TodoAppHeader />
            <TodoList filtering={filterPredicate} />
          </div>
          <TodoAppFooter
            currentFilter={this.state.filter}
            onChangeFilter={this.handleChangeFilter}
          />
        </div>
      </div>
    );
  }
}
export default connect(null, { setTaskList })(TodoApp);
