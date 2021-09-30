import React from 'react';
import clsx from 'clsx';

import FilterButton from './FilterButton';
import { Method, Status } from '@type/index.types';
import { connect } from 'react-redux';
import { deleteMultipleTasks } from '@store/actions/tasks';
import { Task } from '@type/todo.types';
import { callApi } from '@apis/todos';
import { ApplicationState } from '@store/index';
import Tooltip from '@components/Tooltip';

interface IProps {
  count: number;
  completedCount: number;
  currentFilter: string;
  onChangeFilter: (value: string) => void;
  deleteMultipleTasks: (tasks: Task[]) => void;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

class TodoAppFooter extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleFilterChange(value: Status) {
    this.props.onChangeFilter(value);
    window.history.pushState('', '', `/${value.toLowerCase()}`);
  }

  async handleClearClick() {
    const clearedTasks = await callApi<Task[]>('', {
      method: Method.DELETE,
      body: { filter: true },
    });
    this.props.deleteMultipleTasks(clearedTasks);
  }

  render() {
    return this.props.count > 0 ? (
      <div className="footer" id="footer">
        <span className="footer__count" id="count">
          {this.props.count - this.props.completedCount} items
        </span>
        <div className="filters">
          <FilterButton
            onFilterChange={this.handleFilterChange}
            filter={Status.ALL}
            name="All"
            isActive={this.props.currentFilter === Status.ALL}
          />
          <FilterButton
            onFilterChange={this.handleFilterChange}
            filter={Status.ACTIVE}
            name="Active"
            isActive={this.props.currentFilter === Status.ACTIVE}
          />
          <FilterButton
            onFilterChange={this.handleFilterChange}
            filter={Status.COMPLETED}
            name="Completed"
            isActive={this.props.currentFilter === Status.COMPLETED}
          />
        </div>
        <Tooltip title="Clear completed tasks">
          <span
            className={clsx({
              footer__clear: true,
              hidden: !this.props.completedCount,
            })}
            onClick={this.handleClearClick}
          >
            Clear completed
          </span>
        </Tooltip>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    count: state.tasks.list.length,
    completedCount: state.tasks.list.filter((task) => task.isChecked).length,
  };
};
export default connect(mapStateToProps, { deleteMultipleTasks })(TodoAppFooter);
