import React from 'react';
import { ChartData, Sector } from 'types/index.types';

interface IProps {
  data: ChartData;
  palette: Array<string>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

class PieChart extends React.Component<IProps, IState> {
  sectors: Sector[];

  constructor(props: IProps) {
    super(props);

    this.sectors = [];

    this.getColor = this.getColor.bind(this);
    this.loadSectors = this.loadSectors.bind(this);
  }

  loadSectors() {
    const totalCount = this.props.data.reduce(
      (result, item) => result + item.dataValue,
      0
    );

    let currentFill = 0;
    let paletteIndex = 0;

    this.props.data.forEach((dataSector) => {
      const filling = (dataSector.dataValue / totalCount) * 100;
      const sector = {
        color: this.props.palette[paletteIndex++],
        name: dataSector.dataName,
        start: currentFill,
        end: currentFill + filling,
      };
      this.sectors.push(sector);
      currentFill += filling;
    });
  }

  getColor() {
    this.loadSectors();

    let gradient = '';
    console.log(this.sectors);
    this.sectors.forEach((sector) => {
      gradient += `${sector.color} ${sector.start}% ${sector.end}%, `;
    });
    gradient = gradient.slice(0, gradient.length - 2);
    console.log(gradient);
    console.log(`conic-gradient(${gradient})`);
    return `conic-gradient(${gradient})`;
  }

  render() {
    return (
      <div className="wrapper">
        <div
          className="pie-chart"
          style={{
            background: this.getColor(),
          }}
        ></div>
        <div className="pie-chart-hover"></div>
        <div className="tooltip"></div>
      </div>
    );
  }
}

export default PieChart;
