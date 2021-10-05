import React from 'react';
import clsx from 'clsx';
import { Priority } from '../../../../../types/index.types';

interface IProps {
  value: Priority;
  name: string;
  onItemClick: (value: string) => void;
}

const DropdownItem = React.memo(function DropdownItem(props: IProps) {
  const handleClick = () => {
    props.onItemClick(props.value);
  };

  return (
    <div className="content-list__item dropdown-item" onClick={handleClick}>
      <div
        className={clsx({
          'dropdown-item__marker': true,
          [`mark-${props.value}`]: true,
        })}
      ></div>
      <span className="dropdown-item__caption">{props.name}</span>
    </div>
  );
});

export default DropdownItem;
