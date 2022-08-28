import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    filterItems(state, action) {
      state.value = action.payload;
    },
  },
});

export const { filterItems } = filterSlice.actions;
export const getFilterValue = state => state.filter.value;
