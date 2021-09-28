import { combineReducers, createStore } from '@reduxjs/toolkit';
import { TodoState } from '@type/todo.types';
import { devToolsEnhancer } from 'redux-devtools-extension';
import tasks from './reducers/tasks';

export interface ApplicationState {
  tasks: TodoState;
}

export default createStore(
  combineReducers<ApplicationState>({ tasks }),
  devToolsEnhancer({})
);
