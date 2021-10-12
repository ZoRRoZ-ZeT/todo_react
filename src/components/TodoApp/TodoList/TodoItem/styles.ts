import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  item: {
    fontSize: 'inherit',
    display: 'flex',
    alignItems: 'center',
    '&:hover $button': {
      visibility: 'visible',
    },
  },
  toggle: {
    minWidth: '30px',
    minHeight: '30px',
    marginRight: '15px',
    borderRadius: '50%',
    appearance: 'none',
    WebkitAppearance: 'none',
    border: '1px solid #e6e6e6bd',
    cursor: 'pointer',

    '&:checked': {
      background:
        "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E') -9px -6px",
      '& ~ $label': {
        textDecoration: 'line-through',
        color: '#d9d9d9',
      },
    },
  },
  label: {
    paddingLeft: '7px',
  },
  clicked: {
    display: 'none',
  },
  editInput: {
    padding: '3px 6px',
    fontSize: 'inherit',
    lineHeight: 1.5,
    outline: 'none',
    transition: '0.3s all',
    boxShadow: 'inset 0 -1px 5px 0 rgb(0 0 0 / 20%)',
    border: '1px solid #999',
    width: '100%',
  },
  dropdown: {
    position: 'absolute',
    right: '80px',
  },
  button: {
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontWeight: 100,
    fontSize: '30px',
    color: '#cc9a9a',
    marginRight: '20px;',
    visibility: 'hidden',
    marginLeft: 'auto',
  },
});

export default useStyles;
