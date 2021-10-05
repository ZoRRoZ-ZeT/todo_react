import React, { useCallback, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import DropdownItem from './DropdownItem';
import { Priority } from '../../../../../types/index.types';
import './index.scss';

interface IProps {
  priority: string;
  onPriorityChanged: (value: string) => void;
}

const Dropdown = React.memo(function Dropdown(props: IProps) {
  const [isShowList, setShowList] = useState(false);
  const dropdownRef: React.RefObject<HTMLDivElement> = useRef();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isShowList &&
        !dropdownRef.current.contains(event.target as HTMLElement)
      ) {
        setShowList(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const handleItemClick = useCallback(
    (value: Priority) => {
      props.onPriorityChanged(value);
      setShowList(false);
    },
    [props]
  );

  return (
    <div className="dropdown-block" ref={dropdownRef}>
      <button
        className={clsx({
          'dropdown-block__button': true,
          [`mark-${props.priority}`]: true,
        })}
        onClick={() => setShowList(!isShowList)}
      ></button>
      {isShowList ? (
        <div className="dropdown-block__content content-list">
          <DropdownItem
            value={Priority.HIGH}
            name="High priority"
            onItemClick={handleItemClick}
          />
          <DropdownItem
            value={Priority.MEDIUM}
            name="Medium priority"
            onItemClick={handleItemClick}
          />
          <DropdownItem
            value={Priority.LOW}
            name="Low priority"
            onItemClick={handleItemClick}
          />
          <DropdownItem
            value={Priority.NONE}
            name="None priority"
            onItemClick={handleItemClick}
          />
        </div>
      ) : null}
    </div>
  );
});

export default Dropdown;
