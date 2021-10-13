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
    textAlign: 'center',
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
    textTransform: 'uppercase',
    margin: '30px 0',
    fontWeight: 600,
  },
  error: {
    color: 'red',
  },
}));

export default useStyles;
