import React from 'react';
import clsx from 'clsx';


interface IProps {
  filter: string,
  isActive: boolean,
  name: string,
  onFilterChange: (value:string) => void
}
interface IState {}


class FilterButton extends React.Component<IProps,IState> {
  constructor(props: IProps) {
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
