import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '500px',
    borderRadius: '10px',
    padding: '50px',
    background: 'linear-gradient(top, #7579ff, #b224ef)',
    boxShadow: '0 -10px 50px #7579ff, 0 10px 50px #b224ef',
  },
  logo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    color: '#333333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    backgroundColor: 'white',
  },
  landscape: {
    fontSize: '50px',
  },
  title: {
    fontSize: '24px',
    color: 'white',
    margin: '30px 0',
    fontWeight: 600,
  },
  form: {
    display: 'flex',
    width: '70%',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
  },
  loginButton: {
    fontWeight: 600,
    margin: '20px 10px 0 10px',
  },
  loginIcon: {
    marginRight: '10px',
  },
}));

export default useStyles;
