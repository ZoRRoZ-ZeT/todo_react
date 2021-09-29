import {
  AddTaskAction,
  DeleteMultipleTasksAction,
  DeleteTaskAction,
  SetTaskListAction,
  TodoActionType,
  ToggleTasksAction,
  UpdateTaskAction,
} from '@type/action';
import { Task } from '@type/todo.types';

export const addTask = (task: Task): AddTaskAction => ({
  type: TodoActionType.ADD_TASK,
  payload: {
    task,
  },
});

export const deleteTask = (id: string): DeleteTaskAction => ({
  type: TodoActionType.DELETE_TASK,
  payload: {
    id,
  },
});

export const deleteMultipleTasks = (
  tasks: Task[]
): DeleteMultipleTasksAction => ({
  type: TodoActionType.DELETE_MULTIPLE,
  payload: {
    tasks,
  },
});

export const toggleTasks = (fillValue: boolean): ToggleTasksAction => ({
  type: TodoActionType.TOGGLE_TASKS,
  payload: {
    fillValue,
  },
});

export const updateTask = (task: Task): UpdateTaskAction => ({
  type: TodoActionType.UPDATE_TASK,
  payload: {
    task,
  },
});

export const setTaskList = (tasks: Task[]): SetTaskListAction => ({
  type: TodoActionType.SET_TASK_LIST,
  payload: {
    tasks,
  },
});
