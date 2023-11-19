import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: localStorage.getItem('searchKey') || '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;
export default searchSlice.reducer;
