import React from 'react';
import { ChartData } from '@type/index.types';
import './index.scss';

interface IProps {
  data: ChartData;
  palette: Array<string>;
}

const ChartLegend = ({ data, palette }: IProps) => {
  return (
    <div className="legend">
      {data.map((chartData, index) => (
        <div key={`${chartData}/${index}`} className="legend__item">
          <div
            className="item-mark"
            style={{
              background: palette[index],
            }}
          ></div>
          <span>{chartData.dataName}</span>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ChartLegend);
