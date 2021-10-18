import React, { useEffect, useMemo, useState } from 'react';

import { ChartData, Sector } from '@type/index.types';

import useStyles from './styles';

interface IProps {
  data: ChartData;
  palette: Array<string>;
}

const PieChart = ({ data, palette }: IProps) => {
  const [gradientColor, setGradientColor] = useState('conic-gradient(white)');
  const classes = useStyles({ backgroundColor: gradientColor });

  const totalCount = useMemo(() => {
    return data.reduce((result, item) => result + item.dataValue, 0);
  }, [data]);

  const sectors = useMemo(() => {
    let currentFill = 0;
    let paletteIndex = 0;

    return data.reduce((resultSectors, dataSector) => {
      const filling = (dataSector.dataValue / totalCount) * 100;
      const sectors = [
        ...resultSectors,
        {
          color: palette[paletteIndex++],
          name: dataSector.dataName,
          start: currentFill,
          end: currentFill + (dataSector.dataValue / totalCount) * 100,
        },
      ];
      currentFill += filling;
      return sectors;
    }, [] as Sector[]);
  }, [data, palette, totalCount]);

  useEffect(() => {
    const gradient = sectors.reduce(
      (result, sector) =>
        result + `${sector.color} ${sector.start}% ${sector.end}%, `,
      ''
    );
    const color = gradient
      ? `conic-gradient(${gradient.slice(0, -2)})`
      : 'none';
    setGradientColor(color);
  }, [sectors]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.chart}></div>
    </div>
  );
};

export default React.memo(PieChart);
