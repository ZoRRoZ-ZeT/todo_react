/* eslint-disable @typescript-eslint/no-empty-interface */
import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import './index.scss';

interface IProps {
  title: string;
}

const Tooltip = ({ title, children }: React.PropsWithChildren<IProps>) => {
  const [isHovered, setHovered] = useState(false);

  const isClosing = useRef(false);
  const closingTimer = useRef(null);

  const handleHover = useCallback(() => {
    setHovered(true);
    isClosing.current = false;
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(closingTimer.current);
    };
  }, []);

  const handleUnhover = () => {
    isClosing.current = true;
    closingTimer.current = setTimeout(() => {
      if (isClosing.current) {
        setHovered(false);
        isClosing.current = false;
      }
    }, 100);
  };

  return (
    <div className="tooltip-wrapper" onMouseLeave={handleUnhover}>
      <div className="content" onMouseEnter={handleHover}>
        {children}
      </div>
      <div
        className={clsx({
          'tooltip-content': true,
          hovered: isHovered,
        })}
        onMouseEnter={isHovered ? handleHover : null}
        onMouseLeave={handleUnhover}
      >
        {title}
      </div>
    </div>
  );
};

export default React.memo(Tooltip);
