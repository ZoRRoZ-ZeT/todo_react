import React, { useCallback, useMemo, useState } from 'react';
import { connect } from 'react-redux';

import Fab from '@material-ui/core/Fab';
import PieChartIcon from '@material-ui/icons/PieChart';

import { ApplicationState } from '@store/index';
import useTranslate from '@hooks/transate';
import { Task } from '@type/todo.types';
import Tooltip from '@components/Tooltip';

import TodoModalWindow from './ModalWindow/index';
import useStyles from './styles';

interface IProps {
  tasks: Task[];
  filterPredicate: (item: Task) => boolean;
}

const TodoModal = ({ tasks, filterPredicate }: IProps) => {
  const t = useTranslate();

  const classes = useStyles();
  const [isShowModal, setShowModal] = useState(false);

  const filteredTasks = useMemo(
    () => (filterPredicate ? tasks.filter(filterPredicate) : tasks),
    [tasks, filterPredicate]
  );

  const handleToggleModal = useCallback(() => {
    setShowModal(!isShowModal);
  }, [isShowModal]);
  return (
    <div className={classes.modal}>
      <Tooltip title={t('OPEN_MODAL_WITH_PIE-CHART')}>
        <Fab
          variant="extended"
          color="primary"
          className={classes.margin}
          onClick={handleToggleModal}
        >
          <PieChartIcon className={classes.extendedIcon} />
          {t('CHART')}
        </Fab>
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
