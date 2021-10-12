import React, { useEffect, useState, useCallback } from 'react';
import TodoAppFooter from './TodoAppFooter/index';
import TodoAppHeader from './TodoAppHeader/index';
import TodoList from './TodoList/index';
import TodoModal from './TodoModal/index';
import { Status } from '@type/index.types';
import { mapPath, mapStatusToFilterPredicate } from '@constants/index';
import { connect } from 'react-redux';
import { fetchTasksAction } from '@store/actions/tasks';
import useStyles from './styles';
import ThemeChanger from '@components/features/ThemeChanger/index';
import LanguageChanger from '@components/features/LanguageChanger/index';
interface IProps {
  fetchTasks: typeof fetchTasksAction.request;
}

const TodoApp = ({ fetchTasks }: IProps) => {
  const [filter, setFilter] = useState(
    mapPath[window.location.pathname] ?? Status.ALL
  );
  const classes = useStyles();

  const filterPredicate = mapStatusToFilterPredicate[filter];

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleChangeFilter = useCallback((filterToApply: Status) => {
    setFilter(filterToApply);
  }, []);

  return (
    <div>
      <TodoModal filterPredicate={filterPredicate} />
      <div className={classes.shadow}>
        <div className={classes.body}>
          <TodoAppHeader />
          <TodoList filterPredicate={filterPredicate} />
        </div>
        <TodoAppFooter
          currentFilter={filter}
          onChangeFilter={handleChangeFilter}
        />
      </div>
      <div className={classes.featureContainer}>
        <LanguageChanger />
        <ThemeChanger />
      </div>
    </div>
  );
};

export default connect(null, {
  fetchTasks: fetchTasksAction.request,
})(React.memo(TodoApp));
