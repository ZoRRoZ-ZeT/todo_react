import React from 'react';
import AuthPage from '../layout/AuthPage';
import Form from '@components/Form';
import { connect } from 'react-redux';
import { registerAction } from '@store/actions/tasks';

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
