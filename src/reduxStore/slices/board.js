import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'board',
  initialState: { fullOpen: false, correct: 0, incorrect: 0 },
  reducers: {
    showCards(state) {
      state.fullOpen = true;
    },
    hideCards(state) {
      state.fullOpen = false;
    },
    incrementCorrect(state) {
      state.correct += 1;
    },
    incrementIncorrect(state) {
      state.incorrect += 1;
    },
  },
});

export const boardActions = counterSlice.actions;
export default counterSlice.reducer;
