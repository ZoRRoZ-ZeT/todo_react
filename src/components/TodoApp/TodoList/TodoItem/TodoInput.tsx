import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react';

import useStyles from './styles';

interface IProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const TodoInput = ({ value, onChange, onSubmit }: IProps) => {
  const classes = useStyles();
  const handleInputSubmit = useCallback(() => {
    if (value.trim() === '') {
      return;
    }

    onSubmit();
  }, [onSubmit, value]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  const handleEnterPress = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleInputSubmit();
      }
    },
    [handleInputSubmit]
  );

  return (
    <input
      className={classes.editInput}
      onKeyDown={handleEnterPress}
      onChange={handleChange}
      onBlur={handleInputSubmit}
      value={value}
      autoFocus
    />
  );
};

export default React.memo(TodoInput);
