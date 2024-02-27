import { useEffect, useState } from 'react';
import { Sales, totalSales } from '../../types/sales';
import DonutChart, { ChartData } from '../DonutChart';
import './styles.css';
import { requestBackend } from '../../util/requests';
import { formatPrice } from '../../util/formatters';

type Props = {
  sales: Sales[];
};

const SalesCard = ({ sales }: Props) => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: [],
  });

  return (
    <>
      <div className="sales-card-container base-card">
        <h1>{formatPrice(Number(totalSales(sales)))}</h1>
        <span>Total de vendas</span>
        <div className="sales-card-chart-container">
          <DonutChart
            labels={sales.map((x) => x.gender)}
            series={sales.map((x) => x.sum)}
          />
        </div>
      </div>
    </>
  );
};

export default SalesCard;
