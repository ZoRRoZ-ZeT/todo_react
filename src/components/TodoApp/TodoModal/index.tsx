import React from 'react';
import { Task } from '../../../types/todo.types';
import TodoModalWindow from './ModalWindow/index';

interface IProps {
  tasks: Task[];
}
interface IState {
  isShowModal: boolean;
}

class TodoModal extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.handleToggleModal = this.handleToggleModal.bind(this);

    this.state = {
      isShowModal: false,
    };
  }

  handleToggleModal() {
    this.setState((prevState) => ({
      isShowModal: !prevState.isShowModal,
    }));
  }

  render() {
    return (
      <div className="modal">
        <button
          className="modal__button button-animate"
          onClick={this.handleToggleModal}
        >
          Open Modal
        </button>
        <TodoModalWindow
          tasks={this.props.tasks}
          isActive={this.state.isShowModal}
          onToggleModal={this.handleToggleModal}
        />
      </div>
    );
  }
}

export default TodoModal;
