import React from 'react';

import clsx from 'clsx';
// eslint-disable-next-line import/extensions
import PRIORITIES from '../../../../../constants/priorities.js';
import DropdownItem from './DropdownItem.jsx';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);

    this.dropdownRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = {
      isShowList: false,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (
      this.state.isShowList &&
      !this.dropdownRef.current.contains(event.target)
    ) {
      this.setState((prevState) => ({
        isShowList: !prevState.isShowList,
      }));
    }
  }

  handleClick(event) {
    this.setState((prevState) => ({
      isShowList: !prevState.isShowList,
    }));
  }

  handleItemClick(value) {
    this.props.onPriorityChanged(value);
    this.setState({
      isShowList: false,
    });
  }

  render() {
    return (
      <div className="dropdown-block" ref={this.dropdownRef}>
        <button
          className={clsx({
            'dropdown-block__button': true,
            [`mark-${this.props.priority}`]: true,
          })}
          onClick={this.handleClick}
        ></button>
        {this.state.isShowList ? (
          <div className="dropdown-block__content content-list">
            <DropdownItem
              value={PRIORITIES.HIGH}
              name="High priority"
              onItemClick={this.handleItemClick}
            />
            <DropdownItem
              value={PRIORITIES.MEDIUM}
              name="Medium priority"
              onItemClick={this.handleItemClick}
            />
            <DropdownItem
              value={PRIORITIES.LOW}
              name="Low priority"
              onItemClick={this.handleItemClick}
            />
            <DropdownItem
              value={PRIORITIES.NONE}
              name="None priority"
              onItemClick={this.handleItemClick}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
