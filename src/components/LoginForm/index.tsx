import {
  loginAction,
  logoutAction,
  registerAction,
} from '@store/actions/tasks';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import LandscapeIcon from '@material-ui/icons/Landscape';
import FormInput from './FormInput/index';
import Fab from '@material-ui/core/Fab';
import LoginIcon from '@material-ui/icons/VpnKey';
import useStyles from './styles';

interface IProps {
  register: typeof registerAction.request;
  login: typeof loginAction.request;
  logout: typeof logoutAction.request;
}

const LoginForm = (props: IProps) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleRegister = () => {
    props.register({ email, password });
  };

  const handleLogin = () => {
    props.login({ email, password });
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.logo}>
            <span className={classes.icon}>
              <LandscapeIcon className={classes.landscape} />
            </span>
            <p className={classes.title}>LOG IN</p>
          </div>
          <div className={classes.form}>
            <FormInput
              value={email}
              onChange={handleEmailChange}
              title="Email"
              type="text"
            />
            <FormInput
              value={password}
              onChange={handlePasswordChange}
              title="Password"
              type="password"
            />
            <div>
              <Fab
                variant="extended"
                className={classes.loginButton}
                onClick={handleRegister}
              >
                <LoginIcon className={classes.loginIcon} />
                Sign Up
              </Fab>
              <Fab
                variant="extended"
                className={classes.loginButton}
                onClick={handleLogin}
              >
                <LoginIcon className={classes.loginIcon} />
                Sign In
              </Fab>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  register: registerAction.request,
  login: loginAction.request,
  logout: logoutAction.request,
})(React.memo(LoginForm));
