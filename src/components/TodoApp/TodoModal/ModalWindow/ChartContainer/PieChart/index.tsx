import React from 'react';
import { ChartData, Sector } from 'types/index.types';

interface IProps {
  data: ChartData;
  palette: Array<string>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {
  gradientColor: string;
}

class PieChart extends React.Component<IProps, IState> {
  sectors: Sector[];

  constructor(props: IProps) {
    super(props);

    this.sectors = [];

    this.state = {
      gradientColor: 'conic-gradient(white)',
    };
  }

  componentDidMount() {
    const totalCount = this.props.data.reduce(
      (result, item) => result + item.dataValue,
      0
    );

    let currentFill = 0;
    let paletteIndex = 0;

    this.sectors = this.props.data.reduce((resultSectors, dataSector) => {
      const filling = (dataSector.dataValue / totalCount) * 100;
      const sectors = [
        ...resultSectors,
        {
          color: this.props.palette[paletteIndex++],
          name: dataSector.dataName,
          start: currentFill,
          end: currentFill + (dataSector.dataValue / totalCount) * 100,
        },
      ];
      currentFill += filling;
      return sectors;
    }, []);

    const gradient = this.sectors.reduce(
      (result, sector) =>
        result + `${sector.color} ${sector.start}% ${sector.end}%, `,
      ''
    );

    this.setState({
      gradientColor: `conic-gradient(${gradient.slice(0, -2)})`,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div
          className="pie-chart"
          style={{
            background: this.state.gradientColor,
          }}
        ></div>
        <div className="pie-chart-hover"></div>
        <div className="tooltip"></div>
      </div>
    );
  }
}

export default PieChart;
