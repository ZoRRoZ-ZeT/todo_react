import React from 'react';
import clsx from 'clsx';
import { callApi } from '@apis/todos';
import { Method } from '@type/index.types';
import { connect } from 'react-redux';
import { toggleTasks } from '@store/actions/tasks';

interface IProps {
  toggleTasks: (fillValue: boolean) => void;
  isActive: boolean;
}
interface IState {
  inputValue: string;
}

class Toggler extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const fillValue = await callApi<boolean>('/toggle', {
      method: Method.PUT,
    });
    this.props.toggleTasks(fillValue);
  }

  render() {
    return (
      <button
        type="button"
        className={clsx({
          'add-form__toggler': true,
          'form-toggler': true,
          'all-checked': this.props.isActive,
        })}
        onClick={this.handleClick}
      ></button>
    );
  }
}

export default connect(null, { toggleTasks })(Toggler);
