import { useEffect, useState } from 'react';
import StoreFilter, { SelectFilterData } from '../../components/StoreFilter';
import { requestBackend } from '../../util/requests';
import SalesCard from '../../components/SalesCard';
import { Sales } from '../../types/sales';

import './styles.css';

type ControlComponents = {
  storeFilterData: SelectFilterData;
};

const Home = () => {
  const [controlComponents, setControlComponents] = useState<ControlComponents>(
    {
      storeFilterData: { store: null },
    }
  );

  const [sales, setSales] = useState<Sales[]>([]);
  const [selectStore, setSelectStore] = useState<SelectFilterData[]>([]);

  useEffect(() => {
    requestBackend({
      url: '/sales/by-gender',
      params: {
        storeId: controlComponents.storeFilterData.store?.id,
      },
    }).then((response) => {
      setSales(response.data);
    });
  }, [controlComponents]);

  const handleSubmitFilter = (data: SelectFilterData) => {
    setControlComponents({ storeFilterData: data });
  };

  
  return (
    <>
      <div className="home-container">
        <StoreFilter onSubmitFilter={handleSubmitFilter} />
        <SalesCard sales={sales} />
      </div>
    </>
  );
};

export default Home;
