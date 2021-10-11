import React, { useContext, useMemo } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { AppContext } from '@context/index';
import { Theme } from '@type/context';
import useStyles from './styles';

const ThemeChanger = () => {
  const { theme, themeToggler } = useContext(AppContext);
  const classes = useStyles();
  const isDarkMode = useMemo(() => {
    return theme === Theme.DARK;
  }, [theme]);

  const handleChange = () => {
    themeToggler();
  };

  return (
    <div>
      <FormControlLabel
        className={classes.switcher}
        control={<Switch checked={isDarkMode} onChange={handleChange} />}
        label="Dark Mode"
        labelPlacement="start"
      />
    </div>
  );
};

export default React.memo(ThemeChanger);
