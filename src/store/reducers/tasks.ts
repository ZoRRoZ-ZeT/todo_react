import {
  addTaskAction,
  deleteMultipleTasksAction,
  deleteTaskAction,
  fetchTasksAction,
  reorderTaskAction,
  toggleTasksAction,
  updateTaskAction,
} from '@store/actions/tasks';
import { FailedTodoType, SuccessTodoType } from '@type/action';
import { TodoState } from '@type/todo.types';
import { Reducer } from 'redux';

const initialState: TodoState = {
  list: [],
};

type ActionTodoType = SuccessTodoType | FailedTodoType;

const reducer: Reducer<TodoState, ActionTodoType> = (
  state: TodoState = initialState,
  action: ActionTodoType
) => {
  switch (action.type) {
    case addTaskAction.types.SUCCESS: {
      return {
        list: [
          ...state.list,
          {
            ...action.payload.task,
          },
        ],
      };
    }
    case updateTaskAction.types.SUCCESS: {
      return {
        list: [
          ...state.list.map((task) =>
            task.id === action.payload.task.id ? action.payload.task : task
          ),
        ],
      };
    }
    case deleteTaskAction.types.SUCCESS: {
      return {
        list: state.list.filter((task) => task.id !== action.payload.task.id),
      };
    }
    case deleteMultipleTasksAction.types.SUCCESS: {
      return {
        list: state.list.filter(
          (task) =>
            !action.payload.tasks.some(
              (clearedTask) => clearedTask.id === task.id
            )
        ),
      };
    }
    case toggleTasksAction.types.SUCCESS: {
      return {
        list: [
          ...state.list.map((task) => ({
            ...task,
            isChecked: action.payload.fillValue,
          })),
        ],
      };
    }
    case fetchTasksAction.types.SUCCESS: {
      return {
        list: [...action.payload.tasks],
      };
    }

    case addTaskAction.types.FAILED: {
      console.log(`ERROR:TASK_ADD -> ${action.payload.error}`);
      return state;
    }
    case updateTaskAction.types.FAILED: {
      console.log(`ERROR:UPDATE_ADD -> ${action.payload.error}`);
      return state;
    }
    case deleteTaskAction.types.FAILED: {
      console.log(`ERROR:UPDATE_ADD -> ${action.payload.error}`);
      return state;
    }
    case deleteMultipleTasksAction.types.FAILED: {
      console.log(`ERROR:UPDATE_ADD -> ${action.payload.error}`);
      return state;
    }
    case toggleTasksAction.types.FAILED: {
      console.log(`ERROR:UPDATE_ADD -> ${action.payload.error}`);
      return state;
    }
    case fetchTasksAction.types.FAILED: {
      console.log(`ERROR:UPDATE_ADD -> ${action.payload.error}`);
      return state;
    }
    case reorderTaskAction.types.FAILED: {
      console.log(`ERROR:UPDATE_ADD -> ${action.payload.error}`);
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
