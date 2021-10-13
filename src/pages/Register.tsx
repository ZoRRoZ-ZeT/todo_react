import React from 'react';
import { connect } from 'react-redux';

import { registerAction } from '@store/actions/user';
import Form from '@components/AuthForm';

import AuthPage from '../layout/AuthPage';

interface IProps {
  register: typeof registerAction.request;
}

const Register = ({ register }: IProps) => {
  return (
    <AuthPage title="Register">
      <Form title="Sign Up" action={register} path="/login" />
    </AuthPage>
  );
};

export default connect(null, {
  register: registerAction.request,
})(React.memo(Register));
