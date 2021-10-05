import { addTaskAction } from '@store/actions/tasks';
import { ApplicationState } from '@store/index';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoHeaderInput from './TodoHeaderInput/index';
import Toggler from './Toggler';
import './index.scss';

interface IProps {
  isTasksExist: boolean;
  isTasksCompleted: boolean;
  addTask: typeof addTaskAction.request;
}

const TodoAppHeader = React.memo(function TodoAppHeader(props: IProps) {
  const [inputValue, setValue] = useState<string>('');

  const handleEnterPressed = () => {
    if (inputValue.trim() === '') {
      return;
    }
    props.addTask({ value: inputValue });
    setValue('');
  };

  return (
    <div className="body__input add-form">
      {props.isTasksExist ? (
        <Toggler isActive={props.isTasksCompleted} />
      ) : null}
      <TodoHeaderInput
        value={inputValue}
        onInputChanged={(value: string) => setValue(value)}
        onEnterPressed={handleEnterPressed}
      />
    </div>
  );
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    isTasksExist: !!state.tasks.list.length,
    isTasksCompleted: !state.tasks.list.filter((task) => !task.isChecked)
      .length,
  };
};

export default connect(mapStateToProps, {
  addTask: addTaskAction.request,
})(TodoAppHeader);
