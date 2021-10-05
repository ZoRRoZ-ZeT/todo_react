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

const FilterButton = React.memo(function FilterButton(props: IProps) {
  return (
    <Tooltip title={`Show ${props.name.toLocaleLowerCase()} tasks`}>
      <button
        className={clsx({
          filters__button: true,
          active: props.isActive,
        })}
        onClick={() => props.onFilterChange(props.filter)}
      >
        {props.name}
      </button>
    </Tooltip>
  );
});

export default FilterButton;
