import { ChartData } from '@type/index.types';
import React from 'react';
import ChartLegend from './Legend';
import PieChart from './PieChart';
import './index.scss';

interface IProps {
  data: ChartData;
  palette: Array<string>;
}

const ChartContainer = React.memo(function ChartContainer(props: IProps) {
  return (
    <div className="chart-container">
      <PieChart data={props.data} palette={props.palette} />
      <ChartLegend data={props.data} palette={props.palette} />
    </div>
  );
});

export default ChartContainer;
