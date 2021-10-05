import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import './index.scss';

interface IProps {
  value: string;
  onInputChanged: (value: string) => void;
  onEnterPressed: () => void;
}

const TodoHeaderInput = React.memo(function TodoHeaderInput(props: IProps) {
  return (
    <input
      className="add-form__input form-input"
      placeholder="What needs to be done?"
      value={props.value}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        props.onInputChanged(event.target.value)
      }
      onKeyDown={(event: KeyboardEvent<HTMLInputElement>) =>
        event.key === 'Enter' && props.onEnterPressed()
      }
    />
  );
});

export default TodoHeaderInput;
