import React from 'react';
import { ChartData } from '@type/index.types';

interface IProps {
  data: ChartData;
  palette: Array<string>;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

class ChartLegend extends React.Component<IProps, IState> {
  render() {
    return (
      <div className="legend">
        {this.props.data.map((chartData, index) => (
          <div key={`${chartData}/${index}`} className="legend__item">
            <div
              className="item-mark"
              style={{
                background: this.props.palette[index],
              }}
            ></div>
            <span>{chartData.dataName}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default ChartLegend;
