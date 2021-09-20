import React from 'react';

class TaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.onValueChanged = this.onValueChanged.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
  }

  onValueChanged(e) {
    this.props.handleInputChanged(e.target.value);
  }

  onEnterPress(e) {
    if (e.key === 'Enter') {
      this.props.handleEnterPress();
    }
  }

  render() {
    return (
      <input
        className="add-form__input form-input"
        placeholder="What needs to be done?"
        value={this.props.value}
        onChange={this.onValueChanged}
        onKeyDown={this.onEnterPress}
      />
    );
  }
}

export default TaskInput;
