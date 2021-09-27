import { ChartData } from '@type/index.types';
import React from 'react';
import ChartLegend from './Legend';
import PieChart from './PieChart';

interface IProps {
  data: ChartData;
  palette: Array<string>;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

class ChartContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="chart-container">
        <PieChart data={this.props.data} palette={this.props.palette} />
        <ChartLegend data={this.props.data} palette={this.props.palette} />
      </div>
    );
  }
}

export default ChartContainer;
