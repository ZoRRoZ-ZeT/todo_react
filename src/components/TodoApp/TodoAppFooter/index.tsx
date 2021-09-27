import React from 'react';
import clsx from 'clsx';

import FilterButton from './FilterButton';
import { Task } from '../../../types/todo.types';
import { Status } from '../../../types/index.types';

interface IProps {
  tasks: Task[];
  currentFilter: string;
  onChangeFilter: (value: string) => void;
  onClear: () => void;
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

  handleClearClick() {
    this.props.onClear();
  }

  render() {
    const count = this.props.tasks.length;
    const checkedCount = this.props.tasks.filter(
      (task) => task.isChecked
    ).length;

    return count > 0 ? (
      <div className="footer" id="footer">
        <span className="footer__count" id="count">
          {count - checkedCount} items
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
        <span
          className={clsx({
            footer__clear: true,
            hidden: checkedCount === 0,
          })}
          onClick={this.handleClearClick}
        >
          Clear completed
        </span>
      </div>
    ) : null;
  }
}

export default TodoAppFooter;
