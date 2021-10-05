import { createAsyncAction } from '@type/action';
import { Priority } from '@type/index.types';
import { Task } from '@type/todo.types';

export const addTaskAction = createAsyncAction<
  'ADD_TASK',
  { value: string },
  { task: Task },
  { error: string }
>('ADD_TASK');

export const updateTaskAction = createAsyncAction<
  'UPDATE_TASK',
  { [key in keyof Task]: Task[`${key}`] },
  { task: Task },
  { error: string }
>('UPDATE_TASK');

export const deleteTaskAction = createAsyncAction<
  'DELETE_TASK',
  { id: string },
  { task: Task },
  { error: string }
>('DELETE_TASK');

export const deleteMultipleTasksAction = createAsyncAction<
  'DELETE_MULTIPLE_TASKS',
  { filter: true },
  { tasks: Task[] },
  { error: string }
>('DELETE_MULTIPLE_TASKS');

export const toggleTasksAction = createAsyncAction<
  'TOGGLE_TASKS',
  null,
  { fillValue: boolean },
  { error: string }
>('TOGGLE_TASKS');

export const fetchTasksAction = createAsyncAction<
  'FETCH_TASKS',
  null,
  { tasks: Task[] },
  { error: string }
>('FETCH_TASKS');

export const reorderTaskAction = createAsyncAction<
  'REORDER_TASK',
  {
    draggedIndex: number;
    droppedIndex: number;
    onFailure?: (oldTask: Task) => void;
  },
  null,
  { error: string }
>('REORDER_TASK');
