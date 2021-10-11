import { makeStyles } from '@material-ui/core/styles';
export interface StyleProps {
  backgroundColor: string;
}
const useStyles = makeStyles<null, StyleProps>({
  wrapper: {
    position: 'relative',
    width: '220px',
    height: '220px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
  chart: {
    position: 'absolute',
    margin: '0 auto',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    zIndex: 5,
    background: ({ backgroundColor }) => backgroundColor,
  },
});

export default useStyles;
