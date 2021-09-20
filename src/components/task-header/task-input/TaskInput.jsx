/* eslint-disable react/prop-types */
import React from 'react';

class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.onTextChanged = this.onTextChanged.bind(this);
    this.onTextSubmitted = this.onTextSubmitted.bind(this);
    this.state = {
      text: '',
    };
  }

  onTextChanged(e) {
    this.setState({
      text: e.target.value,
    });
  }

  onTextSubmitted(e) {
    if (e.key === 'Enter') {
      if (e.target.value.trim() === '') {
        return;
      }
      this.props.onInputSubmitted(this.state.text);
      this.setState({
        text: '',
      });
    }
  }

  render() {
    return (
      <input
        className="add-form__input form-input"
        placeholder="What needs to be done?"
        value={this.state.text}
        onChange={this.onTextChanged}
        onKeyDown={this.onTextSubmitted}
      />
    );
  }
}

export default TaskInput;
