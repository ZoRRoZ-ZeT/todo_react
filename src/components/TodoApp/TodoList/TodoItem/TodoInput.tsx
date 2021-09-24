import React, { ChangeEvent, KeyboardEvent } from 'react';

interface IProps {
  value: string,
  onChange: (value: string) => void,
  onSubmit: () => void
}
interface IState {}


class TodoInput extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    this.props.onChange(event.target.value);
  }

  handleInputPress(event: KeyboardEvent<HTMLInputElement>) {
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
