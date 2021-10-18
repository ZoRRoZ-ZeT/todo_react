import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { ApplicationState } from '@store/index';

import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import TodosRouter from './todos';

interface IProps {
  isAuth: boolean;
}

const AppRouter = ({ isAuth }: IProps) => {
  return (
    <Router>
      <Switch>
        <Route exact path={['/login', '/']}>
          {isAuth ? <Redirect to="/todolist/all" /> : <Login />}
        </Route>
        <Route exact path="/register">
          {isAuth ? <Redirect to="/todolist/all" /> : <Register />}
        </Route>
        <PrivateRoute
          path="/todolist/:filter"
          isAuth={isAuth}
          Component={TodosRouter}
        />
      </Switch>
    </Router>
  );
};
const mapStateToProps = (state: ApplicationState) => ({
  isAuth: state.user.isAuth,
});
export default connect(mapStateToProps)(React.memo(AppRouter));
