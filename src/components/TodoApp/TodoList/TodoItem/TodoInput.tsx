import React, { ChangeEvent, KeyboardEvent } from 'react';

interface IProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const TodoInput = React.memo(function TodoInput(props: IProps) {
  const handleInputSubmit = () => {
    if (props.value.trim() === '') {
      return;
    }

    props.onSubmit();
  };

  return (
    <input
      className="item__edit"
      onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          handleInputSubmit();
        }
      }}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        props.onChange(event.target.value)
      }
      onBlur={handleInputSubmit}
      value={props.value}
      autoFocus
    />
  );
});

export default TodoInput;
