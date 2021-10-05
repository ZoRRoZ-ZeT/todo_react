import React, { useCallback, useEffect, useMemo, useState } from 'react';
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

const TodoApp = React.memo(function TodoApp(props: IProps) {
  const [filter, setFilter] = useState(
    mapPath[window.location.pathname] ?? Status.ALL
  );

  const filterPredicate = mapStatusToFilterPredicate[filter];

  useEffect(() => {
    props.fetchTasks();
  }, [props]);
  return (
    <div className="application">
      <TodoModal filtering={filterPredicate} />
      <div className="shadow">
        <div className="body">
          <TodoAppHeader />
          <TodoList filterPredicate={filterPredicate} />
        </div>
        <TodoAppFooter
          currentFilter={filter}
          onChangeFilter={(filterToApply: Status) => setFilter(filterToApply)}
        />
      </div>
    </div>
  );
});

export default connect(null, {
  fetchTasks: fetchTasksAction.request,
})(TodoApp);
