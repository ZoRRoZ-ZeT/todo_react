import React from 'react';
import clsx from 'clsx';

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onItemClick(this.props.value);
  }

  render() {
    return (
      <div
        className="content-list__item dropdown-item"
        onClick={this.handleClick}
      >
        <div
          className={clsx({
            'dropdown-item__marker': true,
            [`mark-${this.props.value}`]: true,
          })}
        ></div>
        <span className="dropdown-item__caption">{this.props.name}</span>
      </div>
    );
  }
}

export default DropdownItem;
