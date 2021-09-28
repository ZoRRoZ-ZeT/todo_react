import {
  AddTaskAction,
  DeleteMultipleTasksAction,
  DeleteTaskAction,
  SetTaskListAction,
  TodoAction,
  ToggleTasksAction,
  UpdateTaskAction,
} from '@type/action';
import { Task } from '@type/todo.types';

export const addTask = (task: Task): AddTaskAction => ({
  type: TodoAction.ADD_TASK,
  payload: {
    task,
  },
});

export const deleteTask = (id: string): DeleteTaskAction => ({
  type: TodoAction.DELETE_TASK,
  payload: {
    id,
  },
});

export const deleteMultipleTasks = (
  tasks: Task[]
): DeleteMultipleTasksAction => ({
  type: TodoAction.DELETE_MULTIPLE,
  payload: {
    tasks,
  },
});

export const toggleTasks = (fillValue: boolean): ToggleTasksAction => ({
  type: TodoAction.TOGGLE_TASKS,
  payload: {
    fillValue,
  },
});

export const updateTask = (task: Task): UpdateTaskAction => ({
  type: TodoAction.UPDATE_TASK,
  payload: {
    task,
  },
});

export const setTaskList = (tasks: Task[]): SetTaskListAction => ({
  type: TodoAction.SET_TASK_LIST,
  payload: {
    tasks,
  },
});
