import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      transition: theme.transitions.create(['background-color'], {
        duration: '1s',
      }),
      backgroundColor: theme.colors.bodyColor,
    },
  },
  shadow: {
    transition: theme.transitions.create(['box-shadow'], {
      duration: '1s',
    }),
    boxShadow: theme.colors.shadow,
  },
  body: {
    transition: theme.transitions.create(['background-color'], {
      duration: '1s',
    }),
    backgroundColor: theme.colors.backgroundColor,
  },
  featureContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}));

export default useStyles;
