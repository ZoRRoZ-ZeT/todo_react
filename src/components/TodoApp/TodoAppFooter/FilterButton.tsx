import React, { useCallback, useContext } from 'react';
import clsx from 'clsx';
import { Status } from '@type/index.types';
import Tooltip from '@components/Tooltip';
import useStyles from './styles';
import { AppContext } from '@context/index';
import useTranslate from '@hooks/transate';

interface IProps {
  filter: Status;
  isActive: boolean;
  name: string;
  onFilterChange: (value: string) => void;
}

const FilterButton = ({ filter, isActive, name, onFilterChange }: IProps) => {
  const { state } = useContext(AppContext);
  const t = useTranslate(state.language);

  const classes = useStyles();
  const handleClick = useCallback(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);
  return (
    <div className={classes.buttonBox}>
      <Tooltip title={t('SHOW_$_TASKS').replace('$', name.toLocaleLowerCase())}>
        <button
          className={clsx(classes.button, isActive && classes.active)}
          onClick={handleClick}
        >
          {name}
        </button>
      </Tooltip>
    </div>
  );
};

export default React.memo(FilterButton);
