import { Task } from './todo.types';

export enum TodoAction {
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
  DELETE_MULTIPLE = 'DELETE_MULTIPLE',
  TOGGLE_TASKS = 'TOGGLE_TASKS',
  UPDATE_TASK = 'UPDATE_TASK',
  SET_TASK_LIST = 'SET_TASK_LIST',
}

interface IAction<Type> {
  type: Type;
}

export interface AddTaskAction extends IAction<TodoAction.ADD_TASK> {
  payload: {
    task: Task;
  };
}
export interface DeleteTaskAction extends IAction<TodoAction.DELETE_TASK> {
  payload: {
    id: string;
  };
}
export interface DeleteMultipleTasksAction
  extends IAction<TodoAction.DELETE_MULTIPLE> {
  payload: {
    tasks: Task[];
  };
}
export interface ToggleTasksAction extends IAction<TodoAction.TOGGLE_TASKS> {
  payload: {
    fillValue: boolean;
  };
}
export interface UpdateTaskAction extends IAction<TodoAction.UPDATE_TASK> {
  payload: {
    task: Task;
  };
}
export interface SetTaskListAction extends IAction<TodoAction.SET_TASK_LIST> {
  payload: {
    tasks: Task[];
  };
}

export type Action =
  | AddTaskAction
  | DeleteTaskAction
  | DeleteMultipleTasksAction
  | ToggleTasksAction
  | UpdateTaskAction
  | SetTaskListAction;
