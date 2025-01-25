import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'board',
  initialState: { fullOpen: true, correct: 0, incorrect: 0, isModalShown: true },
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
    showModal(state) {
      state.isModalShown = true;
    },
    hideModal(state) {
      state.isModalShown = false;
    },
  },
});

export const boardActions = boardSlice.actions;
export default boardSlice.reducer;
