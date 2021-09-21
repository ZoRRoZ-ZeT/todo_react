import React from 'react';
import clsx from 'clsx';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
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
