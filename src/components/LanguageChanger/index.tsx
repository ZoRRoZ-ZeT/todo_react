import React, { useCallback, useContext } from 'react';

import Button from '@material-ui/core/Button';

import { AppContext } from '@context/index';
import { setLanguage } from '@context/actions';
import { Language } from '@type/context';

import useStyles from './styles';

const LanguageChanger = () => {
  const { dispatch } = useContext(AppContext);
  const classes = useStyles();

  const handleEnglish = useCallback(() => {
    return dispatch(setLanguage(Language.EN));
  }, [dispatch]);

  const handleRussian = useCallback(() => {
    return dispatch(setLanguage(Language.RU));
  }, [dispatch]);

  const handleUkrainian = useCallback(() => {
    return dispatch(setLanguage(Language.UK));
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={handleEnglish}
      >
        English
      </Button>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={handleRussian}
      >
        Русский
      </Button>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={handleUkrainian}
      >
        Украинский
      </Button>
    </div>
  );
};

export default React.memo(LanguageChanger);
