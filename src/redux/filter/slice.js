import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue: (_, action) => {
      return action.payload;
    },
  },
});
export const { reducer: filterReducer } = filterSlice;
export const { setFilterValue } = filterSlice.actions;
