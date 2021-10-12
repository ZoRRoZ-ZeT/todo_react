import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    display: 'inline-block',
    width: 'inherit',
    position: 'relative',
  },
  content: {
    position: 'absolute',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '0.6875rem',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    overflowWrap: 'break-word',
    borderRadius: '4px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '4px 8px',
    margin: '2px',
    color: 'white',
    background: 'rgba(97, 97, 97, 0.92)',
    maxWidth: '300px',
    zIndex: 3,
    bottom: '-25px',
    pointerEvents: 'none',
    opacity: '0',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&::before': {
      content: '""',
      left: '50%',
      border: 'solid transparent',
      height: '0',
      width: '0',
      position: 'absolute',
      pointerEvents: 'none',
      borderWidth: '6px',
      marginLeft: '-6px',
      bottom: '100%',
      borderBottomColor: 'rgba(97, 97, 97, 0.92)',
    },
  },
  hovered: {
    opacity: 1,
    bottom: '-30px',
    transformOrigin: 'center',
    pointerEvents: 'all',
  },
});

export default useStyles;
