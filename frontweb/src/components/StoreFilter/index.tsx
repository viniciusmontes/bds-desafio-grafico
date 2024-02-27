import { Controller, useForm } from 'react-hook-form';
import { Store } from '../../types/store';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { requestBackend } from '../../util/requests';

import './styles.css';

export type SelectFilterData = {
  store: Store | null;
};

type Props = {
  onSubmitFilter: (data: SelectFilterData) => void;
};

const StoreFilter = ({ onSubmitFilter }: Props) => {
  const [selectStore, setSelectStore] = useState<Store[]>([]);

  const { handleSubmit, setValue, getValues, control } =
    useForm<SelectFilterData>();

  useEffect(() => {
    requestBackend({ url: '/stores' }).then((response) => {
      setSelectStore(response.data);
    });
  }, []);

  const onSubmit = (formData: SelectFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeStore = (value: Store) => {
    setValue('store', value);
    const obj: SelectFilterData = {
      store: getValues('store'),
    };
    onSubmitFilter(obj);
  };

  return (
    <>
      <div className="store-filter-container base-card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="store-filter">
            <Controller
              name="store"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectStore}
                  placeholder="Selecione a loja"
                  isClearable
                  classNamePrefix="store-filter-select"
                  onChange={(value) => handleChangeStore(value as Store)}
                  getOptionLabel={(store: Store) => store.name}
                  getOptionValue={(store: Store) => String(store.id)}
                />
              )}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default StoreFilter;
