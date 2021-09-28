import { ChartData, Priority } from '@type/index.types';
import { Task } from '@type/todo.types';
import React from 'react';
import ChartContainer from './ChartContainer';
import { mapPriorities, mapPrioritiesOrder } from '@constants/index';

interface IProps {
  tasks: Task[];
  isActive: boolean;
  onToggleModal: () => void;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

class TodoModalWindow extends React.Component<IProps, IState> {
  chartData: ChartData;
  palette: Array<string>;
  constructor(props: IProps) {
    super(props);

    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleCloseClick() {
    this.props.onToggleModal();
  }

  componentDidUpdate() {
    const sortedTasks = [...this.props.tasks];
    sortedTasks.sort(
      (a, b) => mapPrioritiesOrder[a.priority] - mapPrioritiesOrder[b.priority]
    );

    this.palette = [];
    const chartData = sortedTasks.reduce((resultData, task) => {
      if (!this.palette.includes(mapPriorities[task.priority])) {
        this.palette.push(mapPriorities[task.priority]);
      }
      return {
        ...resultData,
        [task.priority]: (resultData[task.priority] ?? 0) + 1,
      };
    }, {} as Record<Priority, number>);

    this.chartData = Array.from(
      Object.entries(chartData),
      ([dataName, dataValue]) => ({
        dataName,
        dataValue,
      })
    );
  }

  render() {
    return this.props.isActive ? (
      <div className="modal-block">
        <div className="modal-shadow"></div>
        <div className="modal__content content-window">
          <div className="content-window__header">
            <span>My modal window</span>
            <button
              className="btn btn-empty close"
              onClick={this.handleCloseClick}
            >
              ×
            </button>
          </div>
          <hr />
          <div className="content-window__body">
            <ChartContainer data={this.chartData} palette={this.palette} />
          </div>
          <hr />
          <div className="content-window__footer">
            <span>This is test modal window</span>
            <span>Powered by Eduard Peretokin</span>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default TodoModalWindow;
