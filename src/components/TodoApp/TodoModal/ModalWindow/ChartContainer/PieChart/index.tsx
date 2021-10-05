import React, { useEffect, useState } from 'react';
import { ChartData, Sector } from 'types/index.types';
import './index.scss';

interface IProps {
  data: ChartData;
  palette: Array<string>;
}

const PieChart = React.memo(function PieChart(props: IProps) {
  const [gradientColor, setGradientColor] = useState('conic-gradient(white)');

  useEffect(() => {
    const totalCount = props.data.reduce(
      (result, item) => result + item.dataValue,
      0
    );

    let currentFill = 0;
    let paletteIndex = 0;

    const sectors = props.data.reduce((resultSectors, dataSector) => {
      const filling = (dataSector.dataValue / totalCount) * 100;
      const sectors = [
        ...resultSectors,
        {
          color: props.palette[paletteIndex++],
          name: dataSector.dataName,
          start: currentFill,
          end: currentFill + (dataSector.dataValue / totalCount) * 100,
        },
      ];
      currentFill += filling;
      return sectors;
    }, [] as Sector[]);

    const gradient = sectors.reduce(
      (result, sector) =>
        result + `${sector.color} ${sector.start}% ${sector.end}%, `,
      ''
    );
    const color = gradient
      ? `conic-gradient(${gradient.slice(0, -2)})`
      : 'none';
    setGradientColor(color);
  }, [props.data, props.palette]);

  return (
    <div className="wrapper">
      <div
        className="pie-chart"
        style={{
          background: gradientColor,
        }}
      ></div>
      <div className="pie-chart-hover"></div>
      <div className="tooltip"></div>
    </div>
  );
});

export default PieChart;
