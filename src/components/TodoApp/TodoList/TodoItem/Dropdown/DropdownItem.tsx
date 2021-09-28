import React from 'react';
import clsx from 'clsx';
import { Priority } from '../../../../../types/index.types';

interface IProps {
  value: Priority;
  name: string;
  onItemClick: (value: string) => void;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

class DropdownItem extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
