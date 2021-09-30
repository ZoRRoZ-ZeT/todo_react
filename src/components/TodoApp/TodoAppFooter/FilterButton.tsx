import React from 'react';
import clsx from 'clsx';
import { Status } from '@type/index.types';
import Tooltip from '@components/Tooltip';

interface IProps {
  filter: Status;
  isActive: boolean;
  name: string;
  onFilterChange: (value: string) => void;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

class FilterButton extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onFilterChange(this.props.filter);
  }

  render() {
    return (
      <Tooltip title={`Show ${this.props.name.toLocaleLowerCase()} tasks`}>
        <button
          className={clsx({
            filters__button: true,
            active: this.props.isActive,
          })}
          onClick={this.handleClick}
        >
          {this.props.name}
        </button>
      </Tooltip>
    );
  }
}

export default FilterButton;
