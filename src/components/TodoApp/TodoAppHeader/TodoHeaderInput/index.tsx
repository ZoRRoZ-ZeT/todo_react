import React, { ChangeEvent, KeyboardEvent } from 'react';

interface IProps {
  value: string;
  onInputChanged: (value: string) => void;
  onEnterPressed: () => void;
}
interface IState {
  inputValue: string;
}

class TodoHeaderInput extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleValueChange(event: ChangeEvent<HTMLInputElement>) {
    this.props.onInputChanged(event.target.value);
  }

  handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
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
