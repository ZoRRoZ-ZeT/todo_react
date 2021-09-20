/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import TaskHeader from './task-header/TaskHeader.jsx';
import TaskList from './task-list/TaskList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      text: '',
      currentId: 0,
    };

    this.handleInputSubmitted = this.handleInputSubmitted.bind(this);
  }

  handleInputSubmitted(value) {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, { value, id: prevState.currentId }],
      currentId: prevState.currentId + 1,
    }));
  }

  render() {
    return (
      <div className="shadow">
        <div className="body">
          <TaskHeader onSubmit={this.handleInputSubmitted} />
          <TaskList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
