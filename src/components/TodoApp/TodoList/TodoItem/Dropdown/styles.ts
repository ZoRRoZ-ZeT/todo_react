import { makeStyles } from '@material-ui/core/styles';

const color = (color: string) => ({
  border: `1px solid ${color}`,
  backgroundColor:
    color === '#000000' || color === '#ffffff' ? 'transparent' : color,
});

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    padding: '6px',
    cursor: 'pointer',
    border: '1px solid white',
    borderRadius: '50%',
  },
  list: {
    position: 'absolute',
    zIndex: 1,
    fontSize: '12px',
    marginTop: '10px',
    left: '50% !important',
    right: 'auto !important',
    textAlign: 'center',
    transform: 'translate(-50%, 0) !important',
    backgroundColor: theme.colors.dropdownColor,
    minWidth: '160px',
    borderRadius: '10px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    '&::before': {
      content: "''",
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, -10px)',
      width: '0',
      height: '0',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottomWidth: '10px',
      borderBottomStyle: 'solid',
      borderBottomColor: `${theme.colors.dropdownColor}`,
    },
  },
  item: {
    color: theme.colors.color,
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:first-child': {
      borderTopRightRadius: '10px',
      borderTopLeftRadius: '10px',
    },
    '&:last-child': {
      borderBottomRightRadius: '10px',
      borderBottomLeftRadius: '10px',
    },
    '&:hover': {
      backgroundColor: theme.colors.dropdownColorHover,
    },
    '&:last-child > $marker': {
      width: '9px',
      height: '9px',
      border: '1px solid black',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.colors.color,
    },
  },
  selected: {
    backgroundColor: theme.colors.dropdownColorSelected,
  },
  marker: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: theme.colors.color,
    transition: theme.transitions.create(['border'], {
      duration: '1s',
    }),
    marginRight: '15px',
  },
  high: {
    ...color('#ff110099'),
  },
  medium: {
    ...color('#ffe50080'),
  },
  low: {
    ...color('#89ff00d9'),
  },
  none: {
    ...color(theme.colors.color),
  },
}));

export default useStyles;
