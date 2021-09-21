import React from 'react';
import TaskInput from './TaskInput/index.jsx';

class TaskHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleEnterPressed = this.handleEnterPressed.bind(this);

    this.state = {
      inputValue: '',
    };
  }

  handleInputChanged(value) {
    this.setState({
      inputValue: value,
    });
  }

  handleEnterPressed() {
    if (this.state.inputValue.trim() === '') {
      return;
    }
    this.props.onAddItem(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  }

  render() {
    return (
      <div className="body__input add-form">
        <TaskInput
          value={this.state.inputValue}
          onInputChanged={this.handleInputChanged}
          onEnterPressed={this.handleEnterPressed}
        />
      </div>
    );
  }
}

export default TaskHeader;
