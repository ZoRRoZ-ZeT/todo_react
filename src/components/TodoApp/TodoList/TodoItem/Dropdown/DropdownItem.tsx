import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Priority } from '@type/index.types';
import useStyles from './styles';

interface IProps {
  value: Priority;
  name: string;
  isSelected: boolean;
  onItemClick: (value: string) => void;
}

const DropdownItem = ({ value, name, isSelected, onItemClick }: IProps) => {
  const classes = useStyles();
  const handleClick = useCallback(() => {
    onItemClick(value);
  }, [onItemClick, value]);

  return (
    <div
      className={clsx(classes.item, isSelected && classes.selected)}
      onClick={handleClick}
    >
      <div className={clsx(classes.marker, classes[value])}></div>
      <span>{name}</span>
    </div>
  );
};

export default React.memo(DropdownItem);
