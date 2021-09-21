import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleInputPress = this.handleInputPress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputSubmit() {
    if (this.props.value.trim() === '') {
      return;
    }

    this.props.onSubmit();
  }

  handleInputChange(event) {
    this.props.onChange(event.target.value);
  }

  handleInputPress(event) {
    if (event.key === 'Enter') {
      this.handleInputSubmit();
    }
  }

  render() {
    return (
      <input
        className="item__edit"
        onKeyDown={this.handleInputPress}
        onChange={this.handleInputChange}
        onBlur={this.handleInputSubmit}
        value={this.props.value}
        autoFocus
      />
    );
  }
}

export default TodoInput;
