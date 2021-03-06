import React, { useCallback } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { toggleTasksAction } from '@store/actions/tasks';
import Tooltip from '@components/Tooltip';
import useStyles from './styles';
import useTranslate from '@hooks/transate';

interface IProps {
  toggleTasks: typeof toggleTasksAction.request;
  isActive: boolean;
}

const Toggler = ({ toggleTasks, isActive }: IProps) => {
  const t = useTranslate();

  const classes = useStyles();
  const handleToggle = useCallback(() => {
    toggleTasks();
  }, [toggleTasks]);
  return (
    <Tooltip title={t('TOGGLE_ALL_TASKS')}>
      <button
        type="button"
        className={clsx(classes.toggler, isActive && classes.checked)}
        onClick={handleToggle}
      ></button>
    </Tooltip>
  );
};

export default connect(null, { toggleTasks: toggleTasksAction.request })(
  React.memo(Toggler)
);
