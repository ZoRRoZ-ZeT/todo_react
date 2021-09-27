import React from 'react';
import clsx from 'clsx';

interface IProps {
  onToggle: () => void;
  isActive: boolean;
}
interface IState {
  inputValue: string;
}

class Toggler extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onToggle();
  }

  render() {
    return (
      <button
        type="button"
        className={clsx({
          'add-form__toggler': true,
          'form-toggler': true,
          'all-checked': this.props.isActive,
        })}
        onClick={this.handleClick}
      ></button>
    );
  }
}

export default Toggler;
