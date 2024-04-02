import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { text: '' },
  reducers: {
    setStatusFilter(state, action) {
      state.text = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
export const selectContatcsFilter = state => state.filters.text;
