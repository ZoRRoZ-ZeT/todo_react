import React from 'react';
import clsx from 'clsx';
import FilterButton from './FilterButton';
import { connect } from 'react-redux';
import { ApplicationState } from '@store/index';
import { deleteMultipleTasksAction } from '@store/actions/tasks';
import { Status } from '@type/index.types';
import Tooltip from '@components/Tooltip';
import './index.scss';

interface IProps {
  count: number;
  completedCount: number;
  currentFilter: string;
  onChangeFilter: (value: Status) => void;
  deleteMultipleTasks: typeof deleteMultipleTasksAction.request;
}

const TodoAppFooter = React.memo(function TodoAppFooter(props: IProps) {
  const handleFilterChange = (value: Status) => {
    props.onChangeFilter(value);
    window.history.pushState('', '', `/${value.toLowerCase()}`);
  };

  return props.count > 0 ? (
    <div className="footer" id="footer">
      <span className="footer__count" id="count">
        {props.count - props.completedCount} items
      </span>
      <div className="filters">
        <FilterButton
          onFilterChange={handleFilterChange}
          filter={Status.ALL}
          name="All"
          isActive={props.currentFilter === Status.ALL}
        />
        <FilterButton
          onFilterChange={handleFilterChange}
          filter={Status.ACTIVE}
          name="Active"
          isActive={props.currentFilter === Status.ACTIVE}
        />
        <FilterButton
          onFilterChange={handleFilterChange}
          filter={Status.COMPLETED}
          name="Completed"
          isActive={props.currentFilter === Status.COMPLETED}
        />
      </div>
      <Tooltip title="Clear completed tasks">
        <span
          className={clsx({
            footer__clear: true,
            hidden: !props.completedCount,
          })}
          onClick={() => props.deleteMultipleTasks({ filter: true })}
        >
          Clear completed
        </span>
      </Tooltip>
    </div>
  ) : null;
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    count: state.tasks.list.length,
    completedCount: state.tasks.list.filter((task) => task.isChecked).length,
  };
};
export default connect(mapStateToProps, {
  deleteMultipleTasks: deleteMultipleTasksAction.request,
})(TodoAppFooter);
