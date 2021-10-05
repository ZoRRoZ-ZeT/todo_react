import { Task } from './todo.types';

export enum TodoActionType {
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
  DELETE_MULTIPLE = 'DELETE_MULTIPLE',
  TOGGLE_TASKS = 'TOGGLE_TASKS',
  UPDATE_TASK = 'UPDATE_TASK',
  SET_TASK_LIST = 'SET_TASK_LIST',
  CHANGE_ORDER = 'CHANGE_ORDER',
}

export type IAction<TType extends TodoActionType, TPayload extends unknown> = {
  type: TType;
  payload?: TPayload;
};

export type AddTaskAction = IAction<TodoActionType.ADD_TASK, { task: Task }>;
export type DeleteTaskAction = IAction<
  TodoActionType.DELETE_TASK,
  { id: string }
>;
export type DeleteMultipleTasksAction = IAction<
  TodoActionType.DELETE_MULTIPLE,
  { tasks: Task[] }
>;
export type ToggleTasksAction = IAction<
  TodoActionType.TOGGLE_TASKS,
  { fillValue: boolean }
>;
export type UpdateTaskAction = IAction<
  TodoActionType.UPDATE_TASK,
  { task: Task }
>;
export type SetTaskListAction = IAction<
  TodoActionType.SET_TASK_LIST,
  { tasks: Task[] }
>;
export type ChangeOrderAction = IAction<
  TodoActionType.CHANGE_ORDER,
  {
    sourceId: number;
    destionationId: number;
  }
>;
export type TodoAction =
  | AddTaskAction
  | DeleteTaskAction
  | DeleteMultipleTasksAction
  | ToggleTasksAction
  | UpdateTaskAction
  | SetTaskListAction
  | ChangeOrderAction;
