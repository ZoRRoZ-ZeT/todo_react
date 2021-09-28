import { Action, TodoAction } from '@type/action';
import { Task, TodoState } from '@type/todo.types';
import { Reducer } from 'redux';

const initialState: TodoState = {
  list: [],
};

const reducer: Reducer<TodoState, Action> = (
  state: TodoState = initialState,
  action: Action
) => {
  switch (action.type) {
    case TodoAction.ADD_TASK: {
      return {
        list: [
          ...state.list,
          {
            ...action.payload.task,
          },
        ],
      };
    }
    case TodoAction.DELETE_TASK: {
      return {
        list: state.list.filter((task) => task.id !== action.payload.id),
      };
    }
    case TodoAction.DELETE_MULTIPLE: {
      return {
        list: state.list.filter(
          (task) =>
            !action.payload.tasks.some(
              (clearedTask: Task) => clearedTask.id === task.id
            )
        ),
      };
    }
    case TodoAction.TOGGLE_TASKS: {
      return {
        list: [
          ...state.list.map((task) => ({
            ...task,
            isChecked: action.payload.fillValue,
          })),
        ],
      };
    }
    case TodoAction.UPDATE_TASK: {
      return {
        list: [
          ...state.list.map((task) =>
            task.id === action.payload.task.id
              ? {
                  ...action.payload.task,
                }
              : task
          ),
        ],
      };
    }
    case TodoAction.SET_TASK_LIST: {
      return {
        list: [...action.payload.tasks],
      };
    }
    default:
      return state;
  }
};

export default reducer;
