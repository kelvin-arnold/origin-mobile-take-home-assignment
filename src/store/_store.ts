import {configureStore} from '@reduxjs/toolkit';
import {sliceGlobal} from './_storeGlobal';

export const store = configureStore({
  reducer: {
    global: sliceGlobal.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
