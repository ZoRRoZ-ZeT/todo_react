import {
  applyMiddleware,
  combineReducers,
  createStore,
} from '@reduxjs/toolkit';
import { TodoState } from '@type/todo.types';
import { UserState } from '@type/user';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import tasks from './reducers/tasks';
import user from './reducers/user';
import rootSaga from './sagas';

export interface ApplicationState {
  tasks: TodoState;
  user: UserState;
}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers<ApplicationState>({ tasks, user }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export const action = (type: any) => store.dispatch({ type });

sagaMiddleware.run(rootSaga);

export default store;
