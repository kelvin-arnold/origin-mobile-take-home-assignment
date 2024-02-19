import {TError, TFetchResponse, TSuccess} from '../../../types';
import {Coordinates, Transactions, TransactionsEntity} from '../types';

const API_URL =
  'https://tque3jpn1e.execute-api.us-east-1.amazonaws.com/mobile-tha/transactions';

export const fetchTransactions = async (
  page: number,
  pageSize: number,
): Promise<TFetchResponse<Transactions, TError>> => {
  try {
    const response = await fetch(
      `${API_URL}?page=${page}&pageSize=${pageSize}`,
      {
        method: 'GET',
      },
    );
    if (!response.ok) {
      return {
        error: {
          message: 'Something wrong getting transactions',
        },
        status: 400,
      };
    }
    const data: Transactions = await response.json();
    return {
      data: data,
      status: 202,
    };
  } catch (error) {
    return {
      error: {
        message: JSON.stringify(error),
      },
      status: 500,
    };
  }
};

export const fetchTransactionById = async (
  id: string,
): Promise<TFetchResponse<TransactionsEntity, TError>> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'GET',
    });
    if (!response.ok) {
      return {
        error: {
          message: 'Something wrong getting a transaction by id',
        },
        status: 400,
      };
    }
    const data: TransactionsEntity = await response.json();
    return {
      data: data,
      status: 202,
    };
  } catch (error) {
    return {
      error: {
        message: JSON.stringify(error),
      },
      status: 500,
    };
  }
};

export const updateTransactionCoordinates = async (
  id: number,
  coordinates: Coordinates,
): Promise<TFetchResponse<TSuccess, TError>> => {
  try {
    const response = await fetch(`${API_URL}/${id}/coordinates`, {
      method: 'POST',
      body: JSON.stringify({
        Lat: coordinates.Lat,
        Lon: coordinates.Lon,
      }),
    });
    if (!response.ok) {
      return {
        error: {
          message: 'Something wrong updating coordinates',
        },
        status: 400,
      };
    }
    return {
      data: {
        message: 'Coordinates updated succesfully',
      },
      status: 202,
    };
  } catch (error) {
    return {
      error: {
        message: JSON.stringify(error),
      },
      status: 500,
    };
  }
};

export const uploadTransactionReceipt = async (
  id: number,
  ReceiptImageUrl: string,
): Promise<TFetchResponse<TSuccess, TError>> => {
  try {
    const response = await fetch(`${API_URL}/${id}/receipt`, {
      method: 'POST',
      body: JSON.stringify({
        ReceiptImageUrl: ReceiptImageUrl,
      }),
    });
    if (!response.ok) {
      return {
        error: {
          message: 'Something wrong updating receipt',
        },
        status: 400,
      };
    }
    return {
      data: {
        message: 'Receipt attach correctly',
      },
      status: 202,
    };
  } catch (error) {
    return {
      error: {
        message: JSON.stringify(error),
      },
      status: 500,
    };
  }
};
