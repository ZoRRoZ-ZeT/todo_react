import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    width: '70%',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
  },
  error: {
    borderBottom: '2px solid rgba(255,0,0,0.5) !important',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    transition: theme.transitions.create('border', {
      duration: '0.3s',
    }),
    borderBottom: '2px solid rgba(255,255,255,0.5)',
    marginBottom: '15px',
  },
  input: {
    fontSize: '16px',
    color: 'white',
    width: '100%',
    height: '45px',
    background: 'transparent',
    outline: 'none',
    border: 'none',
    paddingLeft: '38px',
    '&::placeholder': {
      fontStyle: 'italic',
      color: 'white',
    },
  },
  arrow: {
    position: 'absolute',
    color: 'rgba(255,255,255,0.5)',
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
