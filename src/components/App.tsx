import { AppContext } from '../context/index';
import React, { useContext, useMemo } from 'react';
import TodoApp from './TodoApp/index';
import { ThemeProvider } from '@material-ui/core';
import { mapThemes } from '@constants/index';
import { ApplicationState } from '@store/index';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

interface IProps {
  isAuth: boolean;
}

const App = (props: IProps) => {
  const { theme } = useContext(AppContext);

  const memoizedTheme = useMemo(() => {
    return mapThemes[theme];
  }, [theme]);

  return (
    <ThemeProvider theme={memoizedTheme}>
      {props.isAuth ? <TodoApp /> : <LoginForm />}
    </ThemeProvider>
  );
};
const mapStateToProps = (state: ApplicationState) => ({
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps)(React.memo(App));
