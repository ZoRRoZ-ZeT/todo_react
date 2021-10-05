import { Priority } from '@type/index.types';
import { Task } from '@type/todo.types';
import React, { useMemo } from 'react';
import ChartContainer from './ChartContainer';
import { mapPriorities, mapPrioritiesOrder } from '@constants/index';
import './index.scss';

interface IProps {
  tasks: Task[];
  isActive: boolean;
  onToggleModal: () => void;
}

const TodoModalWindow = React.memo(function TodoModalWindow(props: IProps) {
  const sortedTasks = useMemo(
    () =>
      [...props.tasks].sort(
        (a, b) =>
          mapPrioritiesOrder[a.priority] - mapPrioritiesOrder[b.priority]
      ),
    [props.tasks]
  );

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
      dataName,
      dataValue,
    }));
  }, [sortedTasks]);

  return props.isActive ? (
    <div className="modal-block">
      <div className="modal-shadow"></div>
      <div className="modal__content content-window">
        <div className="content-window__header">
          <span>My modal window</span>
          <button className="btn btn-empty close" onClick={props.onToggleModal}>
            ×
          </button>
        </div>
        <hr />
        <div className="content-window__body">
          <ChartContainer data={charData} palette={palette} />
        </div>
        <hr />
        <div className="content-window__footer">
          <span>This is test modal window</span>
          <span>Powered by Eduard Peretokin</span>
        </div>
      </div>
    </div>
  ) : null;
});

export default TodoModalWindow;
