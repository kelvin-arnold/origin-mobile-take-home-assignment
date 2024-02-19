import {createSlice} from '@reduxjs/toolkit';
import {Transactions, TransactionsEntity} from '../types';
import {RootState} from './_store';

type TSliceTransactions = {
  transactions?: Transactions | null;
  transaction?: TransactionsEntity | null;
};

const initialState: TSliceTransactions = {
  transactions: null,
  transaction: null,
};

const sliceTransactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    setTransaction: (state, action) => {
      state.transaction = action.payload;
    },
  },
});

// export const {addRespositories} = sliceTransactions.actions;
export const transactionsSelector = (state: RootState) => state;
export {sliceTransactions};
