import { TodoAction, TodoActionType } from '@type/action';
import { Task, TodoState } from '@type/todo.types';
import { Reducer } from 'redux';

const initialState: TodoState = {
  list: [],
};

const reducer: Reducer<TodoState, TodoAction> = (
  state: TodoState = initialState,
  action: TodoAction
) => {
  switch (action.type) {
    case TodoActionType.ADD_TASK: {
      return {
        list: [
          ...state.list,
          {
            ...action.payload.task,
          },
        ],
      };
    }
    case TodoActionType.DELETE_TASK: {
      return {
        list: state.list.filter((task) => task.id !== action.payload.id),
      };
    }
    case TodoActionType.DELETE_MULTIPLE: {
      return {
        list: state.list.filter(
          (task) =>
            !action.payload.tasks.some(
              (clearedTask: Task) => clearedTask.id === task.id
            )
        ),
      };
    }
    case TodoActionType.TOGGLE_TASKS: {
      return {
        list: [
          ...state.list.map((task) => ({
            ...task,
            isChecked: action.payload.fillValue,
          })),
        ],
      };
    }
    case TodoActionType.UPDATE_TASK: {
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
    case TodoActionType.SET_TASK_LIST: {
      return {
        list: [...action.payload.tasks],
      };
    }
    case TodoActionType.CHANGE_ORDER: {
      const newOrderList = [...state.list];
      const [removed] = newOrderList.splice(action.payload.sourceId, 1);
      newOrderList.splice(action.payload.destionationId, 0, removed);
      return {
        list: [...newOrderList],
      };
    }
    default:
      return state;
  }
};

export default reducer;
