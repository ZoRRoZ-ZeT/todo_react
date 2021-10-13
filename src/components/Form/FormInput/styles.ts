import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
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
}));

export default useStyles;
