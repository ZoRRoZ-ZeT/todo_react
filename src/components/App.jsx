import React from 'react';
import TodoList from './TodoList/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TodoList />;
  }
}

export default App;
