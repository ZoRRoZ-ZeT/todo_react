import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';

import { toggleTasksAction } from '@store/actions/tasks';
import useTranslate from '@hooks/transate';
import Tooltip from '@components/Tooltip';

import useStyles from './styles';

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
