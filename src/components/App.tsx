import { AppContext } from '../context/index';
import React, { useContext, useMemo } from 'react';
import TodoApp from './TodoApp/index';
import { ThemeProvider } from '@material-ui/core';
import { mapTheme } from '@constants/index';
import { ApplicationState } from '@store/index';
import { connect } from 'react-redux';
import AppRouter from '../routers/AppRouter';

const App = () => {
  const { theme } = useContext(AppContext);

  const memoizedTheme = useMemo(() => {
    return mapTheme[theme];
  }, [theme]);

  return (
    <ThemeProvider theme={memoizedTheme}>
      <AppRouter />
      {/* <TodoApp /> */}
    </ThemeProvider>
  );
};

export default React.memo(App);
