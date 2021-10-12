import React, { useCallback, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import DropdownItem from './DropdownItem';
import { Priority } from '../../../../../types/index.types';
import useStyles from './styles';
import useTranslate from '@hooks/transate';

interface IProps {
  priority: string;
  onPriorityChanged: (value: string) => void;
}

const Dropdown = ({ priority, onPriorityChanged }: IProps) => {
  const t = useTranslate();

  const classes = useStyles();
  const [isShowList, setShowList] = useState(false);
  const dropdownRef: React.RefObject<HTMLDivElement> = useRef();

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        isShowList &&
        !dropdownRef.current.contains(event.target as HTMLElement)
      ) {
        setShowList(false);
      }
    },
    [isShowList]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const handleItemClick = useCallback(
    (value: Priority) => {
      onPriorityChanged(value);
      setShowList(false);
    },
    [onPriorityChanged]
  );

  const handleDropdownClick = useCallback(() => {
    setShowList(!isShowList);
  }, [isShowList]);

  return (
    <div className="dropdown-block" ref={dropdownRef}>
      <button
        className={clsx(
          classes.button,
          classes[priority as keyof typeof classes]
        )}
        onClick={handleDropdownClick}
      ></button>
      {isShowList ? (
        <div className={classes.list}>
          <DropdownItem
            value={Priority.HIGH}
            name={t('HIGH_PRIORITY')}
            isSelected={priority === Priority.HIGH}
            onItemClick={handleItemClick}
          />
          <DropdownItem
            value={Priority.MEDIUM}
            name={t('MEDIUM_PRIORITY')}
            isSelected={priority === Priority.MEDIUM}
            onItemClick={handleItemClick}
          />
          <DropdownItem
            value={Priority.LOW}
            name={t('LOW_PRIORITY')}
            isSelected={priority === Priority.LOW}
            onItemClick={handleItemClick}
          />
          <DropdownItem
            value={Priority.NONE}
            name={t('NONE_PRIORITY')}
            isSelected={priority === Priority.NONE}
            onItemClick={handleItemClick}
          />
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(Dropdown);
