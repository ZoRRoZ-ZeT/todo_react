import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Priority } from '../../../../../types/index.types';

interface IProps {
  value: Priority;
  name: string;
  onItemClick: (value: string) => void;
}

const DropdownItem = ({ value, name, onItemClick }: IProps) => {
  const handleClick = useCallback(() => {
    onItemClick(value);
  }, [onItemClick, value]);

  return (
    <div className="content-list__item dropdown-item" onClick={handleClick}>
      <div
        className={clsx({
          'dropdown-item__marker': true,
          [`mark-${value}`]: true,
        })}
      ></div>
      <span className="dropdown-item__caption">{name}</span>
    </div>
  );
};

export default React.memo(DropdownItem);
