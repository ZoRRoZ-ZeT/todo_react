/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import TaskInput from './task-input/TaskInput.jsx';

class TaskHeader extends React.Component {
  constructor(props) {
    super(props);

    this.onInputSubmitted = this.onInputSubmitted.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputSubmitted(value) {
    this.props.onSubmit(value);
  }

  onSubmitForm(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="body__form add-form" onSubmit={this.onSubmitForm}>
        <TaskInput onInputSubmitted={this.onInputSubmitted} />
      </form>
    );
  }
}

export default TaskHeader;
