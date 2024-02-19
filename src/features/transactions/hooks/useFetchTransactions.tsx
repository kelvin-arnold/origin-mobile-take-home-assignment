import React, {useEffect} from 'react';
import {fetchTransactions} from '../service';
import {TError} from '../../../types';
import {Transactions} from '../types';

export const useFetchTransactions = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [pageList, setPageList] = React.useState<number>(1);
  const [error, setError] = React.useState<TError>();
  const [data, setData] = React.useState<Transactions | null>(null);

  // Fetch Data
  const fetchData = async () => {
    setLoading(true);
    const response = await fetchTransactions(pageList, 32);
    if (response.error) {
      setError(response.error);
    } else if (response.data) {
      const dataResponse = {
        ...response.data,
        Transactions: [
          ...(data ? data.Transactions ?? [] : [])!,
          ...response.data?.Transactions!,
        ],
      };
      setData(dataResponse);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageList]);

  return {
    loading,
    error,
    data,
    pageList,
    setPageList,
    fetchData,
  };
};
