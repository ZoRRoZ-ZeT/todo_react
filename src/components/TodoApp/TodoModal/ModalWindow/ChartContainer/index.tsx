import { ChartData } from '@type/index.types';
import React from 'react';
import ChartLegend from './Legend';
import PieChart from './PieChart';
import useStyles from './styles';

interface IProps {
  data: ChartData;
  palette: Array<string>;
}

const ChartContainer = ({ data, palette }: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <PieChart data={data} palette={palette} />
      <ChartLegend data={data} palette={palette} />
    </div>
  );
};

export default React.memo(ChartContainer);
