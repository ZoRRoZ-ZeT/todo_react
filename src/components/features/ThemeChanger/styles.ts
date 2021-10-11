import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  switcher: {
    transition: theme.transitions.create(['color'], {
      duration: '1s',
    }),
    color: theme.colors.color,
  },
}));

export default useStyles;
