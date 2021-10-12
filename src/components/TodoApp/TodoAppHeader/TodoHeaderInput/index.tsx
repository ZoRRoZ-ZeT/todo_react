import { AppContext } from '@context/index';
import useTranslate from '@hooks/transate';
import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useContext,
} from 'react';
import useStyles from './styles';

interface IProps {
  value: string;
  onInputChanged: (value: string) => void;
  onEnterPressed: () => void;
}

const TodoHeaderInput = ({ value, onInputChanged, onEnterPressed }: IProps) => {
  const { state } = useContext(AppContext);
  const t = useTranslate(state.language);

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
