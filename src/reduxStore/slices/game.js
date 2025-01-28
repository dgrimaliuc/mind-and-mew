import { createSlice } from '@reduxjs/toolkit';
import { levels } from 'utils';
import { cloneDeep } from 'lodash';
import { fetchImages } from 'reduxStore/thunks/images';

const initialState = {
  level: levels.easy,
  playersNumber: 1,
  players: {},
  errors: {},
  images: {
    status: 'idle',
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
      initialState.images = state.images;
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
  extraReducers: builder => {
    builder
      .addCase(fetchImages.pending, state => {
        state.images.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        const [correct, incorrect] = action.payload;
        state.images = { correct, incorrect, status: 'succeeded' };
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.images.status = 'failed';
        state.images.error = action.error.message;
      });
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
