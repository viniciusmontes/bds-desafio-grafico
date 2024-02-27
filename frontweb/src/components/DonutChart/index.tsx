import Chart from 'react-apexcharts';

export type ChartData = {
  labels: string[];
  series: number[];
};

type Props = {
  labels: string[];
  series: number[];
};

const DonutChart = ({ labels, series }: Props) => {
  return (
    <Chart
      options={{ legend: { position: 'bottom' }, labels }}
      series={series}
      type="donut"
      height="295"
    />
  );
};

export default DonutChart;
