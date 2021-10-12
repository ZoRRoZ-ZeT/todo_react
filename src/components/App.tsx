import { AppContext } from '../context/index';
import React, { useContext, useMemo } from 'react';
import TodoApp from './TodoApp/index';
import { ThemeProvider } from '@material-ui/core';
import { mapThemeEnumToTheme } from '@constants/index';

const App = () => {
  const { theme } = useContext(AppContext);

  const memoizedTheme = useMemo(() => {
    return mapThemeEnumToTheme[theme];
  }, [theme]);

  return (
    <ThemeProvider theme={memoizedTheme}>
      <TodoApp />
    </ThemeProvider>
  );
};

export default App;
