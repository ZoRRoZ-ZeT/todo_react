import React, { useCallback } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { toggleTasksAction } from '@store/actions/tasks';
import Tooltip from '@components/Tooltip';

interface IProps {
  toggleTasks: typeof toggleTasksAction.request;
  isActive: boolean;
}

const Toggler = ({ toggleTasks, isActive }: IProps) => {
  const handleToggle = useCallback(() => {
    toggleTasks();
  }, [toggleTasks]);
  return (
    <Tooltip title="Toggle all tasks">
      <button
        type="button"
        className={clsx({
          'add-form__toggler': true,
          'form-toggler': true,
          'all-checked': isActive,
        })}
        onClick={handleToggle}
      ></button>
    </Tooltip>
  );
};

export default connect(null, { toggleTasks: toggleTasksAction.request })(
  React.memo(Toggler)
);
