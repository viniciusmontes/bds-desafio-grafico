export type Sales = {
  gender: string;
  sum: number;
};

export const totalSales = (sales: Sales[]): number => {
  return sales.reduce(
    (previousValues, currentValue) => previousValues + currentValue.sum,
    0
  );
};
