import {
  addTaskAction,
  deleteMultipleTasksAction,
  deleteTaskAction,
  fetchTasksAction,
  reorderTaskAction,
  toggleTasksAction,
  updateTaskAction,
} from '@store/actions/tasks';

export type TodoAction<TType extends string, TPayload extends unknown> = {
  type: TType;
  payload?: TPayload;
};

export const createAsyncAction = <
  TType extends string,
  RPayload,
  SPayload,
  FPayload
>(
  type: TType
) => {
  const ActionRequest = `${type}__REQUEST` as `${TType}__REQUEST`;
  const ActionSuccess = `${type}__SUCCESS` as `${TType}__SUCCESS`;
  const ActionFailed = `${type}__FAILED` as `${TType}__FAILED`;

  type RequestType = TodoAction<`${TType}__REQUEST`, RPayload>;
  type SuccessType = TodoAction<`${TType}__SUCCESS`, SPayload>;
  type FailedType = TodoAction<`${TType}__FAILED`, FPayload>;
  return {
    request: (payload?: RPayload): RequestType => ({
      type: `${type}__REQUEST`,
      payload,
    }),
    success: (payload?: SPayload): SuccessType => ({
      type: `${type}__SUCCESS`,
      payload,
    }),
    failed: (payload?: FPayload): FailedType => ({
      type: `${type}__FAILED`,
      payload,
    }),
    types: {
      REQUEST: ActionRequest,
      SUCCESS: ActionSuccess,
      FAILED: ActionFailed,
    },
  };
};
type GetActionType<
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

type addTaskActionType = GetActionType<typeof addTaskAction>;
type updateTaskActionType = GetActionType<typeof updateTaskAction>;
type deleteTaskActionType = GetActionType<typeof deleteTaskAction>;
type deleteMultipleTasksActionType = GetActionType<
  typeof deleteMultipleTasksAction
>;
type toggleTasksActionType = GetActionType<typeof toggleTasksAction>;
type fetchTaskActionType = GetActionType<typeof fetchTasksAction>;
type reotrderTaskActionType = GetActionType<typeof reorderTaskAction>;

export type SuccessType =
  | addTaskActionType['success']
  | updateTaskActionType['success']
  | deleteTaskActionType['success']
  | deleteMultipleTasksActionType['success']
  | toggleTasksActionType['success']
  | fetchTaskActionType['success']
  | reotrderTaskActionType['success'];

export type RequestType =
  | addTaskActionType['request']
  | updateTaskActionType['request']
  | deleteTaskActionType['request']
  | deleteMultipleTasksActionType['request']
  | toggleTasksActionType['request']
  | fetchTaskActionType['request']
  | reotrderTaskActionType['request'];

export type FailedType =
  | addTaskActionType['failed']
  | updateTaskActionType['failed']
  | deleteTaskActionType['failed']
  | deleteMultipleTasksActionType['failed']
  | toggleTasksActionType['failed']
  | fetchTaskActionType['failed']
  | reotrderTaskActionType['failed'];
