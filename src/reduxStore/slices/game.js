import { createSlice } from '@reduxjs/toolkit';
import { levels } from 'utils';
import { cloneDeep } from 'lodash';

const initialState = {
  level: levels.easy,
  playersNumber: 1,
  players: {},
  errors: {},
  images: {
    correct: 'https://cdn2.thecatapi.com/images/ATYs2BetM.jpg',
    incorrect: 'https://cdn2.thecatapi.com/images/xnzzM6MBI.jpg',
  },
  currentPlayerId: 1,
};
const gameSlice = createSlice({
  name: 'game',
  initialState: cloneDeep(initialState),
  reducers: {
    resetGame(state) {
      Object.assign(state, cloneDeep(initialState));
    },
    setLevel(state, action) {
      state.level = action.payload;
    },
    setPlayer(state, action) {
      const { id } = action.payload;
      state.players[id] = action.payload;
    },
    setPlayerError(state, action) {
      const { id, value } = action.payload;
      state.errors[id] = value;
    },
    setPlayerResult(state, action) {
      const { id, correct, incorrect } = action.payload;
      state.players[id].results = { correct, incorrect };
    },
    resetPlayers(state) {
      state.players = {};
      state.errors = {};
    },
    setPlayersNumber(state, action) {
      state.playersNumber = action.payload;
    },
    setCurrentPlayerId(state, action) {
      state.currentPlayerId = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
