import React, { useContext } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { AppContext } from '@context/index';
import { Theme } from '@type/context';
import useStyles from './styles';
import useTranslate from '@hooks/transate';

const ThemeChanger = () => {
  const { theme, themeToggler } = useContext(AppContext);
  const classes = useStyles();
  const t = useTranslate();

  return (
    <div>
      <FormControlLabel
        className={classes.switcher}
        control={
          <Switch checked={theme === Theme.DARK} onChange={themeToggler} />
        }
        label={t('DARK_MODE')}
        labelPlacement="start"
      />
    </div>
  );
};

export default React.memo(ThemeChanger);
