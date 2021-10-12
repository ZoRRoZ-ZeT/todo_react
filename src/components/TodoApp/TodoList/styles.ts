import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    transition: `border-color 1s cubic-bezier(0.4, 0, 0.2, 1)`,
    borderColor: theme.colors.borderColor,
    '& > li:last-child': {
      borderBottom: 'none',
    },
  },
  item: {
    position: 'relative',
    display: 'block',
    padding: '7px 0px 7px 8px',
    backgroundColor: theme.colors.backgroundColor,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderColor: theme.colors.borderColor,
    transition: `background-color 1s cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 1s cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 1s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
    color: theme.colors.color,
    '&:active': {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      boxShadow: theme.colors.itemHover,
      zIndex: 3,
    },
  },
}));

export default useStyles;
