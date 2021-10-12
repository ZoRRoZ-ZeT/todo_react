import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    position: 'relative',
    padding: '9px 15px 11px 15px',
    height: '20px',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.backgroundColor,
    transition: theme.transitions.create(['border-color', 'background-color'], {
      duration: '1s',
    }),
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: theme.colors.borderColor,
    '&::before': {
      content: '',
      position: 'absolute',
      right: 0,
      bottom: 0,
      left: 0,
      height: '50px',
      overflow: 'hidden',
      boxShadow: `0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6,
        0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6,
        0 17px 2px -6px rgb(0 0 0 / 20%)`,
    },
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      height: 'fit-content',
      alignItems: 'stretch',
    },
  },
  count: {
    fontSize: '14px',
    color: 'grey',
    [theme.breakpoints.only('xs')]: {
      position: 'absolute',
      bottom: '10px',
    },
  },
  clearBox: {
    position: 'relative',
    [theme.breakpoints.only('xs')]: {
      position: 'absolute',
      right: '20px',
      bottom: '10px',
    },
  },
  clear: {
    fontSize: '14px',
    position: 'relative',
    color: 'grey',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  hidden: {
    visibility: 'hidden',
  },
  filters: {
    margin: '10px 0',
    flex: 1,
    textAlign: 'center',
    position: 'relative',
    [theme.breakpoints.only('xs')]: {
      margin: '5px 0 30px 0',
      display: 'flex',
    },
  },
  buttonBox: {
    display: 'contents',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  button: {
    transition: theme.transitions.create(['background-color'], {
      duration: '1s',
    }),
    backgroundColor: theme.colors.backgroundColor,
    color: 'grey',
    padding: '3px 7px',
    fontSize: '14px',
    cursor: 'pointer',
    margin: '0px 3px',
    border: '1px solid transparent',
    borderRadius: '3px',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  active: {
    borderColor: 'rgba(175, 47, 47, 0.2)',
  },
}));

export default useStyles;
