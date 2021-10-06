import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react';
import './index.scss';

interface IProps {
  value: string;
  onInputChanged: (value: string) => void;
  onEnterPressed: () => void;
}

const TodoHeaderInput = ({ value, onInputChanged, onEnterPressed }: IProps) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      onInputChanged(event.target.value),
    [onInputChanged]
  );

  const handleEnterPress = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) =>
      event.key === 'Enter' && onEnterPressed(),
    [onEnterPressed]
  );
  return (
    <input
      className="add-form__input form-input"
      placeholder="What needs to be done?"
      value={value}
      onChange={handleChange}
      onKeyDown={handleEnterPress}
    />
  );
};

export default React.memo(TodoHeaderInput);
