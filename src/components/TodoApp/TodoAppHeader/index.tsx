import { addTaskAction } from '@store/actions/tasks';
import { ApplicationState } from '@store/index';
import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import TodoHeaderInput from './TodoHeaderInput/index';
import Toggler from './Toggler';
import useStyles from './styles';

interface IProps {
  isTasksExist: boolean;
  isTasksCompleted: boolean;
  addTask: typeof addTaskAction.request;
}

const TodoAppHeader = ({ isTasksExist, isTasksCompleted, addTask }: IProps) => {
  const [inputValue, setValue] = useState('');
  const classes = useStyles();
  const handleEnterPressed = useCallback(() => {
    if (inputValue.trim() === '') {
      return;
    }
    addTask({ value: inputValue });
    setValue('');
  }, [addTask, inputValue]);

  const handleInputChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  return (
    <div className={classes.header}>
      {isTasksExist ? <Toggler isActive={isTasksCompleted} /> : null}
      <TodoHeaderInput
        value={inputValue}
        onInputChanged={handleInputChange}
        onEnterPressed={handleEnterPressed}
      />
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    isTasksExist: !!state.tasks.list.length,
    isTasksCompleted: !state.tasks.list.filter((task) => !task.isChecked)
      .length,
  };
};

export default connect(mapStateToProps, {
  addTask: addTaskAction.request,
})(React.memo(TodoAppHeader));
