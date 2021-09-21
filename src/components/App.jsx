import React from 'react';
import TodoList from './TodoList/TodoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TodoList />;
  }
}

export default App;
