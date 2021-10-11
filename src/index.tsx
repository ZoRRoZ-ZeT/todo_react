import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store/index';
import { ContextProvider } from './context/index';

ReactDOM.render(
  <Provider store={store}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Provider>,
  document.getElementById('root')
);
