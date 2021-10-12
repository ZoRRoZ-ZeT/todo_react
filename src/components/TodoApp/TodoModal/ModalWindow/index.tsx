import { MessageType, Priority } from '@type/index.types';
import { Task } from '@type/todo.types';
import React, { useCallback, useMemo } from 'react';
import ChartContainer from './ChartContainer';
import { mapPriorities, mapPrioritiesOrder } from '@constants/index';
import useStyles from './styles';
import useTranslate from '@hooks/transate';

interface IProps {
  tasks: Task[];
  isActive: boolean;
  onToggleModal: () => void;
}

const TodoModalWindow = ({ tasks, isActive, onToggleModal }: IProps) => {
  const t = useTranslate();

  const classes = useStyles();
  const sortedTasks = useMemo(() => {
    return [...tasks].sort(
      (a, b) => mapPrioritiesOrder[a.priority] - mapPrioritiesOrder[b.priority]
    );
  }, [tasks]);

  const palette = useMemo(() => {
    return sortedTasks.reduce((resultData, task) => {
      return resultData.includes(mapPriorities[task.priority])
        ? resultData
        : [...resultData, mapPriorities[task.priority]];
    }, [] as string[]);
  }, [sortedTasks]);

  const charData = useMemo(() => {
    const data = sortedTasks.reduce((resultData, task) => {
      return {
        ...resultData,
        [task.priority]: (resultData[task.priority] ?? 0) + 1,
      };
    }, {} as Record<Priority, number>);
    return Array.from(Object.entries(data), ([dataName, dataValue]) => ({
      dataName: t(dataName as MessageType),
      dataValue,
    }));
  }, [sortedTasks, t]);

  const handleCloseClick = useCallback(() => {
    onToggleModal();
  }, [onToggleModal]);

  return isActive ? (
    <div>
      <div className={classes.shadow}></div>
      <div className={classes.content}>
        <div className={classes.header}>
          <span>{t('MY_MODAL_WINDOW')}</span>
          <button className={classes.close} onClick={handleCloseClick}>
            ×
          </button>
        </div>
        <hr className={classes.line} />
        <div className={classes.body}>
          <ChartContainer data={charData} palette={palette} />
        </div>
        <hr className={classes.line} />
        <div className={classes.footer}>
          <span>{t('THIS_IS_TEST_MODAL_WINDOW')}</span>
          <span>{t('POWERED_BY_EDUARD_PERETOKIN')}</span>
        </div>
      </div>
    </div>
  ) : null;
};

export default React.memo(TodoModalWindow);
