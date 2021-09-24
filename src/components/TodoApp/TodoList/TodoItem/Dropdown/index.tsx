import React from 'react';

import clsx from 'clsx';
import PRIORITIES from '../../../../../constants/priorities.js';
import DropdownItem from './DropdownItem';

interface IProps {
  priority: string,
  onPriorityChanged: (value: string) => void,
}
interface IState {
  isShowList: boolean
}

class Dropdown extends React.Component<IProps, IState> {
  dropdownRef: React.RefObject<HTMLDivElement>;

  constructor(props: IProps) {
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

  handleClickOutside(event: MouseEvent) {
    if (
      this.state.isShowList &&
      !this.dropdownRef.current.contains(event.target as HTMLElement)
    ) {
      this.setState((prevState) => ({
        isShowList: !prevState.isShowList,
      }));
    }
  }

  handleClick() {
    this.setState((prevState) => ({
      isShowList: !prevState.isShowList,
    }));
  }

  handleItemClick(value: string) {
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
