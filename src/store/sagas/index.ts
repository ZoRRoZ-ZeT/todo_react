import { all, call, put, takeEvery } from 'redux-saga/effects';
import { callApi } from '@apis/todos';
import { Method } from '@type/index.types';
import { Task } from '@type/todo.types';
import {
  addTaskAction,
  deleteMultipleTasksAction,
  deleteTaskAction,
  fetchTasksAction,
  reorderTaskAction,
  toggleTasksAction,
  updateTaskAction,
} from '@store/actions/tasks';
import store from '..';

function* watchTodoActions() {
  yield takeEvery(addTaskAction.types.REQUEST, addTaskAsync);
  yield takeEvery(updateTaskAction.types.REQUEST, updateTaskAsync);
  yield takeEvery(deleteTaskAction.types.REQUEST, deleteTaskAsync);
  yield takeEvery(
    deleteMultipleTasksAction.types.REQUEST,
    deleteMultipleTasksAsync
  );
  yield takeEvery(toggleTasksAction.types.REQUEST, toggleTasksAsync);
  yield takeEvery(fetchTasksAction.types.REQUEST, fetchTasksAsync);
  yield takeEvery(reorderTaskAction.types.REQUEST, reorderTaskAsync);
}

function* addTaskAsync(action: ReturnType<typeof addTaskAction.request>) {
  try {
    const task: Task = yield call(callApi, '', {
      method: Method.POST,
      body: { value: action.payload.value },
    });
    yield put(addTaskAction.success({ task }));
  } catch (error) {
    yield put(addTaskAction.failed({ error }));
  }
}

function* updateTaskAsync(action: ReturnType<typeof updateTaskAction.request>) {
  try {
    const task: Task = yield call(callApi, '', {
      method: Method.PUT,
      body: { ...action.payload },
    });
    yield put(updateTaskAction.success({ task }));
  } catch (error) {
    yield put(updateTaskAction.failed({ error }));
  }
}

function* deleteTaskAsync(action: ReturnType<typeof deleteTaskAction.request>) {
  try {
    const task: Task = yield call(callApi, `/${action.payload.id}`, {
      method: Method.DELETE,
    });
    yield put(deleteTaskAction.success({ task }));
  } catch (error) {
    yield put(deleteTaskAction.failed({ error }));
  }
}

function* deleteMultipleTasksAsync(
  action: ReturnType<typeof deleteMultipleTasksAction.request>
) {
  try {
    const tasks: Task[] = yield call(callApi, '', {
      method: Method.DELETE,
      body: action.payload,
    });
    yield put(deleteMultipleTasksAction.success({ tasks }));
  } catch (error) {
    yield put(deleteMultipleTasksAction.failed({ error }));
  }
}

function* toggleTasksAsync() {
  try {
    const fillValue: boolean = yield call(callApi, '/toggle', {
      method: Method.PUT,
    });
    yield put(toggleTasksAction.success({ fillValue }));
  } catch (error) {
    yield put(toggleTasksAction.failed({ error }));
  }
}

function* fetchTasksAsync() {
  try {
    const tasks: Task[] = yield call(callApi, '');
    yield put(fetchTasksAction.success({ tasks }));
  } catch (error) {
    yield put(fetchTasksAction.failed({ error }));
  }
}

function* reorderTaskAsync(
  action: ReturnType<typeof reorderTaskAction.request>
) {
  const tasks = store
    .getState()
    .tasks.list.slice()
    .sort((a, b) => a.sort - b.sort);

  const oldTask = tasks[action.payload.draggedIndex];
  try {
    const sourceIndex = action.payload.draggedIndex;
    const distIndex = action.payload.droppedIndex;

    const leftNeighbor =
      distIndex > sourceIndex
        ? tasks[distIndex].sort
        : distIndex && tasks[distIndex - 1].sort;

    const rightNeighbor =
      distIndex > sourceIndex
        ? (distIndex - tasks.length + 1 !== 0 && tasks[distIndex + 1].sort) ||
          tasks[distIndex].sort + 1
        : tasks[distIndex].sort;

    const newAverageSort = (leftNeighbor + rightNeighbor) / 2;
    const task: Task = yield call(callApi, '', {
      method: Method.PUT,
      body: {
        ...tasks[sourceIndex],
        sort: newAverageSort,
      },
    });
    yield put(updateTaskAction.success({ task }));
  } catch (error) {
    if (action.payload.onFailure) {
      action.payload.onFailure(oldTask);
    }
    yield put(reorderTaskAction.failed({ error }));
  }
}

export default function* rootSaga() {
  yield all([watchTodoActions()]);
}
