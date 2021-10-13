import React from 'react';
import { Route, Redirect, useLocation, RouteProps } from 'react-router';

interface IProps extends RouteProps {
  Component: React.FC;
  isAuth: boolean;
}

const PrivateRoute = ({ Component, isAuth, ...rest }: IProps) => {
  const location = useLocation();
  return (
    <Route {...rest}>
      {isAuth ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
};

export default React.memo(PrivateRoute);
