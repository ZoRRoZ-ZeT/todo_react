import React from 'react';

import clsx from 'clsx';
import DropdownItem from './DropdownItem';
import { Priority } from '../../../../../types/index.types';

interface IProps {
  priority: string;
  onPriorityChanged: (value: string) => void;
}
interface IState {
  isShowList: boolean;
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

  handleItemClick(value: Priority) {
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
              value={Priority.HIGH}
              name="High priority"
              onItemClick={this.handleItemClick}
            />
            <DropdownItem
              value={Priority.MEDIUM}
              name="Medium priority"
              onItemClick={this.handleItemClick}
            />
            <DropdownItem
              value={Priority.LOW}
              name="Low priority"
              onItemClick={this.handleItemClick}
            />
            <DropdownItem
              value={Priority.NONE}
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
