import React from 'react';
import LandscapeIcon from '@material-ui/icons/Landscape';
import useStyles from './styles';

interface IProps {
  title: string;
  error?: string;
}

const AuthPage = ({
  title,
  error,
  children,
}: React.PropsWithChildren<IProps>) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <span className={classes.icon}>
            <LandscapeIcon className={classes.landscape} />
          </span>
          <p className={classes.title}>{title}</p>
        </div>
        {error ? <p className={classes.error}>{error}</p> : null}
        {children}
      </div>
    </div>
  );
};

export default React.memo(AuthPage);
