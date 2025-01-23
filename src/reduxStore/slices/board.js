import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'board',
  initialState: { fullOpen: false },
  reducers: {
    showCards(state) {
      state.fullOpen = true;
    },
    hideCards(state) {
      state.fullOpen = false;
    },
  },
});

export const boardActions = counterSlice.actions;
export default counterSlice.reducer;
