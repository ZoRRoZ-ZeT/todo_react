import {
  applyMiddleware,
  combineReducers,
  createStore,
} from '@reduxjs/toolkit';
import { TodoState } from '@type/todo.types';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import tasks from './reducers/tasks';
import rootSaga from './sagas';

export interface ApplicationState {
  tasks: TodoState;
}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers<ApplicationState>({ tasks }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export const action = (type: any) => store.dispatch({ type });

sagaMiddleware.run(rootSaga);

export default store;
