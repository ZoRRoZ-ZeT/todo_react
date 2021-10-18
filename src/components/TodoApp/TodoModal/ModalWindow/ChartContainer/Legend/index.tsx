import React from 'react';

import { ChartData } from '@type/index.types';

import useStyles from './styles';

interface IProps {
  data: ChartData;
  palette: Array<string>;
}

const ChartLegend = ({ data, palette }: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.legend}>
      {data.map((chartData, index) => (
        <div key={`${chartData}/${index}`} className={classes.item}>
          <div
            className={classes.mark}
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
