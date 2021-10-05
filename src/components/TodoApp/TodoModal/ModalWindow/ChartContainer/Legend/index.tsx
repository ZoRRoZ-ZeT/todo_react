import React from 'react';
import { ChartData } from '@type/index.types';
import './index.scss';

interface IProps {
  data: ChartData;
  palette: Array<string>;
}

const ChartLegend = React.memo(function ChartLegend(props: IProps) {
  return (
    <div className="legend">
      {props.data.map((chartData, index) => (
        <div key={`${chartData}/${index}`} className="legend__item">
          <div
            className="item-mark"
            style={{
              background: props.palette[index],
            }}
          ></div>
          <span>{chartData.dataName}</span>
        </div>
      ))}
    </div>
  );
});

export default ChartLegend;
