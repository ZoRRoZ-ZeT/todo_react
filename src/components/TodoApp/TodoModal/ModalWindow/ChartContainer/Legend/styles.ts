import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  legend: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: theme.colors.color,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  },
  mark: {
    width: '10px',
    height: '10px',
    marginRight: '10px',
    borderRadius: '50%',
    border: `1px solid ${theme.colors.color}61`,
  },
}));

export default useStyles;
