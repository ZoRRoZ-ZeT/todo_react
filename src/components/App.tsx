import React, { useContext, useMemo } from 'react';

import { ThemeProvider } from '@material-ui/core';

import { mapTheme } from '@constants/index';
import { AppContext } from '@context/index';

import AppRouter from '../routers/AppRouter';

const App = () => {
  const { theme } = useContext(AppContext);

  const memoizedTheme = useMemo(() => {
    return mapTheme[theme];
  }, [theme]);

  return (
    <ThemeProvider theme={memoizedTheme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default React.memo(App);
