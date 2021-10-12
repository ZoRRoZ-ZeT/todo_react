import React, { useMemo, useCallback, useContext } from 'react';
import clsx from 'clsx';
import FilterButton from './FilterButton';
import { connect } from 'react-redux';
import { ApplicationState } from '@store/index';
import { deleteMultipleTasksAction } from '@store/actions/tasks';
import { Status } from '@type/index.types';
import Tooltip from '@components/Tooltip';
import useStyles from './styles';
import { AppContext } from '@context/index';
import useTranslate from '@hooks/transate';

interface IProps {
  count: number;
  completedCount: number;
  currentFilter: string;
  onChangeFilter: (value: Status) => void;
  deleteMultipleTasks: typeof deleteMultipleTasksAction.request;
}

const TodoAppFooter = ({
  count,
  completedCount,
  currentFilter,
  onChangeFilter,
  deleteMultipleTasks,
}: IProps) => {
  const { state } = useContext(AppContext);
  const t = useTranslate(state.language);

  const classes = useStyles();
  const itemsLeft = useMemo(
    () => count - completedCount,
    [count, completedCount]
  );

  const handleFilterChange = useCallback(
    (value: Status) => {
      onChangeFilter(value);
      window.history.pushState('', '', `/${value.toLowerCase()}`);
    },
    [onChangeFilter]
  );

  const handleDeleteMultiple = useCallback(
    () => deleteMultipleTasks({ filter: true }),
    [deleteMultipleTasks]
  );

  return count > 0 ? (
    <div className={classes.footer}>
      <span className={classes.count}>
        {itemsLeft} {t('ITEMS')}
      </span>
      <div className={classes.filters}>
        <FilterButton
          onFilterChange={handleFilterChange}
          filter={Status.ALL}
          name={t('ALL')}
          isActive={currentFilter === Status.ALL}
        />
        <FilterButton
          onFilterChange={handleFilterChange}
          filter={Status.ACTIVE}
          name={t('ACTIVE')}
          isActive={currentFilter === Status.ACTIVE}
        />
        <FilterButton
          onFilterChange={handleFilterChange}
          filter={Status.COMPLETED}
          name={t('COMPLETED')}
          isActive={currentFilter === Status.COMPLETED}
        />
      </div>
      <div className={classes.clearBox}>
        <Tooltip title={t('CLEAR_COMPLETED_TASKS')}>
          <span
            className={clsx(classes.clear, !completedCount && classes.hidden)}
            onClick={handleDeleteMultiple}
          >
            {t('CLEAR_COMPLETED')}
          </span>
        </Tooltip>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    count: state.tasks.list.length,
    completedCount: state.tasks.list.filter((task) => task.isChecked).length,
  };
};
export default connect(mapStateToProps, {
  deleteMultipleTasks: deleteMultipleTasksAction.request,
})(React.memo(TodoAppFooter));
