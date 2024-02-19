import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type TSliceGlobal = {
  message: string;
};

const initialState: TSliceGlobal = {
  message: 'Global state',
};

const sliceGlobal = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    addRespositories: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const {addRespositories} = sliceGlobal.actions;
export {sliceGlobal};
