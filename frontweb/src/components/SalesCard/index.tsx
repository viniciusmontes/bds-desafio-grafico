import { Sales, totalSales } from '../../types/sales';
import DonutChart, { ChartData } from '../DonutChart';
import { formatPrice } from '../../util/formatters';

import './styles.css';

type Props = {
  sales: Sales[];
};

const SalesCard = ({ sales }: Props) => {
  return (
    <>
      <div className="sales-card-container base-card">
        <div className="sales-card-text-container">
        <h1>{formatPrice(Number(totalSales(sales)))}</h1>
        <span>Total de vendas</span>
        </div>
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
