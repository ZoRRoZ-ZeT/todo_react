import React from 'react';
import Fab from '@material-ui/core/Fab';
import LoginIcon from '@material-ui/icons/VpnKey';
import { Form, Field } from 'react-final-form';
import useStyles from './styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { loginAction, registerAction } from '@store/actions/tasks';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

interface IProps {
  action: typeof loginAction.request | typeof registerAction.request;
  title: string;
  path: string;
}

const LoginForm = ({ action, title, path }: IProps) => {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (values: { email: string; password: string }) => {
    action({ ...values });
    history.push(path);
  };

  const required = (value: string) => (value ? undefined : 'Required');
  const minLength = (min: number) => (value: string) =>
    value.length > min ? undefined : `Field must be longer than ${min}`;
  const maxLength = (max: number) => (value: string) =>
    value.length < max ? undefined : `Field must be smaller than ${max}`;
  const isEmail = (value: string) => {
    const regexp = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return regexp.test(value) ? undefined : 'Incorrect email!';
  };
  const composeValidators =
    (...validators: Array<(value: string) => string | undefined>) =>
    (value: string) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );
  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email" validate={composeValidators(required, isEmail)}>
              {({ input, meta }) => (
                <div
                  className={clsx({
                    [classes.error]: meta.submitFailed && meta.error,
                    [classes.container]: true,
                  })}
                >
                  <ArrowForwardIosIcon className={classes.arrow} />
                  <input
                    {...input}
                    className={classes.input}
                    type="text"
                    placeholder="Email"
                  />
                </div>
              )}
            </Field>
            <Field
              name="password"
              validate={composeValidators(
                required,
                minLength(3),
                maxLength(32)
              )}
            >
              {({ input, meta }) => (
                <div
                  className={clsx({
                    [classes.error]: meta.submitFailed && meta.error,
                    [classes.container]: true,
                  })}
                >
                  <ArrowForwardIosIcon className={classes.arrow} />
                  <input
                    {...input}
                    className={classes.input}
                    type="password"
                    placeholder="Password"
                  />
                </div>
              )}
            </Field>
            <Fab
              type="submit"
              variant="extended"
              className={classes.loginButton}
            >
              <LoginIcon className={classes.loginIcon} />
              {title}
            </Fab>
          </form>
        )}
      />
    </div>
  );
};

export default React.memo(LoginForm);
