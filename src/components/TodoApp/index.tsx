import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router';

import Button from '@material-ui/core/Button';

import { Status } from '@type/index.types';
import { mapPath, mapStatusToFilterPredicate } from '@constants/index';
import { fetchTasksAction } from '@store/actions/tasks';
import { logoutAction } from '@store/actions/user';
import ThemeChanger from '@components/ThemeChanger/index';
import LanguageChanger from '@components/LanguageChanger/index';

import TodoAppFooter from './TodoAppFooter/index';
import TodoAppHeader from './TodoAppHeader/index';
import TodoList from './TodoList/index';
import TodoModal from './TodoModal/index';
import useStyles from './styles';

interface IProps {
  logout: typeof logoutAction.request;
  fetchTasks: typeof fetchTasksAction.request;
}

const TodoApp = ({ fetchTasks, logout }: IProps) => {
  const { params } = useRouteMatch<{ filter: string }>();
  console.log(params);
  const [filter, setFilter] = useState(mapPath[params.filter] ?? Status.ALL);
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
      <Button
        variant="contained"
        color="primary"
        className={classes.exit}
        onClick={logout}
      >
        Log Out
      </Button>
    </div>
  );
};

export default connect(null, {
  logout: logoutAction.request,
  fetchTasks: fetchTasksAction.request,
})(React.memo(TodoApp));
