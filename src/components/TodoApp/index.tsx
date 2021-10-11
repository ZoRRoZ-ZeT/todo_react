import React, { useEffect, useState, useCallback } from 'react';
import TodoAppFooter from './TodoAppFooter/index';
import TodoAppHeader from './TodoAppHeader/index';
import TodoList from './TodoList/index';
import TodoModal from './TodoModal/index';
import { Status } from '@type/index.types';
import { mapPath, mapStatusToFilterPredicate } from '@constants/index';
import { connect } from 'react-redux';
import { fetchTasksAction } from '@store/actions/tasks';
import './index.scss';

interface IProps {
  fetchTasks: typeof fetchTasksAction.request;
}

const TodoApp = ({ fetchTasks }: IProps) => {
  const [filter, setFilter] = useState(
    mapPath[window.location.pathname] ?? Status.ALL
  );

  const filterPredicate = mapStatusToFilterPredicate[filter];

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleChangeFilter = useCallback((filterToApply: Status) => {
    setFilter(filterToApply);
  }, []);
  return (
    <div className="application">
      <TodoModal filterPredicate={filterPredicate} />
      <div className="shadow">
        <div className="body">
          <TodoAppHeader />
          <TodoList filterPredicate={filterPredicate} />
        </div>
        <TodoAppFooter
          currentFilter={filter}
          onChangeFilter={handleChangeFilter}
        />
      </div>
    </div>
  );
};

export default connect(null, {
  fetchTasks: fetchTasksAction.request,
})(React.memo(TodoApp));
