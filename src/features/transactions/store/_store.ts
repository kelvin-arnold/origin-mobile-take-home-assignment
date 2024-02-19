import {configureStore} from '@reduxjs/toolkit';
import {sliceTransactions} from './_storeRepositories';

const store = configureStore({
  reducer: {
    transactions: sliceTransactions.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
