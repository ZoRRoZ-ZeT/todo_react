import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useStyles from './styles';

interface IProps {
  value: string;
  onChange: (value: string) => void;
  title: string;
  type: string;
}

const FormInput = ({ value, onChange, title, type }: IProps) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = '';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (value.length === 0) {
      e.target.placeholder = title;
    }
  };

  return (
    <div className={classes.container}>
      <ArrowForwardIosIcon className={classes.arrow} />
      <input
        type={type}
        className={classes.input}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={title}
      />
    </div>
  );
};

export default React.memo(FormInput);
