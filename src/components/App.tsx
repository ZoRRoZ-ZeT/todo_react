/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import TodoApp from './TodoApp/index';

interface IProps {}
interface IState {}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return <TodoApp />;
  }
}

export default App;
