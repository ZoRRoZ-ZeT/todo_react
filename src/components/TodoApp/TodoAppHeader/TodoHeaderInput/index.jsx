import React from 'react';

class TodoHeaderInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleValueChange(e) {
    this.props.onInputChanged(e.target.value);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.onEnterPressed();
    }
  }

  render() {
    return (
      <input
        className="add-form__input form-input"
        placeholder="What needs to be done?"
        value={this.props.value}
        onChange={this.handleValueChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default TodoHeaderInput;
