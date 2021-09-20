import React from 'react';
import TaskInput from './TaskInput/TaskInput.jsx';

class TaskHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  handleInputChanged(value) {
    this.props.handleValueChange(value);
  }

  handleEnterPress() {
    this.props.handleSubmit();
  }

  render() {
    return (
      <div className="body__input add-form">
        <TaskInput
          value={this.props.value}
          handleInputChanged={this.handleInputChanged}
          handleEnterPress={this.handleEnterPress}
        />
      </div>
    );
  }
}

export default TaskHeader;
