import { createTheme, makeStyles } from '@material-ui/core/styles';
const theme = createTheme();

const useStyles = makeStyles({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  modal: {
    marginTop: '100px',
    textAlign: 'center',
  },
});

export default useStyles;
