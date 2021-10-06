import Tooltip from '@components/Tooltip';
import { ApplicationState } from '@store/index';
import React, { useCallback, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Task } from '../../../types/todo.types';
import TodoModalWindow from './ModalWindow/index';
import './index.scss';

interface IProps {
  tasks: Task[];
  filterPredicate: (item: Task) => boolean;
}

const TodoModal = ({ tasks, filterPredicate }: IProps) => {
  const [isShowModal, setShowModal] = useState(false);

  const filteredTasks = useMemo(
    () => (filterPredicate ? tasks.filter(filterPredicate) : tasks),
    [tasks, filterPredicate]
  );

  const handleToggleModal = useCallback(() => {
    setShowModal(!isShowModal);
  }, [isShowModal]);

  return (
    <div className="modal">
      <Tooltip title="Open modal with Pie-Chart">
        <button
          className="modal__button button-animate"
          onClick={handleToggleModal}
        >
          Open Modal
        </button>
      </Tooltip>
      <TodoModalWindow
        tasks={filteredTasks}
        isActive={isShowModal}
        onToggleModal={handleToggleModal}
      />
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  tasks: state.tasks.list,
});

export default connect(mapStateToProps)(React.memo(TodoModal));
