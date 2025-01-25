import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: { level: 'easy', playersNumber: 1, players: {}, errors: {} },
  reducers: {
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
    resetPlayers(state) {
      state.players = {};
      state.errors = {};
    },
    setPlayersNumber(state, action) {
      state.playersNumber = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
