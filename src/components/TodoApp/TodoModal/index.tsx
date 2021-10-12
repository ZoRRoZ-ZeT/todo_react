import Tooltip from '@components/Tooltip';
import { ApplicationState } from '@store/index';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Task } from '../../../types/todo.types';
import TodoModalWindow from './ModalWindow/index';
import Fab from '@material-ui/core/Fab';
import PieChartIcon from '@material-ui/icons/PieChart';
import useStyles from './styles';
import { AppContext } from '@context/index';
import useTranslate from '@hooks/transate';

interface IProps {
  tasks: Task[];
  filterPredicate: (item: Task) => boolean;
}

const TodoModal = ({ tasks, filterPredicate }: IProps) => {
  const { state } = useContext(AppContext);
  const t = useTranslate(state.language);

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
