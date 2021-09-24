import React from 'react';
import TodoApp from './TodoApp/index';

interface Props {}

class App extends React.Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <TodoApp />;
  }
}

export default App;
