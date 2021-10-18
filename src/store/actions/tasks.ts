import { createAsyncAction, IAction } from '@type/actions/creators';
import { Task } from '@type/todo.types';

type addTaskSyncType = IAction<'ADD_TODO_SYNC', { task: Task }>;
type updateTaskSyncType = IAction<'UPDATE_TODO_SYNC', { task: Task }>;
type deleteTaskSyncType = IAction<'DELETE_TODO_SYNC', { task: Task }>;
type deleteMultipleTasksSyncType = IAction<
  'DELETE_MULTIPLE_TODOS_SYNC',
  { tasks: Task[] }
>;
type toggleTasksSyncType = IAction<'TOGGLE_TODOS_SYNC', { fillValue: boolean }>;

export const addTaskSync = (task: Task): addTaskSyncType => ({
  type: 'ADD_TODO_SYNC',
  payload: {
    task,
  },
});

export const updateTaskSync = (
  task: Task
): IAction<'UPDATE_TODO_SYNC', { task: Task }> => ({
  type: 'UPDATE_TODO_SYNC',
  payload: {
    task,
  },
});

export const deleteTaskSync = (
  task: Task
): IAction<'DELETE_TODO_SYNC', { task: Task }> => ({
  type: 'DELETE_TODO_SYNC',
  payload: {
    task,
  },
});

export const deleteMultipleTasksSync = (
  tasks: Task[]
): IAction<'DELETE_MULTIPLE_TODOS_SYNC', { tasks: Task[] }> => ({
  type: 'DELETE_MULTIPLE_TODOS_SYNC',
  payload: {
    tasks,
  },
});

export const toggleTasksSync = (
  fillValue: boolean
): IAction<'TOGGLE_TODOS_SYNC', { fillValue: boolean }> => ({
  type: 'TOGGLE_TODOS_SYNC',
  payload: {
    fillValue,
  },
});

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
