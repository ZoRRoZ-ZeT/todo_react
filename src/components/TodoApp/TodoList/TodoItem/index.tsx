import React, { ChangeEvent, useCallback, useState } from 'react';
import clsx from 'clsx';
import TodoInput from './TodoInput';
import Dropdown from './Dropdown/index';
import { Task } from '@type/todo.types';
import { Priority } from '@type/index.types';
import { connect } from 'react-redux';
import { deleteTaskAction, updateTaskAction } from '@store/actions/tasks';
import './index.scss';

interface IProps {
  task: Task;
  deleteTask: typeof deleteTaskAction.request;
  updateTask: typeof updateTaskAction.request;
}

const TodoItem = React.memo(function TodoItem(props: IProps) {
  const [isClicked, setClicked] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [currentValue, setValue] = useState(props.task.value);

  const handleInputClick = () => {
    if (isClicked) {
      setClicked(false);
      setEditing(true);
      return;
    }
    setClicked(true);
    setTimeout(() => {
      if (!isEditing) {
        setClicked(false);
      }
    }, 200);
  };

  const handleSubmit = () => {
    setEditing(false);
    props.updateTask({
      ...props.task,
      value: currentValue,
    });
  };

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      props.updateTask({
        ...props.task,
        isChecked: event.target.checked,
      }),
    [props]
  );

  return (
    <div className="item">
      <input
        type="checkbox"
        className="item__toggle"
        onChange={handleChange}
        checked={props.task.isChecked}
      />
      <label
        className={clsx({
          item__label: true,
          clicked: isEditing,
        })}
        onClick={handleInputClick}
      >
        {props.task.value}
      </label>
      {isEditing ? (
        <TodoInput
          value={currentValue}
          onChange={(value: string) => setValue(value)}
          onSubmit={handleSubmit}
        />
      ) : null}
      <div className="item__dropdown">
        <Dropdown
          priority={props.task.priority}
          onPriorityChanged={(value: Priority) =>
            props.updateTask({
              ...props.task,
              priority: value,
            })
          }
        />
      </div>
      <button
        className="btn btn-empty destroy item__button"
        onClick={() => {
          props.deleteTask({ id: props.task.id });
        }}
      >
        ×
      </button>
    </div>
  );
});

export default connect(null, {
  deleteTask: deleteTaskAction.request,
  updateTask: updateTaskAction.request,
})(TodoItem);
