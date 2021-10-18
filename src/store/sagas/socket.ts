/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ActionPattern,
  call,
  fork,
  put,
  take,
  takeEvery,
} from 'redux-saga/effects';

import {
  addTaskAction,
  addTaskSync,
  deleteMultipleTasksAction,
  deleteMultipleTasksSync,
  deleteTaskAction,
  deleteTaskSync,
  toggleTasksAction,
  toggleTasksSync,
  updateTaskAction,
  updateTaskSync,
} from '@store/actions/tasks';

import { Task } from '@type/todo.types';
import { io, Socket } from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { SuccessTodoType } from '@type/actions/actions';
import { loginAction } from '@store/actions/user';

function connect() {
  const socket = io(process.env.SERVER_URL);
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function subscribe(socket: Socket) {
  return eventChannel((emit) => {
    socket.on('TODO_ADDED', (task: Task) => {
      emit(addTaskSync(task));
    });
    socket.on('TODO_UPDATED', (task: Task) => {
      emit(updateTaskSync(task));
    });
    socket.on('TODO_DELETED', (task: Task) => {
      emit(deleteTaskSync(task));
    });
    socket.on('TODOS_DELETED', (tasks: Task[]) => {
      emit(deleteMultipleTasksSync(tasks));
    });
    socket.on('TODOS_TOGGLED', (fillValue: boolean) => {
      emit(toggleTasksSync(fillValue));
    });
    return () => {};
  });
}

function* read(socket: Socket) {
  const channel: ActionPattern<SuccessTodoType> = yield call(subscribe, socket);
  while (true) {
    const action: SuccessTodoType = yield take(channel);
    yield put(action);
  }
}

function* write(socket: Socket) {
  while (true) {
    const actionResponse: SuccessTodoType = yield take([
      addTaskAction.types.SUCCESS,
      updateTaskAction.types.SUCCESS,
      deleteTaskAction.types.SUCCESS,
      deleteMultipleTasksAction.types.SUCCESS,
      toggleTasksAction.types.SUCCESS,
    ]);

    switch (actionResponse.type) {
      case addTaskAction.types.SUCCESS: {
        const { payload } = actionResponse;
        socket.emit('ADD_TODO', payload.task);
        break;
      }
      case updateTaskAction.types.SUCCESS: {
        const { payload } = actionResponse;
        socket.emit('UPDATE_TODO', payload.task);
        break;
      }
      case deleteTaskAction.types.SUCCESS: {
        const { payload } = actionResponse;
        socket.emit('DELETE_TODO', payload.task);
        break;
      }
      case deleteMultipleTasksAction.types.SUCCESS: {
        const { payload } = actionResponse;
        socket.emit('DELETE_TODOS', payload.tasks);
        break;
      }
      case toggleTasksAction.types.SUCCESS: {
        const { payload } = actionResponse;
        socket.emit('TOGGLE_TODOS', payload.fillValue);
        break;
      }
    }
  }
}

function* handleIO(socket: Socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

export default function* flow() {
  const socket: Socket = yield call(connect);
  const token = window.localStorage.getItem('token');
  if (token) {
    socket.emit('LOGIN', token);
  } else {
    const { payload }: ReturnType<typeof loginAction.success> = yield take(
      loginAction.types.SUCCESS
    );
    socket.emit('LOGIN', payload.response);
  }

  yield fork(handleIO, socket);
}
