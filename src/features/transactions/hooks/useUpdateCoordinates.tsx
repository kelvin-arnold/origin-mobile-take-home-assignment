import React from 'react';
import {updateTransactionCoordinates} from '../service';
import {TError, TSuccess} from '../../../types';
import {Coordinates} from '../types';

export const useUpdateCoordinates = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const [error, setError] = React.useState<TError | null>(null);
  const [success, setSuccess] = React.useState<TSuccess | null>(null);

  // Fetch Data
  const attachCoordinates = async (id: number, coordinates: Coordinates) => {
    setLoading(true);
    setSuccess(null);
    setError(null);
    const response = await updateTransactionCoordinates(id, coordinates);
    if (response.error) {
      setError(response.error);
    } else if (response.data) {
      setSuccess({
        message: 'Coordinates updated succesfully',
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
    attachCoordinates,
  };
};
