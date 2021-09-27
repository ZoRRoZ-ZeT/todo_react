import { ChartData, Priority } from '../../../../types/index.types';
import { Task } from '@type/todo.types';
import React from 'react';
import ChartContainer from './ChartContainer';

interface IProps {
  tasks: Task[];
  isActive: boolean;
  onToggleModal: () => void;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

class TodoModalWindow extends React.Component<IProps, IState> {
  mapPriorities: { [x: string]: string };
  constructor(props: IProps) {
    super(props);

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.convertToPieChartData = this.convertToPieChartData.bind(this);

    this.mapPriorities = {
      [Priority.HIGH]: '#ff110099',
      [Priority.MEDIUM]: '#ffe50080',
      [Priority.LOW]: '#89ff00d9',
      [Priority.NONE]: '#ffffff',
    };
  }

  handleCloseClick() {
    this.props.onToggleModal();
  }

  convertToPieChartData(): ChartData {
    const chartData = this.props.tasks.reduce((resultData, task) => {
      return {
        ...resultData,
        [task.priority]: (resultData[task.priority] ?? 0) + 1,
      };
    }, {} as { [name in Priority]: number });

    console.log(chartData);

    const pieChartArray = Array.from(
      Object.entries(chartData),
      ([dataName, dataValue]) => ({
        dataName,
        dataValue,
      })
    );

    return pieChartArray;
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
            <ChartContainer
              data={this.convertToPieChartData()}
              palette={['#ff110099', '#ffe50080', '#89ff00d9', '#ffffff']}
            />
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
