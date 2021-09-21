import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleInputPress = this.handleInputPress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      currentValue: this.props.value,
    };
  }

  handleInputSubmit(event) {
    if (this.state.currentValue.trim() === '') {
      return;
    }

    this.props.onSubmit(this.state.currentValue);
  }

  handleInputChange(event) {
    this.setState({
      currentValue: event.target.value,
    });
  }

  handleInputPress(event) {
    if (event.key === 'Enter') {
      this.handleInputSubmit(event);
    }
  }

  render() {
    return (
      <input
        className="item__edit"
        onKeyDown={this.handleInputPress}
        onChange={this.handleInputChange}
        onBlur={this.handleInputSubmit}
        value={this.state.currentValue}
        autoFocus
      />
    );
  }
}

export default TodoInput;
