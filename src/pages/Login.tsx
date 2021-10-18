import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginAction } from '@store/actions/user';
import { ApplicationState } from '@store/index';
import Form from '@components/AuthForm';

import AuthPage from '../layout/AuthPage';

interface IProps {
  error: string;
  login: typeof loginAction.request;
}

const linkStyle = {
  display: 'block',
  marginTop: '25px',
  color: 'white',
  fontSize: '16px',
};

const Login = ({ error, login }: IProps) => {
  return (
    <AuthPage title="Login" error={error}>
      <Form title="Sign In" action={login} path="/todolist/all" />
      <Link to="/register" style={linkStyle}>
        Do not have account?
      </Link>
    </AuthPage>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  error: state.user.error,
});
export default connect(mapStateToProps, {
  login: loginAction.request,
})(React.memo(Login));
