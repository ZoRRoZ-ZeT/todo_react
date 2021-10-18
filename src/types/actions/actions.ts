import {
  addTaskSync,
  addTaskAction,
  deleteMultipleTasksAction,
  deleteTaskAction,
  fetchTasksAction,
  reorderTaskAction,
  toggleTasksAction,
  updateTaskAction,
  updateTaskSync,
  deleteTaskSync,
  deleteMultipleTasksSync,
  toggleTasksSync,
} from '@store/actions/tasks';
import { loginAction, logoutAction, registerAction } from '@store/actions/user';

type GetAsyncActionType<
  Type extends {
    request: (payload: unknown) => unknown;
    success: (payload: unknown) => unknown;
    failed: (payload: unknown) => unknown;
  }
> = {
  request: ReturnType<Type['request']>;
  success: ReturnType<Type['success']>;
  failed: ReturnType<Type['failed']>;
};

type addTaskActionType = GetAsyncActionType<typeof addTaskAction>;
type updateTaskActionType = GetAsyncActionType<typeof updateTaskAction>;
type deleteTaskActionType = GetAsyncActionType<typeof deleteTaskAction>;
type deleteMultipleTasksActionType = GetAsyncActionType<
  typeof deleteMultipleTasksAction
>;
type toggleTasksActionType = GetAsyncActionType<typeof toggleTasksAction>;
type fetchTaskActionType = GetAsyncActionType<typeof fetchTasksAction>;
type reorderTaskActionType = GetAsyncActionType<typeof reorderTaskAction>;

type registerActionType = GetAsyncActionType<typeof registerAction>;
type loginActionType = GetAsyncActionType<typeof loginAction>;
type logoutActionType = GetAsyncActionType<typeof logoutAction>;

export type SuccessTodoType =
  | ReturnType<typeof addTaskSync>
  | ReturnType<typeof updateTaskSync>
  | ReturnType<typeof deleteTaskSync>
  | ReturnType<typeof deleteMultipleTasksSync>
  | ReturnType<typeof toggleTasksSync>
  | addTaskActionType['success']
  | updateTaskActionType['success']
  | deleteTaskActionType['success']
  | deleteMultipleTasksActionType['success']
  | toggleTasksActionType['success']
  | fetchTaskActionType['success']
  | reorderTaskActionType['success'];

export type RequestTodoType =
  | addTaskActionType['request']
  | updateTaskActionType['request']
  | deleteTaskActionType['request']
  | deleteMultipleTasksActionType['request']
  | toggleTasksActionType['request']
  | fetchTaskActionType['request']
  | reorderTaskActionType['request'];

export type FailedTodoType =
  | addTaskActionType['failed']
  | updateTaskActionType['failed']
  | deleteTaskActionType['failed']
  | deleteMultipleTasksActionType['failed']
  | toggleTasksActionType['failed']
  | fetchTaskActionType['failed']
  | reorderTaskActionType['failed'];

export type SuccessUserType =
  | registerActionType['success']
  | loginActionType['success']
  | logoutActionType['success'];

export type RequestUserType =
  | registerActionType['request']
  | loginActionType['request']
  | logoutActionType['request'];

export type FailedUserType =
  | registerActionType['failed']
  | loginActionType['failed']
  | logoutActionType['failed'];
