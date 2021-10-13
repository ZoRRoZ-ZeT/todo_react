import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react';

import useTranslate from '@hooks/transate';

import useStyles from './styles';

interface IProps {
  value: string;
  onInputChanged: (value: string) => void;
  onEnterPressed: () => void;
}

const TodoHeaderInput = ({ value, onInputChanged, onEnterPressed }: IProps) => {
  const t = useTranslate();

  const classes = useStyles();
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
      className={classes.input}
      placeholder={t('WHAT_NEEDS_TO_BE_DONE')}
      value={value}
      onChange={handleChange}
      onKeyDown={handleEnterPress}
    />
  );
};

export default React.memo(TodoHeaderInput);
