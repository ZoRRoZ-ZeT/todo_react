import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toggler: {
    position: 'relative',
    border: 'none',
    marginLeft: '10px',
    marginTop: '9px',
    cursor: 'pointer',
    transform: 'rotate(90deg)',
    transition: theme.transitions.create(['background-color'], {
      duration: '1s',
    }),
    backgroundColor: theme.colors.backgroundColor,
    '&::before': {
      content: '"❯"',
      fontSize: '22px',
      padding: '5px',
      color: '#e6e6e6',
    },
  },
  checked: {
    color: '#737373!important',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
  },
}));

export default useStyles;
