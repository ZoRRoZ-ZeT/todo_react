import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Status } from '@type/index.types';
import Tooltip from '@components/Tooltip';

interface IProps {
  filter: Status;
  isActive: boolean;
  name: string;
  onFilterChange: (value: string) => void;
}

const FilterButton = ({ filter, isActive, name, onFilterChange }: IProps) => {
  const handleClick = useCallback(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);
  return (
    <Tooltip title={`Show ${name.toLocaleLowerCase()} tasks`}>
      <button
        className={clsx({
          filters__button: true,
          active: isActive,
        })}
        onClick={handleClick}
      >
        {name}
      </button>
    </Tooltip>
  );
};

export default React.memo(FilterButton);
