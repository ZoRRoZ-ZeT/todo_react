/* eslint-disable @typescript-eslint/no-empty-interface */
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import './index.scss';

interface IProps {
  title: string;
}

const Tooltip: React.FunctionComponent<IProps> = React.memo(function Tooltip(
  props
) {
  const [isHovered, setHovered] = useState(false);

  const closing = useRef(false);
  const closingTimer = useRef(null);

  const handleHover = () => {
    setHovered(true);
    closing.current = false;
  };
  useEffect(() => {
    return () => {
      clearTimeout(closingTimer.current);
    };
  }, []);

  const handleUnhover = () => {
    closing.current = true;
    closingTimer.current = setTimeout(() => {
      if (closing && closing.current) {
        setHovered(false);
        closing.current = false;
      }
    }, 100);
  };

  return (
    <div className="tooltip-wrapper" onMouseLeave={handleUnhover}>
      <div className="content" onMouseEnter={handleHover}>
        {props.children}
      </div>
      <div
        className={clsx({
          'tooltip-content': true,
          hovered: isHovered,
        })}
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
      >
        {props.title}
      </div>
    </div>
  );
});

export default Tooltip;
