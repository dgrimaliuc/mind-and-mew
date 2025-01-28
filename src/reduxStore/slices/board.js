import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

const initialState = { fullOpen: false, correct: 0, incorrect: 0, key: 1 };

const boardSlice = createSlice({
  name: 'board',
  initialState: cloneDeep(initialState),
  reducers: {
    resetBoard(state) {
      Object.assign(state, cloneDeep(initialState));
      state.key = Math.random();
    },
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

export const boardActions = boardSlice.actions;
export default boardSlice.reducer;
