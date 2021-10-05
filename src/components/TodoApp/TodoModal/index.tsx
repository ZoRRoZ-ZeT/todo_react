import Tooltip from '@components/Tooltip';
import { ApplicationState } from '@store/index';
import React from 'react';
import { connect } from 'react-redux';
import { Task } from '../../../types/todo.types';
import TodoModalWindow from './ModalWindow/index';

interface IProps {
  tasks: Task[];
  filtering: (item: Task) => boolean;
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
    const filteredTasks = this.props.filtering
      ? this.props.tasks.filter(this.props.filtering)
      : this.props.tasks;
    return (
      <div className="modal">
        <Tooltip title="Open modal with Pie-Chart">
          <button
            className="modal__button button-animate"
            onClick={this.handleToggleModal}
          >
            Open Modal
          </button>
        </Tooltip>
        <TodoModalWindow
          tasks={filteredTasks}
          isActive={this.state.isShowModal}
          onToggleModal={this.handleToggleModal}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  tasks: state.tasks.list,
});

export default connect(mapStateToProps)(TodoModal);
