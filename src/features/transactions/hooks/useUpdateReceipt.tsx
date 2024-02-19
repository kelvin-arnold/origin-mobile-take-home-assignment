import React from 'react';
import {uploadTransactionReceipt} from '../service';
import {TError, TSuccess} from '../../../types';

export const useUpdateReceipt = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const [error, setError] = React.useState<TError | null>(null);
  const [success, setSuccess] = React.useState<TSuccess | null>(null);

  const attachReceipt = async (id: number, receipt: string) => {
    setLoading(true);
    setSuccess(null);
    setError(null);
    const response = await uploadTransactionReceipt(id, receipt);
    if (response.error) {
      setError(response.error);
    } else if (response.data) {
      setSuccess({
        message: 'Receipt updated succesfully',
      });
    }
    setLoading(false);
    setTimeout(() => {
      clearMessages();
    }, 2000);
  };

  const clearMessages = () => {
    setError(null);
    setSuccess(null);
  };

  return {
    loading,
    error,
    success,
    attachReceipt,
  };
};
