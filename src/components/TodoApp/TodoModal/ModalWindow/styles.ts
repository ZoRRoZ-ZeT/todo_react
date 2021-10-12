import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  line: {
    borderColor: theme.colors.lineColor,
  },
  shadow: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: `${theme.colors.color}1a`,
    userSelect: 'none',
    zIndex: 4,
  },
  content: {
    width: '80%',
    height: '80vh',
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, 10%)',
    borderRadius: '10px',
    boxShadow: theme.colors.modalShadow,
    background: theme.colors.bodyColor,
    zIndex: 5,
  },
  header: {
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
    userSelect: 'none',
    cursor: 'move',
    color: theme.colors.color,
  },
  body: {
    height: '80%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
  },
  footer: {
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
    fontSize: '14px',
    color: 'grey',
  },
  close: {
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontWeight: 100,
    fontSize: '30px',
    color: '#cc9a9a',
  },
}));

export default useStyles;
