import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%',
    outline: 'none',
    padding: '19px 20px 18px 20px',
    fontSize: 'inherit',
    lineHeight: '1.4rem',
    transition: theme.transitions.create(['background-color', 'color'], {
      duration: '1s',
    }),
    backgroundColor: theme.colors.backgroundColor,
    color: theme.colors.color,
    border: 'none',
    boxShadow: 'inset 0 -2px 1px rgb(0 0 0 / 3%)',
    '&::placeholder': {
      fontStyle: 'italic',
      color: '#e6e6e6',
    },
  },
}));

export default useStyles;
