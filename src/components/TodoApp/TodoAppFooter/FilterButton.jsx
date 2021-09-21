import React from 'react';
import clsx from 'clsx';

class FilterButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onFilterChange(this.props.filter);
  }

  render() {
    return (
      <button
        className={clsx({
          filters__button: true,
          active: this.props.isActive,
        })}
        onClick={this.handleClick}
      >
        {this.props.name}
      </button>
    );
  }
}

export default FilterButton;
