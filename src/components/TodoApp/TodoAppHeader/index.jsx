import React from 'react';
import TodoHeaderInput from './TodoHeaderInput/index.jsx';
import Toggler from './Toggler.jsx';

class TodoAppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleEnterPressed = this.handleEnterPressed.bind(this);

    this.handleToggle = this.handleToggle.bind(this);

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

  handleToggle() {
    this.props.onToggleItems();
  }

  render() {
    return (
      <div className="body__input add-form">
        {this.props.tasks.length > 0 ? (
          <Toggler
            onToggle={this.handleToggle}
            isActive={this.props.tasks.reduce(
              (result, task) => result && task.isChecked,
              true
            )}
          />
        ) : null}
        <TodoHeaderInput
          value={this.state.inputValue}
          onInputChanged={this.handleInputChanged}
          onEnterPressed={this.handleEnterPressed}
        />
      </div>
    );
  }
}

export default TodoAppHeader;
