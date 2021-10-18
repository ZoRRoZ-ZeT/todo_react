import React, { ChangeEvent, useCallback, useState } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';

import { deleteTaskAction, updateTaskAction } from '@store/actions/tasks';
import { Task } from '@type/todo.types';
import { Priority } from '@type/index.types';

import TodoInput from './TodoInput';
import Dropdown from './Dropdown/index';
import useStyles from './styles';

interface IProps {
  task: Task;
  deleteTask: typeof deleteTaskAction.request;
  updateTask: typeof updateTaskAction.request;
}

const TodoItem = ({ task, deleteTask, updateTask }: IProps) => {
  const classes = useStyles();
  const [isClicked, setClicked] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [currentValue, setValue] = useState(task.value);

  const handleInputClick = useCallback(() => {
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
  }, [isClicked, isEditing]);

  const handleSubmit = useCallback(() => {
    setEditing(false);
    updateTask({
      ...task,
      value: currentValue,
    });
  }, [updateTask, task, currentValue]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      updateTask({
        ...task,
        isChecked: event.target.checked,
      });
    },
    [task, updateTask]
  );

  const handlePriorityChange = useCallback(
    (value: Priority) => {
      updateTask({
        ...task,
        priority: value,
      });
    },
    [task, updateTask]
  );

  const handleTodoInputChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  const handleDelete = useCallback(() => {
    deleteTask({ id: task.id });
  }, [deleteTask, task]);

  return (
    <div className={classes.item}>
      <input
        type="checkbox"
        className={classes.toggle}
        onChange={handleChange}
        checked={task.isChecked}
      />
      <label
        className={clsx(classes.label, isEditing && classes.clicked)}
        onClick={handleInputClick}
      >
        {task.value}
      </label>
      {isEditing ? (
        <TodoInput
          value={currentValue}
          onChange={handleTodoInputChange}
          onSubmit={handleSubmit}
        />
      ) : null}
      <div className={classes.dropdown}>
        <Dropdown
          priority={task.priority}
          onPriorityChanged={handlePriorityChange}
        />
      </div>
      <button className={classes.button} onClick={handleDelete}>
        ×
      </button>
    </div>
  );
};

export default connect(null, {
  deleteTask: deleteTaskAction.request,
  updateTask: updateTaskAction.request,
})(React.memo(TodoItem));
